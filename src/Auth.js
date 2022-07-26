import * as nearAPI from "near-api-js";

const { connect, keyStores, WalletConnection } = nearAPI;

const config = {
  networkId: "testnet",
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: "https://rpc.testnet.near.org",
  walletUrl: "https://wallet.testnet.near.org",
  helperUrl: "https://helper.testnet.near.org",
  explorerUrl: "https://explorer.testnet.near.org",
};

export async function initConn() {
  console.log("Creating Connection");
  // connect to NEAR
  const nearConn = await connect(config);

  nearConn
    ? console.log("Connection established")
    : console.log("Connection failed!");

  // create wallet connection
  const walletConnection = new WalletConnection(nearConn);

  walletConnection.requestSignIn(
    "example-contract.testnet", // contract requesting access
    "Zimor-Near_Auth" // optional title
    // "http://YOUR-URL.com/success", // optional redirect URL on success
    // "http://YOUR-URL.com/failure" // optional redirect URL on failure
  );
}
