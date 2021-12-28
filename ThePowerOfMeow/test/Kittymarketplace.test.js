const Kittycontract = artifacts.require('./Kittycontract')

var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);

chai.should();

contract('Kittycontract', ([deployer, receiver]) => {

  beforeEach(async () => {
    instance = await Kittycontract.new()
  })

  describe('offers', () => {

    beforeEach(async () => {
      await instance.createKittyGen0(101010101110102, { from: deployer })
      const newKitty = await instance.getKitty(1)
    })

    it('creates offers for valid owners', async () => {
      await instance.setOffer(2, 1, { from: deployer })
      const newOffer = await instance.getOffer(1)
      newOffer.seller.should.equal(deployer)
      newOffer.price.toString().should.equal('2')
      newOffer.tokenId.toString().should.equal('1')
      newOffer.active.should.equal(true)
    })

    it('rejects offers for invalid owners', async () => {
      await instance.setOffer(2, 1, { from: receiver }).should.be.rejected
    })

    it('rejects offers when there is already an active offer on the token', async () => {
      await instance.setOffer(2, 1, { from: deployer })
      await instance.setOffer(2, 1, { from: deployer }).should.be.rejected
    })

    it('allows token owner to remove offers', async () => {
      await instance.setOffer(2, 1, { from: deployer })
      let newOffer = await instance.getOffer(1)
      newOffer.active.should.equal(true)
      await instance.removeOffer(1, { from: deployer })
      await instance.getOffer(1).should.be.rejected
      newOffer = await instance.tokenIdToOffer(1)
      newOffer.active.should.equal(false)
    })

    it('prohibits non-owners from removing offers', async () => {
      await instance.setOffer(2, 1, { from: deployer })
      let newOffer = await instance.getOffer(1)
      newOffer.active.should.equal(true)
      await instance.removeOffer(1, { from: receiver }).should.be.rejected
    })

    it('fetches all tokens with active sell offers', async () => {
      await instance.setOffer(2, 0, { from: deployer })
      await instance.setOffer(2, 1, { from: deployer })
      const result = await instance.getAllTokenOnSale()
      result[0].toString().should.equal('0')
      result[1].toString().should.equal('1')
    })
  })

  describe('offer fulfillment', () => {

    beforeEach(async () => {
      await instance.createKittyGen0(101010101110102, { from: deployer })
      const newKitty = await instance.getKitty(1)
    })

    it('transfers token when an offer is filled', async () => {
      await instance.setOffer(2, 1, { from: deployer })
      await instance.buyKitty(1, { from: receiver, value: 2})
      const newOwner = await instance.ownedBy(1)
      newOwner.should.equal(receiver)
    })

    it('rejects buy orders when value is insufficient', async () => {
      await instance.setOffer(2, 1, { from: deployer })
      await instance.buyKitty(1, { from: receiver, value: 1}).should.be.rejected
    })

    it('rejects buy orders on cancelled offers', async () => {
      await instance.setOffer(2, 1, { from: deployer })
      let newOffer = await instance.getOffer(1)
      newOffer.active.should.equal(true)
      await instance.removeOffer(1, { from: deployer })
      await instance.buyKitty(1, { from: receiver, value: 2}).should.be.rejected
    })

  })


})
