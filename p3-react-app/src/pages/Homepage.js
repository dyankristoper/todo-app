import AllBillRow from "../components/AllBillRow";

const Homepage = ({allPendingBills, allPaidBills}) => {

  let pendingTotal = 0;
  const pendingBills = allPendingBills.map( bill => {
    pendingTotal = parseFloat(pendingTotal) + parseFloat(bill.amount);

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

  let paidTotal =  0;
  const paidBills = allPaidBills.map( bill => {
    paidTotal = parseFloat(paidTotal) + parseFloat(bill.amount);

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


  return (
    <>
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