import React, {useState} from "react";
function Table ({arrayofAllTranscations}){
    const [dataOfArray, setDataOfArray] = useState("")

    


    //use filter and map methods to iterate over the data

    const oneTranscations = arrayofAllTranscations.filter((item)=>{
        return dataOfArray.toLowerCase() === "" ? item :item.description.toLowerCase().includes(dataOfArray)
    })
    .map((transaction)=>{
        return <tr key={transaction.id}>
            <td>{transaction.date}</td>
                    <td>{transaction.description}</td>
                    <td>{transaction.category}</td>
                    <td>{transaction.amount}</td>
        </tr>
    })
}

export default Table