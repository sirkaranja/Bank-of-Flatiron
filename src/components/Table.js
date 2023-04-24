import React, { useState} from "react";

function Table ({arayOfAllTransactions}) {
    const [dataOfArray, setDataOfArray] = useState ("")

    function handleSubmit (e) {
        e.preventDefault ()
    }
    function handleChange (e) {
        setDataOfArray (e.target.value)
    }

    // use filter and map methods to iterate through data from the db.json then use this data to in the table to display user information

    const oneTransaction = arayOfAllTransactions.filter ((item)=> {
        return dataOfArray.toLowerCase () === "" ? item : item.description.toLowerCase ().includes (dataOfArray)
    })
    .map ((transaction)=> {
        return <tr key= {transaction.id}>
                    <td>{transaction.date}</td>
                    <td>{transaction.description}</td>
                    <td>{transaction.category}</td>
                    <td>{transaction.amount}</td>
               </tr>

        })

    return (
        <>
        <div>
            <div className="container-fluid">
                    <form onSubmit={handleSubmit} className="d-flex" role="search">
                        <input onChange={handleChange} className="form-control me-2" type="search" placeholder="Enter description to search... (use lowcase)" aria-label="Search"/>
                    </form>
                </div>
            </div>
                <table className= "table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {oneTransaction}
                </tbody>
            </table>
            <style>
            <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
/>

            </style>
        </>
    )
}

export default Table 