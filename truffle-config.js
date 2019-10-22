module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8543,
      network_id: "*", // Match any network id
      from: "0x9eb4abb7b2a96a93ca54dcb12cf66f9a051fa65a", // use the account-id generated during the setup process
gas: 20000000
    }
  }
};
