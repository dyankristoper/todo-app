import BillRow from "../components/BillRow";

import '../assets/styles/PendingBills.css';


const PendingBills = ({allPendingBills}) => {
  let pendingTotal = 0;
  const pendingBills = allPendingBills.map( bill => {
    pendingTotal = parseFloat(pendingTotal) + parseFloat(bill.amount);

    return <BillRow
              key = {bill.name}
              timeCreated = {bill.timeCreated}
              dateCreated = {bill.dateCreated}
              name = {bill.name}
              amount = {bill.amount}
              dueDate = {bill.dueDate}
              planToPay = {bill.planToPay}
              status = {bill.status} />
  })

  return (
    <>
      <main>
        <div>
          <h1 className='pending-bills'>Pending Bills</h1>
          <p className='pending-total'>Pending Total: {pendingTotal}</p>
        </div>
        <table>
          <tr>
              <td className='pending-total'>
                  <p>Time Created</p>
              </td>
              <td className='pending-total'>
                  <p>Date Created</p>
              </td>
              <td className='pending-total'>
                  <p>Bill Name</p>
              </td>
              <td className='pending-total'>
                  <p>Amount Due</p>
              </td>
              <td className='pending-total'>
                  <p>Due Date</p>
              </td>
              <td className='pending-total'>
                  <p>Plan To Pay</p>
              </td>
              <td className='pending-total'>
                  <p>Options</p>
              </td>
          </tr>
          {pendingBills}
      </table>
    </main>
    </>
  )
}

export default PendingBills;