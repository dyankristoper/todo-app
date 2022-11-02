import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';

import AllBillRow from "../components/AllBillRow";

import '../assets/styles/Homepage.css';

import payment from '../assets/payment.png';

const Homepage = ({allPendingBills, allPaidBills}) => {

  const bills = useSelector( state => state.allBills);
  const [filterByName, setFilterByName] = useState('');
  const [runningTotal, setRunningTotal] = useState(0);

  const pendingBills = allPendingBills.filter(bill => {
    if (filterByName === '') {
      return bill;
    }
    else if (bill.name.toUpperCase().includes(filterByName.toUpperCase())) {
      return bill;
    }
  })
  .map( bill => {
    return <AllBillRow
              key = {bill.name}
              timeCreated = {bill.timeCreated}
              dateCreated = {bill.dateCreated}
              name = {bill.name}
              amount = {bill.amount}
              dueDate = {bill.dueDate}
              planToPay = {bill.planToPay}
              status = {bill.status} />
  });

  const paidBills = allPaidBills.filter(bill => {
    if (filterByName === '') {
      return bill;
    }
    else if (bill.name.toUpperCase().includes(filterByName.toUpperCase())) {
      return bill;
    }
  })
  .map( bill => {
    return <AllBillRow
                    key = {bill.name}
                    timeCreated = {bill.timeCreated}
                    dateCreated = {bill.dateCreated}
                    name = {bill.name}
                    amount = {bill.amount}
                    dueDate = {bill.dueDate}
                    planToPay = {bill.planToPay}
                    status = {bill.status} />
                  })

    let allTotal = 0;
    bills.map( bill => {
      allTotal = parseFloat(allTotal) + parseFloat(bill.amount)
    });

  useEffect(() => {
    setRunningTotal( bills.filter( bill => bill.name.toUpperCase().includes( filterByName.toUpperCase() ) ).reduce(( accum, current ) => {
      return accum + current.amount
    },0));
  }, [filterByName]);

  return (
    <>
      <main>
        <div className='logo-title'>
          <img className='logo' src={payment} alt = 'paymentlogo'/>
          <h1 className='title'>Due Date Wise</h1>
          <input 
            type='text' 
            placeholder='Search Bill Name...' 
            value={ filterByName }
            onChange={ e => setFilterByName(e.target.value) }  
          />
        </div>
        <div className='home-total'>
          <p>Sub-total: &#8369;{ runningTotal }</p>
          <p>All Total: &#8369;{allTotal}</p>
        </div>
        <table>
          <tr>
              <td className='home-table'>
                  <p>Time Created</p>
              </td>
              <td className='home-table'>
                  <p>Date Created</p>
              </td>
              <td className='home-table'>
                  <p>Bill Name</p>
              </td>
              <td className='home-table'>
                  <p>Amount Due</p>
              </td>
              <td className='home-table'>
                  <p>Due Date</p>
              </td>
              <td className='home-table'>
                  <p>Plan To Pay</p>
              </td>
              <td className='home-table'>
                  <p>Status</p>
              </td>
          </tr>
            {pendingBills}
            {paidBills}
        </table>
      </main>
    </>
  )
}

export default Homepage;