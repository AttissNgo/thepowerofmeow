pragma solidity 0.8.0;

// the abstraction of the token - the soul of catboi
contract KittyStruct {

  //birth event
  event Birth(
    address owner,
    uint256 kittenId,
    uint256 matronId,
    uint256 sireId,
    uint256 genes
  );
  event Transfer(address indexed _from,
    address indexed _to,
    uint256 indexed _tokenId);
  event Approval(address indexed _owner,
    address indexed _approved,
    uint256 indexed _tokenId);

  //the cat struct and storage
  struct Kitty {
    uint256 genes;
    uint64 birthTime;
    uint32 matronId;
    uint32 sireId;
    uint16 generation;
  }

  Kitty[] kitties;

  mapping (address => uint256) public ownershipTokenCount;
  mapping (uint256 => address) public ownedBy;
  mapping (uint256 => address) public kittyIndexToApproved;
  mapping (address => mapping (address => bool)) public approvedOperator;

  //creating cats
  function _createKitty(
      uint256 _matronId,
      uint256 _sireId,
      uint256 _generation,
      uint256 _genes,
      address _owner
    ) internal returns(uint256) {
    Kitty memory _kitty = Kitty({
      genes: _genes,
      birthTime: uint64(block.timestamp),
      matronId: uint32(_matronId),
      sireId: uint32(_sireId),
      generation: uint16(_generation)
    });
    kitties.push(_kitty);
    uint256 newKittenId = kitties.length - 1;
    require(newKittenId == uint256(uint32(newKittenId)));
    emit Birth(_owner, newKittenId, _matronId, _sireId, _genes);
    _transfer(address(0), _owner, newKittenId);
    return newKittenId;
  }

  //fetching tokens
  function totalSupply() public view returns (uint256) {
    return kitties.length;
  }

  function getOwnerTokens(address _owner) public view returns (uint256[] memory ownerTokens) {
    uint256 tokenCount = balanceOf(_owner);
    if(tokenCount == 0) {
      return new uint256[](0);
    } else {
      uint256[] memory ownersCats = new uint256[](tokenCount);
      uint256 ownedIndex = 0;
      uint256 allTokens = totalSupply();
      uint256 kittyId = 0;

      for(kittyId ; kittyId <= allTokens; kittyId++) {
        if(ownedBy[kittyId] == _owner) {
          ownersCats[ownedIndex] = kittyId;
          ownedIndex++;
        }
      }
      return ownersCats;
    }
  }

  function getKitty(uint256 _id) public view returns (
    uint256 genes,
    uint256 birthTime,
    uint256 matronId,
    uint256 sireId,
    uint256 generation
    ) {
    Kitty storage kitty = kitties[_id];
    require(kitty.birthTime > 0, "Token does not exist");
    genes = kitty.genes;
    birthTime = uint256(kitty.birthTime);
    matronId = uint256(kitty.matronId);
    sireId = uint256(kitty.sireId);
    generation = uint256(kitty.generation);
    return (genes, birthTime, matronId, sireId, generation);
  }

  function _transfer(address _from, address _to, uint256 _tokenId) internal {
    require(_to != address(0) && _to != address(this), "Invalid recipient address");
    require(_tokenId < kitties.length, "Invalid Token ID");
    ownershipTokenCount[_to]++;
    if(_from != address(0)){
      ownershipTokenCount[_from]--;
      delete kittyIndexToApproved[_tokenId];
    }
    ownedBy[_tokenId] = _to;
    emit Transfer(_from, _to, _tokenId);
    emit Approval(ownedBy[_tokenId], address(0), _tokenId);
  }

  function balanceOf(address _owner) public view returns (uint256) {
    require(_owner != address(0), "Zero address is not valid owner");
    return ownershipTokenCount[_owner];
  }

  function _owns(address _claimant, uint256 _tokenId) internal view returns (bool) {
    return ownedBy[_tokenId] == _claimant;
  }

  function _approvedAddress(address _claimant, uint256 _tokenId) internal view returns (bool) {
    return kittyIndexToApproved[_tokenId] == _claimant;
  }

  function _validOperator(address _claimant, uint256 _tokenId) internal view returns (bool) {
    return approvedOperator[(ownedBy[_tokenId])][_claimant] == true;
  }

}
