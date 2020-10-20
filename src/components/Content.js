import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  exchangeSelector,
  tokenSelector,
  accountSelector,
  web3Selector,
} from '../store/selectors'
import { loadAllOrders, subscribeToEvents } from '../store/interactions'
import OrderBook from './OrderBook'
import Trades from './Trades'
import MyTransactions from './MyTransactions'
import PriceChart from './PriceChart'
import Balance from './Balance'
import NewOrder from './NewOrder'

class Content extends Component {
    componentWillMount() {
        this.loadBlockchainData(this.props)
      }
    
      async loadBlockchainData(props) {
        //const { dispatch, exchange } = props
        const {web3, token, account, exchange, dispatch} = props
        console.log('props',props)
        console.log('web3', web3)
        console.log('token',token)
        console.log('account', account)
        console.log('exchange', exchange)
        await loadAllOrders(exchange, dispatch)
        await subscribeToEvents( web3, token, account, exchange, dispatch)
      }
      
    render() {
      return (
        <div className="content">
          <div className="vertical-split">
            <Balance />
          <NewOrder />
          </div>
          <OrderBook />
          <div className="vertical-split">
            <PriceChart />
            <MyTransactions />
          </div>                 
            <Trades />          
        </div>
      )
    }
}


function mapStateToProps(state) {
    return {
      account: accountSelector(state),
    exchange: exchangeSelector(state),
    token: tokenSelector(state),
    web3: web3Selector(state),
    }
  }
  
export default connect(mapStateToProps)(Content)