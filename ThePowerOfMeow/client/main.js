const serverUrl = "https://p1oeuxdxw74w.usemoralis.com:2053/server";
const appId = "GXLjcMwToExKezso35640IPMfhoOG8LokHxdEYcn";
Moralis.start({ serverUrl, appId});

let contractInstance;
let user;

// *** getting instance & user ***
$(document).ready(async function () {
    window.web3 = await Moralis.Web3.enable();
    contractInstance = new web3.eth.Contract(window.abi, "0x2696236BFB11c14C1D4D2a866B1E670406e598Ba");
    user = ethereum.selectedAddress;

    console.log("User address: " + user);
    console.log(contractInstance)
});

// ** creating a gen0 in KittyFactory **
function createKitty() {
  let dna = getDna();

  contractInstance.methods.createKittyGen0(dna).send({from: ethereum.selectedAddress}, function(error, txHash){
    if(error) {
      console.log(error);
    }
    else {
    console.log(txHash);
    }
  })

  contractInstance.events.Birth().on('data', function(event){
    console.log(event);
    let owner = event.returnValues.owner;
    let kittenId = event.returnValues.kittenId;
    let matronId = event.returnValues.matronId;
    let sireId = event.returnValues.sireId;
    let genes = event.returnValues.genes;
    alert("Gen 0  kitty created!\n" + "owner: " + owner + "\nKitten ID: "
    + kittenId + "\nMatron ID: " + matronId + "\nSire ID: " + sireId + "\nGenes: " + genes);
  })
}

// ***** calling the catalogue *****
let usersCats

async function showCatalogue(page) {
  usersCats = await contractInstance.methods.getOwnerTokens(user).call()

  if(usersCats < 1) {
    $("#userHasNoCats").show()
  }

  for(i = 0; i < usersCats.length; i++){
    let id = usersCats[i]
    let cat = await contractInstance.methods.getKitty(id).call()
    let activeSale = await contractInstance.methods.tokenIdToOffer(id).call()
    let newCatDiv = renderCatDiv(id)
    let newCattributes = renderCattributes(id, cat.genes, cat.matronId, cat.sireId, cat.generation)
    let newIdGen = renderIdGen(id, cat.generation)
    let featureBox = renderFeatureBox(id)
    if(page == "myKitties") {
      $('#catsDiv').append(featureBox)
      $('#newFeatureBox'+id).append(newCatDiv)
      $('#newFeatureBox'+id).append(newIdGen)
      $('#newFeatureBox'+id).attr('data-toggle', 'modal')
      $('#newFeatureBox'+id).attr('data-target', '#sellWindow')
      $('#newFeatureBox'+id).attr('onClick', 'catForSale("'+ id +'");')
      $('#newCat'+id).css('transform', 'scale(.6)')

      if(activeSale.active) {
        $('#newSellBanner'+id).css('display', 'block')
      }

      if(usersCats.length > 1) {
        $("#breedButton").show()
      }
    }
    if(page == "breed"){
      $('#userCatalogue').append(featureBox)
      $('#newFeatureBox'+id).attr('onClick', 'assignBreeder("'+ id +'");')
      $('#newFeatureBox'+id).append(newCatDiv)
      $('#newFeatureBox'+id).append(newCattributes)
      $('#newCat'+id).css('transform', 'scale(.6)')
    }

    styleCat(cat.genes, id)
  }
}

//**** Marketplace ******
async function showOffers() {
  let allOffers = await contractInstance.methods.getAllTokenOnSale().call()
  if(allOffers == 0) {
    $('#noCatsForSale').show()
    $('#marketMessage').hide()
  }
  let activeOffers = [...new Set(allOffers)];
  for(i = 0; i < activeOffers.length; i++) {
    let newCatOnSale = await contractInstance.methods.tokenIdToOffer(activeOffers[i]).call()
    if(newCatOnSale.active) {
      let id = newCatOnSale.tokenId
      let ethPrice = web3.utils.fromWei(newCatOnSale.price, "ether")
      let cat = await contractInstance.methods.getKitty(id).call()
      let saleDetails = renderSaleDetails(id, cat.generation, ethPrice)
      let newCatDiv = renderCatDiv(id)
      let marketBox = renderMarketBox(id)
      $('#catsForSale').append(marketBox)
      $('#newMarketBox'+id).append(saleDetails)
      $('#newMarketBox'+id).append(newCatDiv)
      styleCat(cat.genes, id)
      $('#newCat'+id).css('transform', 'scale(.8)')
      $('#newMarketBox'+id).attr('onClick', 'renderSaleWindow(' + id + ');')
    }
  }
}

