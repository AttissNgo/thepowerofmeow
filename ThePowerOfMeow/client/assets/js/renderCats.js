
function renderFeatureBox(id) {
  let featureBox = `
    <div class="featureBox m-2" id="newFeatureBox`+ id +`" data-dismiss="modal">

    <div id="newSellBanner`+ id +`" style="display:none" class="sellBanner-container">
      <div class="sellBanner">For Sale</div>
    </div>

    </div>
  `
  return featureBox
}

function renderSellBox(id) {
  let featureBox = `
    <div class="col-lg-4 catBox m-2 light-b-shadow" id="sellBox" data-dismiss="modal">
    </div>
  `
  return featureBox
}

function renderMarketBox(id) {
  let marketBox = `
    <div class="marketBox m-2" id="newMarketBox`+ id +`" data-toggle="modal" data-dismiss="modal" data-target="#marketWindow">
    </div>
  `
  return marketBox
}

function renderCatDiv(id) {
  let catDiv = `


      <div class="cat" id="newCat`+ id +`">

        <div class="headContainer">

          <div class="cat__ear">
            <div id="leftear`+ id +`" class="cat__ear_left">
              <div class="cat__inner_ear_left"></div>
            </div>
            <div id="rightear`+ id +`" class="cat__ear_right">
              <div class="cat__inner_ear_right"></div>
            </div>
          </div>

          <div id="head`+ id +`" class="cat__head">

          <div id="headstripes`+ id +`" class="cat__head_stripes"></div>
          <div id="headstripe1`+ id +`" class="cat__head_stripes cat__head_stripe1"></div>
          <div id="headstripe2`+ id +`"class="cat__head_stripes cat__head_stripe2"></div>
          <div id="headstripe3`+ id +`"class="cat__head_stripes cat__head_stripe3"></div>

          <div class="cat__eye">
            <div id="eyeLeft`+ id +`" class="cat__eye_left">
              <div id="pupilL`+ id +`" class="cat__pupil_left">
                <div id="glintL`+ id +`" class="cat__glint_left"></div>
                <div id="glint2L`+ id +`" class="cat__glint2_left"></div>
                <div id="glint3L`+ id +`" class="cat__glint3_left"></div>
              </div>
              <div id="glintxL`+ id +`" class="cat__glintExtra_left"></div>
              <div id="eyelidL`+ id +`" class="cat__eyelid_left"></div>
            </div>

            <div id="eyeRight`+ id +`" class="cat__eye_right">
              <div id="pupilR`+ id +`" class="cat__pupil_right">
                <div id="glintR`+ id +`" class="cat__glint_right"></div>
                <div id="glint2R`+ id +`" class="cat__glint2_right"></div>
                <div id="glint3R`+ id +`" class="cat__glint3_right"></div>
              </div>
              <div id="glintxR`+ id +`" class="cat__glintExtra_right"></div>
              <div id="eyelidR`+ id +`" class="cat__eyelid_right"></div>
            </div>
          </div>

          <div id="nose`+ id +`" class="cat__nose">
            <div class="cat__nostril_left"></div>
            <div class="cat__nostril_right"></div>
          </div>

          <div id="jowls`+ id +`" class="cat__jowls">
            <div id="jowlL`+ id +`" class="cat__jowls_left"></div>
            <div id="jowlR`+ id +`" class="cat__jowls_right"></div>
          </div>

          <div class="cat__whiskers">
            <div id="whiskL`+ id +`" class="cat__whiskers_left"></div>
            <div id="whiskR`+ id +`" class="cat__whiskers_right"></div>
          </div>

        </div>
    </div>

    <div class="bodyContainer">


      <div class="cat__body">
        <div id="tail`+ id +`" class="cat__tail"></div>

        <div id="leftBackpaw`+ id +`" class="cat__backpaw cat__right_back_paw">
          <div class="cat__fingers"></div>
        </div>
        <div id="rightBackpaw`+ id +`" class="cat__backpaw cat__left_back_paw">
          <div class="cat__fingers"></div>
        </div>

        <div id="chest`+ id +`" class="cat__chest"></div>

        <div id="bodystripes`+ id +`" class="cat__body_stripes"></div>
        <div id="leftstripe1`+ id +`" class="cat__body_stripes cat__left_stripe1"></div>
        <div id="leftstripe2`+ id +`" class="cat__body_stripes cat__left_stripe2"></div>
        <div id="leftstripe3`+ id +`" class="cat__body_stripes cat__left_stripe3"></div>
        <div id="rightstripe1`+ id +`" class="cat__body_stripes cat__right_stripe1"></div>
        <div id="rightstripe2`+ id +`" class="cat__body_stripes cat__right_stripe2"></div>
        <div id="rightstripe3`+ id +`" class="cat__body_stripes cat__right_stripe3"></div>


        <div id="belly`+ id +`" class="cat__belly"></div>

        <div id="rightPaw`+ id +`" class="cat__frontpaw cat__right_front_paw">
          <div class="cat__fingers"></div>
        </div>
        <div id="leftPaw`+ id +`" class="cat__frontpaw cat__left_front_paw">
          <div class="cat__fingers"></div>
        </div>
      </div>
    </div>

    </div>
      `;
  return catDiv
}

