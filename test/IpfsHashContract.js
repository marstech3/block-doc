const IpfsHashContract = artifacts.require("./IpfsHashContract.sol");

contract("IpfsHashContract", accounts => {
  it("should store the string 'Hey there!'", async () => {
    const ipfsHashContract = await IpfsHashContract.deployed();

    // Set myString to "Hey there!"
    await ipfsHashContract.setHash("45454545", { from: accounts[0] });

    // Get myString from public variable getter
    const storedString = await ipfsHashContract.ipfsHash.call();

    assert.equal(storedString, "45454545", "The string was not stored");
  });
});