import React from 'react'
import './App.css';

import { AccountSummary } from './component/AccountSummary';
import { AddTransaction } from './component/AddTransaction';
import { Balance } from './component/Balance';
import { Header } from './component/Header'
import { TransactionHistory } from './component/TransactionHistory';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>

      <Header />
      <div className='container'>
        <Balance />
        <AccountSummary />
        <TransactionHistory />
        <AddTransaction />
      </div>


    </GlobalProvider>


  );
}

export default App;
