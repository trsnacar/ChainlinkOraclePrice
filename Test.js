const { expect } = require('chai');
const ChainlinkPriceOracle = artifacts.require('ChainlinkPriceOracle');

contract('ChainlinkPriceOracle', () => {
  let oracle;

  beforeEach(async () => {
    // Deploy a new instance of the contract before each test.
    oracle = await ChainlinkPriceOracle.new();
  });

  it('should update the price of an asset', async () => {
    // Update the price of an asset.
    await oracle.updatePrice('ETH', 100);

    // Get the current price of the asset.
    const price = await oracle.getPrice('ETH');

    // Verify that the price was updated correctly.
    expect(price).to.equal(100);
  });

  it('should emit a PriceUpdated event when the price is updated', async () => {
    // Update the price of an asset.
    const tx = await oracle.updatePrice('ETH', 100);

    // Verify that the transaction emitted a PriceUpdated event.
    expect(tx.logs.length).to.equal(1);
    expect(tx.logs[0].event).to.equal('PriceUpdated');
    expect(tx.logs[0].args.asset).to.equal('ETH');
    expect(tx.logs[0].args.price).to.equal(100);
  });
});
