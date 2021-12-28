pragma solidity 0.8.0;

import "./KittyToken.sol";

contract KittyMarketplace is KittyToken {

  event MarketTransaction(string TxType, address owner, uint256 tokenId);

  struct Offer {
    address payable seller;
    uint256 price;
    uint256 tokenId;
    bool active;
  }

  Offer[] offers;

  mapping(uint256 => Offer) public tokenIdToOffer;

  function getOffer(uint256 _tokenId) public view returns (
    address seller,
    uint256 price,
    uint256 tokenId,
    bool active) {
      require(tokenIdToOffer[_tokenId].active, "There is no active offer for this kitty");
      Offer memory offer = tokenIdToOffer[_tokenId];
      return (offer.seller, offer.price, offer.tokenId, offer.active);
  }

  function getAllTokenOnSale() public view returns(uint256[] memory) {
    uint256 totalOffers = offers.length;
    if(totalOffers == 0) {
      return new uint256[](0);
    }
    uint256[] memory result = new uint256[](totalOffers);

    for(uint256 i = 0; i < offers.length; i++) {
      if(offers[i].active) {
        result[i] = offers[i].tokenId;
      }
    }
    return result;
  }

  function setOffer(uint256 _price, uint256 _tokenId) public {
    require(_owns(msg.sender, _tokenId), "You must be the owner to create an offer");
    require(tokenIdToOffer[_tokenId].active == false, "There is already an active offer for this kitty");
    approve(address(this), _tokenId);

    Offer memory _offer = Offer({
      seller: payable(msg.sender),
      price: _price,
      tokenId: _tokenId,
      active: true
    });
    offers.push(_offer);
    tokenIdToOffer[_tokenId] = _offer;

    emit MarketTransaction("Create offer", msg.sender, _tokenId);
  }

  function removeOffer(uint256 _tokenId) public {
    require(_owns(msg.sender, _tokenId), "You must be the owner to remove an offer");

    Offer memory offerToRemove = tokenIdToOffer[_tokenId];
    offerToRemove.active = false;
    delete tokenIdToOffer[_tokenId];
    delete kittyIndexToApproved[_tokenId];

    emit MarketTransaction("Remove offer", msg.sender, _tokenId);
  }

  function buyKitty(uint256 _tokenId) public payable {
    Offer memory kittyForSale = tokenIdToOffer[_tokenId];
    require(kittyForSale.active, "This kitty is not for sale");
    require(msg.value == kittyForSale.price, "Transfer amount is incorrect");

    kittyForSale.active = false;
    delete tokenIdToOffer[_tokenId];

    _approve(msg.sender, _tokenId);
    kittyForSale.seller.transfer(msg.value);
    transferFrom(kittyForSale.seller, msg.sender, _tokenId);


    emit MarketTransaction("Buy", msg.sender, _tokenId);
  }

}
