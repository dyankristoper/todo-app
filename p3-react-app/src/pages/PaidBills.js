import BillRow from '../components/BillRow';

const PaidBills = ({allPaidBills}) => {

  return (
    <>
      <h1>Paid Bills</h1>
      {/* <h2>Total Paid Bills: </h2> */}

      <>
      <div>
        {
        allPaidBills.map( bill => {
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
      }
      </div>
    </>
    </>
  )
}

export default PaidBills;