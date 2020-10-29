import React, { Component } from 'react'
import './App.css'
import Navbar from './Navbar'
import Content from './Content'
import { connect } from 'react-redux'
import {
  loadWeb3,
  loadAccount,
  loadToken,
  loadExchange
} from '../store/interactions'
import { contractsLoadedSelector } from '../store/selectors'

class App extends Component {
  componentWillMount() {
    this.loadBlockchainData(this.props.dispatch)
  }

  async loadBlockchainData(dispatch) {
    const web3 = loadWeb3(dispatch)
    if (web3 ==null)
      window.alert('Connect to Metamask')
    await web3.eth.net.getNetworkType()
    const networkId = await web3.eth.net.getId()
    console.log('networkId', networkId)// the same from truffle migrate output's networkId
    let account = await loadAccount(web3, dispatch)
	if (!account){ //the same as  == null
      await window.ethereum.enable();
      account = await loadAccount(web3, dispatch)
    }
    const token = await loadToken(web3, networkId, dispatch) //note that web3 (provided through metamask in this case) is the key to get  contract blockchain network and address info.
    if(!token) {
      window.alert('Token smart contract not detected on the current network. Please select another network with Metamask.')
      return
    }
    const exchange = await loadExchange(web3, networkId, dispatch)
    if(!exchange) {
      window.alert('Exchange smart contract not detected on the current network. Please select another network with Metamask.')
      return
    }
  }

  render() {    
     return (
      <div>
        <Navbar />
        { this.props.contractsLoaded ? <Content /> : <div className="content"></div> }
      </div>
    );
  }
}

function mapStateToProps(state) {  
  return {
    contractsLoaded: contractsLoadedSelector(state) //contractsLoaded gets merged to props.
  }
}

export default connect(mapStateToProps)(App)
