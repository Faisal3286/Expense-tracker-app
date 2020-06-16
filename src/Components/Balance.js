import React, {useContext} from 'react'
import {GlobalContext} from '../Context/GlobalState';


export const Balance = () => {
    const {transactions} = useContext(GlobalContext)
    const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div className='dib br1 pa3 grow  shadow-5'>
           <h4>Your Balance</h4>
           <h1 id="balance">${total}</h1>  
        </div>
    )
}
