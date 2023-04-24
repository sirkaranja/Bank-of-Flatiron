
import './App.css';
import React, { useSate, useEffect } from 'react';
import Navbar from './components/Navbar';
import Table from './components/Table';
import Form from './components/Form';

function App() {
  const [transactions, setTransactions] = useState([])

  //fetch data from the db.json using useEffect


 
  useEffect (()=> {
    fetch ("http://localhost:3000/transactions")
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
