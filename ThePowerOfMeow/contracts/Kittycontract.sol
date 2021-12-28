pragma solidity 0.8.0;

import "./Ownable.sol";
import "./KittyMarketplace.sol";

contract Kittycontract is Ownable, KittyMarketplace {

  mapping(uint256 => uint256) public lastBreedTime;

  uint256 public constant CREATION_LIMIT_GEN0 = 30;
  uint256 public gen0Counter = 0;

  //constructor - create a cat and give it to deployer
  constructor() {
    createKittyGen0(101010101110101);
  }

  function createKittyGen0(uint256 _genes) public returns (uint256 id){
    require(gen0Counter < CREATION_LIMIT_GEN0, "Maximum Gen0 limit reached");
    gen0Counter++;
    return _createKitty(0, 0, 0, _genes, msg.sender);
  }

  function breed(uint256 matronId, uint256 sireId) public {
    require(matronId != sireId, "Cats cannot breed with themselves");
    require(_owns(msg.sender, matronId) && _owns(msg.sender, sireId),
      "You need permission to breed your cat with another users cat");
    require(checkFertility(kitties[matronId].generation, matronId), "The matron must be ready to breed");

    uint256 newGeneration;
    if(kitties[matronId].generation > kitties[sireId].generation) {
        newGeneration = kitties[matronId].generation + 1;
    } else {
        newGeneration = kitties[sireId].generation + 1;
    }
    uint256 newGenes = mixDna(kitties[matronId].genes, kitties[sireId].genes);
    _createKitty(matronId, sireId, newGeneration, newGenes, msg.sender);
    lastBreedTime[matronId] = block.timestamp;
    lastBreedTime[sireId] = block.timestamp;
  }

  function checkFertility(uint256 generation, uint256 kittyId) public view returns(bool) {
    bool readyToBreed = false;
    uint256 cooldownTime = (generation * generation * 10);
    if(block.timestamp > cooldownTime + lastBreedTime[kittyId]) {
      readyToBreed = true;
    }
    return readyToBreed;
  }

  function mixDna(uint256 matronDna, uint256 sireDna) internal view returns(uint256){
    uint256 newGenes;
    uint256 placeMaker = 1;
    uint256 rando1 = uint256(keccak256(abi.encodePacked(matronDna, block.timestamp)));
    uint256 rando2 = uint256(keccak256(abi.encodePacked(sireDna, block.timestamp)));
    uint256 rando3 = uint256(keccak256(abi.encodePacked(matronDna, sireDna, block.timestamp)));
    for(uint256 i = 0; i < 10; i++){
      if(i == 0 || i == 1 || i == 4 || i == 5){
        if(rando1 % 2 == 0){
          newGenes = newGenes + ((matronDna % 10) * placeMaker);
        }
        else if(rando1 % 2 != 0){
          newGenes = newGenes + ((sireDna % 10) * placeMaker);
        }
        else if(rando3 % 10 == 7) {
          newGenes = newGenes + ((matronDna + sireDna % 10) * placeMaker);
        }
        matronDna /= 10;
        sireDna /= 10;
        placeMaker *= 10;
      }
      else {
        if(rando2 % 2 == 0){
          newGenes = newGenes + ((sireDna % 100) * placeMaker);
        }
        else if(rando2 % 2 != 0){
          newGenes = newGenes + ((matronDna % 100) * placeMaker);
        }
        else if(rando3 % 10 == 9) {
          newGenes = newGenes + ((matronDna + sireDna % 100) * placeMaker);
        }
        matronDna /= 100;
        sireDna /= 100;
      placeMaker *= 100;
      }
      rando1 /= 10;
      rando2 /= 10;
      rando3 /= 10;
    }
    return newGenes;
  }

}
