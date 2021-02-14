# Decentralized Token Exchange

### About
This is a simple Ethereum based decentralized exchange with its own token DAPP that allows for trustless exchange of assets and tokens on Ethereum without giving away control of your assets.

### Usage
You need to have [Metamask Wallet](https://metamask.io/). Connect to the app using your wallet. When connected, your address will show on the top navigation bar. You can deposit your tokens or ether, create orders by choosing the amount of token you want to get in exchange for amount of ether or vice versa, or fill open orders to make a trade.

# Development Project

### Deployment

Smart Contracts deployed to Ethereum [Kovan Testnest](https://kovan-testnet.github.io/website/). The smart contracts are not upgradeable. App deployed on [Heroku](https://www.heroku.com/) and is available on site [https://diyi-token-exchange.herokuapp.com/](https://diyi-token-exchange.herokuapp.com/) but must have Metamask installed on your computer.

### Technology Stack and Tools

* [Metamask Wallet](https://metamask.io/)
* [Truffle](https://www.trufflesuite.com/) - development framework
* [React](https://reactjs.org/) - front end framework
* [Redux](https://redux.js.org/) - front end state management framework
* [Solidity](https://docs.soliditylang.org/en/v0.7.4/) - ethereum smart contract language
* [Ganache](https://www.trufflesuite.com/ganache) - local blockchain development
* [Web3](https://web3js.readthedocs.io/en/v1.3.0/) - library interact with ethereum nodes 
* [JavaScript](https://www.javascript.com/) - logic front end and testing smart contracts
* [Infura](https://infura.io/) - connection to ethereum networks 
* [Open Zeppelin](https://infura.io/) - smart contract libraries 


### Installation
You need to have [ganache-cli](https://www.npmjs.com/package/ganache-cli) installed globally using npm!

Clone the project 

```sh
$ git clone https://github.com/bc-1998/token-exchange.git
```
##### Folder / Directory Structure
* Token Exchange
  * migrations 
  * public 
  * scripts
  * src
    * abis
    * components
    * contracts
    * flats
    * store
    index.js
  * tests

You will need earlier versions of node e.g 8.10.0 was used 

Install dependencies
```sh
$ npm install 
```
Run local blockchain with ganache. Ensure truffle-config.js networks config is your Ganache port. By default it should be host: 127.0.0.1 and port: 7545 or 8545 depending you used GUI or CLI. 

```sh
$ ganache-cli 
```
Connect your ganache addresses from list of given addresses to Metamask by copying the private key and importing these private keys to Metamask.

Compile, Test and Migrate Contracts on Ganache 
To deploy to kovan use truffle migrate --reset --network kovan
Advisable to rerun ganache-cli before each test
```sh
$ truffle compile --all
$ truffle test ./test/Token.test.js
$ truffle test ./test/Exchange.test.js
$ truffle migrate --reset --network development
```
Load exchange with some initial data, orders, trades, cancels etc 
```sh
$ truffle exec scripts/seed-exchange.js
```

Run app locally 
```sh
$ npm run start
```

To interact with contracts, exchange with Metamask you need Metamask installed
If using ganache copy private key from ganache cli to Metmask
If want to interact with deployed contracts on other networks not local switch network on Metamask 

### Todos
 - Add more Etheruem tokens to trade
 - Make contract upgradeable
 - Explore protocols like 0x etc 
 - Explore more DEFI intergration e.g Compound
 - Explore more complex orders, matching etc and executions on exchange
