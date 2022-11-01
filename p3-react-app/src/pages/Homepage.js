import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import AllBillRow from "../components/AllBillRow";

const Homepage = ({allPendingBills, allPaidBills}) => {

  const bills = useSelector( state => state.allBills);
  const [filterByName, setFilterByName] = useState('');

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
  })

  const paidBills = allPaidBills.filter(bill => {
    if (filterByName === '') {
      return bill
    }
    else if (bill.name.toUpperCase().includes(filterByName.toUpperCase())) {
      return bill
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
    })

  const [runningTotal, setRunningTotal] = useState(0);

  useEffect(() => {
    setRunningTotal( bills.filter( bill => bill.name.toUpperCase().includes( filterByName.toUpperCase() ) ).reduce(( accum, current ) => {
      return accum + current.amount
    },0));
  }, [filterByName]);

  return (
    <>
      <div>
        <input 
          type='text' 
          placeholder='Search Bill Name...' 
          value={ filterByName }
          onChange={ e => setFilterByName(e.target.value) }  
        />
      </div>
      <div>
        <p>All Total: {allTotal}</p>
        <p>Sub-total: { runningTotal }</p>
      </div>
      <table>
        <tr>
            <td>
                <p>Time Created</p>
            </td>
            <td>
                <p>Date Created</p>
            </td>
            <td>
                <p>Bill Name</p>
            </td>
            <td>
                <p>Amount Due</p>
            </td>
            <td>
                <p>Due Date</p>
            </td>
            <td>
                <p>Plan To Pay</p>
            </td>
            <td>
                <p>Status</p>
            </td>
        </tr>
          {pendingBills}
          {paidBills}
      </table>
    </>
  )
}

export default Homepage;