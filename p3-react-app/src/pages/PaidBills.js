import BillRow from '../components/BillRow';

const PaidBills = ({allPaidBills}) => {

  let paidTotal =  0;
  const paidBills = allPaidBills.map( bill => {
    paidTotal = parseFloat(paidTotal) + parseFloat(bill.amount);

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
      <div>
        <p>Paid Total: {paidTotal}</p>
        {paidBills}
      </div>
    </>
  )
}

export default PaidBills;