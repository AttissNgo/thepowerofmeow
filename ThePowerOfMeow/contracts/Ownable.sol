pragma solidity ^0.8.0;


contract Ownable {

  address private owner;

  constructor() {
    owner = msg.sender;
  }

  modifier onlyOwner() {
    require(owner == msg.sender, "Ownable: caller is not the owner");
    _;
  }

}