function renderCattributes(id, dna, matronId, sireId, generation) {
  let cattributes = `
  <div id="newCattributesBox`+ id +`">
    Kitty ID: ` + id + ` <br>
    DNA: ` + dna + `<br>
    Matron ID: ` + matronId + ` <br>
    Sire ID: ` + sireId + `<br>
    Generation: ` + generation + `<br>
  </div>
  `;
  return cattributes
}

function renderSaleDetails(id, generation, price) {
  let saleDetails = `
  <div class="mt-2" id="newSaleDetails`+ id +`">
    Generation: ` + generation + `<br>
    `+ price + ` ETH<br>
  </div>
  `
  return saleDetails
}

function renderIdGen(id, generation) {
  let idGen  = `
  <div id="newIdBox`+ id +`" class="pointer mb-4">
    Kitty ID: ` + id + ` <br>
    Generation: ` + generation + `<br>
  </div>
  `;

  return idGen
}

function styleCat(dna, id) {
  var headColor = colors[Math.trunc(dna/10000000000000)];
  var eyeColor = colors[Math.trunc(dna/100000000000%100)];
  var pawsColor = colors[Math.trunc(dna/1000000000%100)];
  var stripesColor = colors[Math.trunc(dna/10000000%100)];
  var eyeStyle = Math.trunc(dna/1000000%10);
  var stripeStyle = Math.trunc(dna/100000%10);
  var bellyColor = colors[Math.trunc(dna/1000%100)];
  var jowlsColor = colors[Math.trunc(dna/10%100)];
  var animationStyle = dna%10;
  singleHeadColor(headColor, id);
  singleEyeColor(eyeColor, id);
  singlePawsColor(pawsColor, id);
  singleStripesColor(stripesColor, id);
  singleEyeVariation(eyeStyle, id);
  singleDecorationVariation(stripeStyle, id);
  singleBellyColor(bellyColor, id);
  singleJowlsColor(jowlsColor, id);
  singleAnimationVariation(animationStyle, id);
}

function greyCat() {
  $('.cat__head, .cat__chest, .cat__backpaw, .cat__frontpaw, .cat__tail, .cat__ear_left, .cat__ear_right').css('background', '#323a40')
  $('.cat').css({"opacity": "20%"})
}


//moving eyes
const closer = 5;
const further = -5;

document.addEventListener('mousemove', (e) => {
    let positionX = e.pageX;
    let positionY = e.pageY;

    let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    let moveX = (positionX - width / 2) / (width / 2) * closer;
    let moveY = (positionY - height / 2) / (height / 2) * closer;

    $('.cat__eye_left').css('transform', 'translate(' + moveX + 'px,' + moveY + 'px)')
    $('.cat__eye_right').css('transform', 'translate(' + moveX + 'px,' + moveY + 'px)')
}, false);