async function renderSaleWindow(id) {
  let cat = await contractInstance.methods.getKitty(id).call()
  let forSale = await contractInstance.methods.tokenIdToOffer(id).call()
  let sellPrice = web3.utils.fromWei(forSale.price, "ether")
  let newCatDiv = renderCatDiv(id)
  let newCattributes = renderCattributes(id, cat.genes, cat.matronId, cat.sireId, cat.generation)
  let sellBox = renderSellBox(id)
  $('#marketKitty').empty()
  $('#marketKitty').append(sellBox)
  $('#sellBox').empty()
  $('#sellBox').append(newCatDiv)
  $('#sellBox').append(newCattributes)
  styleCat(cat.genes, id)
  if(forSale.seller.toLowerCase() == ethereum.selectedAddress){
    $('#salePrice').attr('placeholder', 'You own this cat')
    $('#buyButton').prop('disabled', true)
  } else {
    $('#salePrice').attr('placeholder', 'Price: ' + sellPrice + ' ETH')
    $('#buyButton').prop('disabled', false)
    $('#buyButton').attr('onClick', 'buyCat(' + id + ');')
  }
}

async function buyCat(id) {
  let offer = await contractInstance.methods.tokenIdToOffer(id).call()

  contractInstance.methods.buyKitty(id).send({ from: ethereum.selectedAddress, value: offer.price }, function(error, txHash){
    if(error) {
      console.log(error);
    }
    else {
    console.log(txHash);
    location.reload(true)
    }
  })

  contractInstance.events.MarketTransaction().on('data', function(event){
    console.log(event)
    let txType = event.returnValues.TxType
    let owner = event.returnValues.owner
    let tokenId = event.returnValues.tokenId
    alert("Market transaction complete\n" + "Transaction type: " + txType + "\nToken ID: "
    + tokenId + "\nOwner: " + owner)
  })

  $("#marketWindow .close").click()
}

//**** putting cats up for sale from catalogue ******
async function catForSale(id) {
  let cat = await contractInstance.methods.getKitty(id).call()
  let forSale = await contractInstance.methods.tokenIdToOffer(id).call()
  let sellPrice = web3.utils.fromWei(forSale.price, "ether")
  let newCatDiv = renderCatDiv(id)
  let newCattributes = renderCattributes(id, cat.genes, cat.matronId, cat.sireId, cat.generation)
  let sellBox = renderSellBox(id)
  $('#kittyForSale').empty()
  $('#kittyForSale').append(sellBox)
  $('#sellBox').empty()
  $('#sellBox').append(newCatDiv)
  $('#sellBox').append(newCattributes)
  if(forSale.active){
    $("#sellButton").prop('disabled', true)
    $("#removeButton").prop('disabled', false)
    $("#setPriceInput").attr('placeholder', 'Active Offer: ' + sellPrice + ' ETH')
    $("#setPriceInput").prop( "disabled", true )
    $("#setPriceInput").prop("type", "text")
    $('#removeButton').attr('onClick', 'removeSellOffer("'+ id +'");')
  } else {
    $("#sellButton").prop('disabled', false)
    $("#removeButton").prop('disabled', true)
    $("#setPriceInput").prop( "disabled", false)
    $("#setPriceInput").attr('placeholder', 'Enter Price (ETH)')
    $("#setPriceInput").prop("type", "number")
    $('#sellButton').attr('onClick', 'sellCat("'+ id +'");')
  }
  styleCat(cat.genes, id)
}

async function sellCat(id) {
  let salePrice = $("#setPriceInput").val()
  if(salePrice < 0.01) {
    alert("Minimum sale price is 0.01 ETH")
    return
  }
  let price = web3.utils.toWei(salePrice, "ether")

  contractInstance.methods.setOffer(price, id).send({from: ethereum.selectedAddress}, function(error, txHash){
    if(error) {
      console.log(error);
    }
    else {
    console.log(txHash);
    $('#newSellBanner'+id).css('display', 'block')
    }
  })

  contractInstance.events.MarketTransaction().on('data', function(event){
    console.log(event)
    let txType = event.returnValues.TxType
    let owner = event.returnValues.owner
    let tokenId = event.returnValues.tokenId
    alert("Market transaction complete\n" + "Transaction type: " + txType + "\nToken ID: "
    + tokenId + "\nOwner: " + owner)
  })

  $("#sellWindow .close").click()
}

