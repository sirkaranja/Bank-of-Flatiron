import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Table from './components/Table';
import Form from './components/Form';

function App() {
  const [transactions, setTransactions] = useState([])

  // Fetch data from the the db.json using useEffect

  useEffect (()=> {
    fetch ("https://my-json-server.typicode.com/sirkaranja/Bank-of-Flatiron/transactions")
      .then ((r)=> r.json ())
      .then ((data)=> setTransactions(data))
  }, [])

  function updatedTransactions (newData) {
    const updatedTransactionsArray = [...transactions, newData]
    setTransactions (updatedTransactionsArray)
  }

  return (
    <div className="App">
      <Navbar/><br/>
      <Form newTransaction = {updatedTransactions}/><br/>
      <Table arayOfAllTransactions = {transactions}/>
    </div>
  );
}

export default App;