const Kittycontract = artifacts.require('./Kittycontract')

var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);

chai.should();

contract('Kittycontract', ([deployer, receiver, accounts]) => {

  const name = 'ThePowerOfMeow'
  const symbol = 'MEOW'

  beforeEach(async () => {
    instance = await Kittycontract.new()
  })

  describe('deployment', () => {
    it('tracks the name', async () => {
      const result = await instance.name()
      result.should.equal(name)
    })

    it('tracks the symbol', async () => {
      const result = await instance.symbol()
      result.should.equal(symbol)
    })

    it('tracks the total supply', async () => {
      const result = await instance.totalSupply()
      result.toString().should.equal('1')
    })

    it('creates the NullKitty and transfers to deployer', async () => {
      const result = await instance.ownedBy(0)
      result.should.equal(deployer)
    })
  })

  describe('transferring NFT tokens', () => {
    let result

    describe('success', async () => {
      it('transfers token balances', async () => {
        result = receiver
        await instance.transfer(receiver, 0)
        result.should.equal(await instance.ownedBy(0))
      })

      it('allows approved address to transfer tokens for owner', async () => {
        // console.log(await instance.ownedBy(0))
        // console.log(accounts)
        result = receiver
        await instance.approve(accounts, 0)
        // console.log(await instance.getApproved(0))
        await instance.transferFrom(deployer, receiver, 0)
        // console.log(await instance.ownedBy(0))
        result.should.equal(await instance.ownedBy(0))
      })

      it('resets approved address to zero address following a transfer', async () => {
        const zeroAddress = '0x0000000000000000000000000000000000000000'
        await instance.approve(accounts, 0)
        await instance.transferFrom(deployer, receiver, 0)
        result = await instance.getApproved(0)
        result.toString().should.equal(zeroAddress)

      })

      it('allows approved operator to transfer tokens for owner', async () => {
        result = receiver
        await instance.setApprovalForAll(accounts, true)
        // console.log(await instance.isApprovedForAll(deployer, accounts))
        await instance.transferFrom(deployer, receiver, 0)
        result.should.equal(await instance.ownedBy(0))
      })

    })

    describe('failure', async () => {
      it('rejects transfers from invalid owner', async () => {
        await instance.transfer(receiver, 1).should.be.rejected
      })
      it('rejects transfers to zero address', async () => {
        await instance.transfer(0x0, 0).should.be.rejected
      })

    })

  })

  describe('fetching and describing tokens', () => {
    it('can fetch tokens from owner', async () => {
      let testGenes = '101010101110102'
      await instance.createKittyGen0(101010101110102)
      await instance.createKittyGen0(101010101110103)
      result = (await instance.getOwnerTokens(deployer))
      // console.log(result)
      // console.log(result.toString())
      // console.log(await instance.getKitty(1))
      let testKitty = await instance.getKitty(1)
      // console.log(testKitty.genes.toString())
      testKitty.genes.toString().should.equal(testGenes)
    })
  })

})