async function removeSellOffer(id) {
  contractInstance.methods.removeOffer(id).send({from: ethereum.selectedAddress}, function(error, txHash){
    if(error) {
      console.log(error);
    }
    else {
    console.log(txHash);
    $('#newSellBanner'+id).css('display', 'none')
    }
  })

  contractInstance.events.MarketTransaction().on('data', function(event){
    console.log(event)
    let txType = event.returnValues.TxType
    let owner = event.returnValues.owner
    let tokenId = event.returnValues.tokenId
    alert("Market transaction complete\n" + "Transaction type: " + txType + "\nToken ID: "
    + tokenId + "\nOwner: " + owner)
  })

  $("#sellWindow .close").click()
}

// ***** breeding *****
let genderSelector;
let matronSelection = -1;
let sireSelection = -1;

function selectGender(gender) {
  genderSelector = gender;
}

function kittySelectedToBreed(id) {
  if(matronSelection == id || sireSelection == id) {
    $('#newFeatureBox'+id).prop('onclick', null)
    $('#newFeatureBox'+id).attr('data-dismiss', 'none')
    $('#newFeatureBox'+id).css({'opacity': '25%'})
  }
}

function unselectKitties() {
  for(i = 0; i < usersCats.length; i++) {
    if(matronSelection != i && sireSelection != i) {
      $('#newFeatureBox'+i).attr('onClick', 'assignBreeder("'+ i +'");')
      $('#newFeatureBox'+i).attr('data-dismiss', 'modal')
      $('#newFeatureBox'+i).css({'opacity': '100%'})
    }
  }
}

async function assignBreeder(id) {
  let cat = await contractInstance.methods.getKitty(id).call()
  let newCatDiv = renderCatDiv(genderSelector)
  $('#' + genderSelector + 'Div').empty()
  $('#' + genderSelector + 'Div').append(newCatDiv)
  styleCat(cat.genes, genderSelector)

  if(genderSelector == 'matron') {
    matronSelection = id
  } else if(genderSelector == 'sire') {
    sireSelection = id
  }

  kittySelectedToBreed(id)
  unselectKitties()

  if(matronSelection >= 0 && sireSelection >=0) {
    $("#privacyButton").show()
  }
}


async function breedKitties() {
  let matronId = matronSelection
  let sireId = sireSelection
  contractInstance.methods.breed(matronId, sireId).send({from: ethereum.selectedAddress}, function(error, txHash){
    if(error) {
      console.log(error);
    }
    else {
    console.log(txHash);
    }
  })

  contractInstance.events.Birth().on('data', function(event){
    console.log(event);
    let owner = event.returnValues.owner;
    let kittenId = event.returnValues.kittenId;
    let matronId = event.returnValues.matronId;
    let sireId = event.returnValues.sireId;
    let genes = event.returnValues.genes;
    alert("A new kitty is born!\n" + "owner: " + owner + "\nKitten ID: "
    + kittenId + "\nMatron ID: " + matronId + "\nSire ID: " + sireId + "\nGenes: " + genes);
    window.location.href = "mykitties.html"
  })
}

// gen0 message //
async function gen0features() {
  let gen0limit = await contractInstance.methods.CREATION_LIMIT_GEN0().call()
  let gen0counter = await contractInstance.methods.gen0Counter().call()
  let gen0remaining = gen0limit - gen0counter
  let gen0message
  if(gen0remaining > 0) {
    gen0message = `
      <p>There are only ` + gen0remaining + ` generation 0 cats remaining. Get yours now!</p>
      `
    $('#create_kitty').prop('disabled', false)
    $('#createGen0header').show()
    $('#gen0message').append(gen0message)
  }
  else if(gen0remaining < 1) {
    gen0message = `
      <p>Sorry, we've reached the limit of generation 0 cats<br>
      Check out the <a href="marketplace.html" style="color: inherit">Marketplace</a> to get your own kitty</p>
      `
    $('#create_kitty').prop('disabled', true)
    $('#createGen0header').hide()
    $('#gen0message').append(gen0message)
  }
}
