import React,{useState, useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

const AddTransaction = () => {
    const {AddTransaction} = useContext(GlobalContext);
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        AddTransaction(newTransaction);
    }

    return (
        <>
        <h3>Add new Transaction</h3>
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Exter text..."/>
            </div>
            <div className="form-control">
                <label htmlFor="amount"><br/>
                </label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}  placeholder="Enter amount..."/>
            </div>
            <button className="btn">Add transaction</button>
        </form>
        </>
    )
}

export default AddTransaction
