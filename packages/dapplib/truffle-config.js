require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose swift top edge rare remember coast gesture seek foster gas'; 
let testAccounts = [
"0x17deef0e31bd037253a10a66f3153fbf21c10b709bdb2dc6af0b175562cabf8f",
"0x792d069dd98fdcb926ce2e2ad111d9ba49f56ef39922af350ca61d3ddc30312b",
"0x8b13e38ca72f84bca88dc834a22bd87c9be996bbf61d9ff521bc3a9d0b8bb42c",
"0x7a4a7f9d548c93565e41425ceca87b97f4df77d90f2c1d58a0be4929dbb20cce",
"0xeaa2e24cdcb74ff6fc8725615fa0caf0dc00262f881ca4ec450535cfd372c76c",
"0x91f00f19f3af50d8f9d5b803225598e7119d7aa1dcbf0bcac5d77e7052b02f46",
"0x4be5b380a060a2b1437c77902a6aedd181cac26cc0aa45db754be7a4c2a57f47",
"0x8974bec0442a16693bf7746758d99ab0e419466972cf4d47206f6f9f96f3389d",
"0x850e30f8c60f3334a474671d0a9e637ac522bb29c7823f63d6a281116c44c95a",
"0x204cc20f743dad8cce67c5e195123d2b0c6d2ec8eaf9b2edd722d17e48428bba"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
