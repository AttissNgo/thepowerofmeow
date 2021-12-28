pragma solidity 0.8.0;

import "./KittyStruct.sol";
import "./IERC721Receiver.sol";

// the mechanics of the token
contract KittyToken is KittyStruct {

  event ApprovalForAll(address indexed _owner, address indexed _operator, bool _approved);

  string public constant name = "ThePowerOfMeow";
  string public constant symbol = "MEOW";
  bytes4 private constant _INTERFACE_ID_ERC721 = 0x80ac58cd;
  bytes4 private constant _INTERFACE_ID_ERC165 = 0x01ffc9a7;
  bytes4 internal constant MAGIC_ERC721_RECEIVED = bytes4(keccak256("onERC721Received(address,address,uint256,bytes)"));

  //compatibility ------------------------------
  function supportsInterface(bytes4 _interfaceId) external pure returns(bool){
    return(_interfaceId == _INTERFACE_ID_ERC721 || _interfaceId == _INTERFACE_ID_ERC165);
    }

  function _checkIERC721Support(address _from, address _to, uint256 _tokenId, bytes memory _data) internal returns(bool) {
    if(!_isContract(_to)){
      return true;
    }
    bytes4 returnData = IERC721Receiver(_to).onERC721Received(msg.sender, _from, _tokenId, _data);
    return returnData == MAGIC_ERC721_RECEIVED;
  }

  function _isContract(address _to) internal view returns(bool) {
    uint32 size;
    assembly{
      size := extcodesize(_to)
    }
    return size > 0;
  }

  //need this for tests. Simple function to transfer only from token owner
  function transfer(address _to, uint256 _tokenId) public {
    require(_owns(msg.sender, _tokenId));
    _transfer(msg.sender, _to, _tokenId);
  }

  //SafeTransfer -- where is this used?
  function _safeTransfer(address _from, address _to, uint256 _tokenId, bytes memory _data) internal {
    require(_owns(_from, _tokenId));
    _transfer(_from, _to, _tokenId);
    require(_checkIERC721Support(_from, _to, _tokenId, _data));
  }

  //IERC721 required functions

  function ownerOf(uint256 _tokenId) public view returns (address) {
    require(ownedBy[_tokenId] != address(0), "Zero address cannot own tokens");
    return ownedBy[_tokenId];
  }

  function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes calldata data) public {
    require(_owns(msg.sender, _tokenId) ||
      _approvedAddress(msg.sender, _tokenId) ||
      _validOperator(msg.sender, _tokenId), "Invalid operator");
    _safeTransfer(_from, _to, _tokenId, data);
  }

  function safeTransferFrom(address _from, address _to, uint256 _tokenId) internal {
    require(_owns(msg.sender, _tokenId) ||
      _approvedAddress(msg.sender, _tokenId) ||
      _validOperator(msg.sender, _tokenId), "Invalid operator");
    _safeTransfer(_from, _to, _tokenId, "");
  }

  function transferFrom(address _from, address _to, uint256 _tokenId) public {
    require(_owns(msg.sender, _tokenId) ||
      _approvedAddress(msg.sender, _tokenId) ||
      _validOperator(msg.sender, _tokenId), "Invalid operator");
    _transfer(_from, _to, _tokenId);
  }

  function approve(address _approved, uint256 _tokenId) public {
    require(_owns(msg.sender, _tokenId) || _validOperator(msg.sender, _tokenId), "Invalid operator");
    kittyIndexToApproved[_tokenId] = _approved;
    emit Approval(ownedBy[_tokenId], _approved, _tokenId);
  }

  function _approve(address _approved, uint256 _tokenId) internal {
    kittyIndexToApproved[_tokenId] = _approved;
    emit Approval(ownedBy[_tokenId], _approved, _tokenId);
  }

  function setApprovalForAll(address _operator, bool _approved) public {
    approvedOperator[msg.sender][_operator] = _approved;
    emit ApprovalForAll(msg.sender, _operator, _approved);
  }

  function getApproved(uint256 _tokenId) public view returns (address) {
    require(_tokenId < kitties.length, "Invalid Token ID");
    return kittyIndexToApproved[_tokenId];
  }

  function isApprovedForAll(address _owner, address _operator) public view returns (bool) {
    require(_operator != address(0), "Zero address cannot be an authorized operator");
    require(_owner != address(0), "Zero address cannot own tokens");
    return approvedOperator[_owner][_operator];
  }

}
