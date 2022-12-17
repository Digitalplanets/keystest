
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider"
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import { Web3Auth } from "@web3auth/web3auth";

const infuraId = "c7f0ce0d797648b5bef4c4c2e5fbc70a"
const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId
    }
  },
  coinbasewallet: {
    package: CoinbaseWalletSDK,
    options: {
      appName: "App",
      infuraId
    }
  },
  web3auth: {
    package: Web3Auth,
    options: {
      infuraId
    }
  }
};
var web3Modal;

export function getAddress() {
  return "0xc4Caab50F164e8239351319d6DFF5E225e0bBa0d"

  if (typeof window === "undefined")
    return 0

  const savedAddy = window.sessionStorage.getItem('address')

  if (savedAddy != undefined) {
    return savedAddy
  }
  else {
    return 0
  }

}

export async function getVerification() {
  if (typeof window === "undefined")
    return undefined

  const crowns = await getCrowns(getAddress())

  return crowns > 0
}

export async function getNumCwz() {

  if (typeof window === "undefined")
    return 0

  if (getAddress() == 0) {
    return -1
  }

  const saved = window.sessionStorage.getItem('cwz')


  if (saved != undefined && saved != -1) {
    return saved
  }
  else {

    const crowns = await getCrowns(getAddress())
    return crowns

  }

}

export async function connectAddress() {

  var ret = getAddress()

  if (ret != 0)
    return ret
  else {
    return requestAccount()
  }
}

export function clearAddress() {
  sessionStorage.clear()
  try{

  
  web3Modal.clearCachedProvider();
  }catch(e){
    console.log(e)
  }
  /*
  if(provider.close) {
    await provider.close();

    // If the cached provider is not cleared,
    // WalletConnect will default to the existing session
    // and does not allow to re-scan the QR code with a new wallet.
    // Depending on your use case you may want or want not his behavior.
    web3Modal.clearCachedProvider();
    provider = null;
  }
  */
  //window.location.reload();
}

export function generateCrownOrder(variant, quantity, first, last, email, phone, address, city, province, country, zipcode) {

  const addy = getAddress()
 

  const ret = JSON.stringify({
    "line_items": [
      {
        "variant_id": variant,
        "quantity": quantity,
      }
    ],
    "note_attributes": [
      {
        "name": "wallet address",
        "value": addy
      },
    ],
    "customer": {
      "first_name": first,
      "last_name": last,
      "email": email,
      "note": "latest wallet address: " + addy
    },
    "shipping_address": {
      "first_name": first,
      "last_name": last,
      "address1": address,
      "phone": phone,
      "city": city,
      "province": province,
      "country": country,
      "zip": zipcode
    },
  })

  return ret
}

export async function getCrowns(addy) {
  // Default options are marked with *
  if (addy === 0 || addy === undefined)
    return -1

  const url = "https://deep-index.moralis.io/api/v2/" + addy + "/nft/0xd119bDAcC346Bf958a13017a4ea197939908f28A?chain=eth&format=decimal"
  const response = await fetch(url, {
    method: 'GET',
    headers: {

      "Content-Type": "application/json",
      "X-API-Key": "QCLGhur1umwV5F7GhM5ptyO1NR5NLeQk0Y2D2EykrpBJC3BH1d6pCIPbJG85MWfR"
    },
  });
  const data = await response.json(); // parses JSON response into native JavaScript objects


  window.sessionStorage.setItem('cwz', parseInt(data['total']))

  return parseInt(data['total'])
}


export async function requestAccount() {
  var account = 0

try{

  web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: false, // optional
    providerOptions // required
  });


  const instance = await web3Modal.connect();

  const provider = new ethers.providers.Web3Provider(instance);

  const accounts = await provider.listAccounts();

  account = accounts[0];

  window.sessionStorage.setItem('address', accounts[0])

  // Subscribe to accounts change
  provider.on("accountsChanged", (accounts) => {
    console.log(accounts);
  });

  // Subscribe to chainId change
  provider.on("chainChanged", (chainId) => {
    console.log(chainId);
  });

  // Subscribe to provider connection
  provider.on("connect", (info) => {
    console.log(info);
  });

  // Subscribe to provider disconnection
  provider.on("disconnect", (error) => {
    console.log(error);
  });
}catch(e){
  console.log(e)
}
  //const signer = provider.getSigner();
  //console.log(signer)

  /*

  // ❌ Check if Meta Mask Extension exists 
  if (typeof window !== "undefined" && window.ethereum) {
    try {

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      account = accounts[0];

      window.sessionStorage.setItem('address', accounts[0])

    } catch (error) {
      alert('Error connecting... Please try again');

      window.location.reload();
    }

  } else {
    alert('Web3 provider not detected');
  }
  */


  return account
}
