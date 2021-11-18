require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy prize flee venture stove deny rapid coach gown light army giant'; 
let testAccounts = [
"0xbbb76b059512bc50e1f442f09dc23f1c821693d3a61f734f52cb8cbdd22b4a07",
"0xf7efdae05d861fb6e45afa07f52d4981e6198f3d186c1654c25a4d2074707339",
"0x5506cff72370f5f632578931d9ff64b0e8039525d7bd9c78c45dd9c691d0475a",
"0xdfcd426f5661c9be73b5019bf633e068acbd54dbc1d3594c8f05b8271e0a8ead",
"0x13ca2c1f85897945c048a13d464c5333b77f8112b91ea7df39ada394f7a0e677",
"0x3832a4f922ee96f31861f770da4c51229765aad5ab99c4a2443568e28081c613",
"0x691ca29d1d9ec5a0f07f36d722332682707e8f35bb700a03696f97654d6bb513",
"0xac69b33eb10c8a408a5a005cd3204d15846e3fe7a671536539db784e0a6a27ae",
"0x947b35c16574f7030b4457f73fb90c50cf98165e455eff31cd4b4f714890fb39",
"0x988e34224278ed5257517af621a2fe9665cf804833f9d1932aa4ec506de3fc3a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


