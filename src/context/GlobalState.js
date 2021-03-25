import React,{createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
//initial state
const initialState = {
    transactions: []
}

//create context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //actions
    function AddTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            AddTransaction}}>
            {children}
        </GlobalContext.Provider>
    )
}