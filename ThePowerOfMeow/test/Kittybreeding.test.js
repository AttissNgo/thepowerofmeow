const Kittycontract = artifacts.require('./Kittycontract')

var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);

chai.should();

contract('Kittycontract', ([user1, user2]) => {

  beforeEach(async () => {
    instance = await Kittycontract.new()
  })

  describe('breeding', () => {

    let cat1Id = 1;
    let cat2Id = 2;
    let cat3Id = 3;


    beforeEach(async () => {
      await instance.createKittyGen0(113355771355771, { from: user1 })
      await instance.createKittyGen0(224466882466882, { from: user1 })
      await instance.createKittyGen0(101010101110104, { from: user2 })
    })

    it('rejects attempts to breed cats with themselves', async () => {
      await instance.breed(cat1Id, cat1Id).should.be.rejected
    })

    it('rejects attempts to breed unless both cats are owned by user', async () => {
      await instance.breed(cat1Id, cat3Id).should.be.rejected
    })

    it('breeds a new cat and transfers it to the user', async () => {
      const tokensBefore = await instance.ownershipTokenCount(user1)
      tokensBefore.toString().should.equal('3')
      await instance.breed(cat1Id, cat2Id, { from: user1 })
      const tokensAfter = await instance.ownershipTokenCount(user1)
      tokensAfter.toString().should.equal('4')
      const owner = await instance.ownedBy(4)
      owner.should.equal(user1)
    })

    it('rejects breeding when cats are in cooldown period', async () => {
      await instance.breed(cat1Id, cat2Id, { from: user1 })
      await instance.breed(cat1Id, 4, { from: user1 }).should.be.rejected

      function timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
      }

      await timeout(5000)
      await instance.breed(cat1Id, 4, { from: user1 })
    })

  })

})
