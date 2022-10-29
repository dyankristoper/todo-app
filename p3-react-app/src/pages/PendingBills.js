import BillRow from "../components/BillRow";


const PendingBills = ({allPendingBills}) => {
  let pendingTotal = 0;
  const pendingBills = allPendingBills.map( bill => {
    pendingTotal = parseInt(pendingTotal) + parseInt(bill.amount);
    console.log(pendingTotal);
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
  // console.log(allPendingBills);
  // console.log(pendingTotal);
  return (
    <>
      <div>
        <p>Pending Total: {pendingTotal}</p>
        {pendingBills}
      </div>
    </>
  )
}

export default PendingBills;