import React, { useState, useContext } from 'react'


import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [description, setDescription] = useState('');
    const [transactionAmount, setTransactionAmount] = useState('');


    const { AddTransaction } = useContext(GlobalContext);

    const onSubmit=(e)=>{
        e.preventDefault();


        if (Number(transactionAmount) === 0) {

                    alert("Please enter the correct value ");
                    return false;
                }
            
                

        const newTransaction ={
            id:new Date().getTime(),
            description,
            transactionAmount:+transactionAmount
        }

        AddTransaction(newTransaction);
        setDescription('');
        setTransactionAmount('');
    }





    return (
        <div>
            <h3>Add New Transaction</h3>

            <form onSubmit={onSubmit}>

                <div className="form-control">
                    <label htmlFor="description">
                        Description
                    </label>

                    <input type="text"
                        id='description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder='Detail of Transaction' required />

                </div>
                <div className="form-control">
                    <label htmlFor="transactionAmount">
                        Transaction Amount
                    </label>

                    <input type="number"
                        id="transactionAmount"
                        onChange={(e) => setTransactionAmount(e.target.value)}
                        value={transactionAmount } 

                        placeholder=" $ value of Transaction"  />

                </div>


                <button className="Addbtn" onClick={onSubmit}>Add Transaction</button>
            </form>

        </div>
    )
}