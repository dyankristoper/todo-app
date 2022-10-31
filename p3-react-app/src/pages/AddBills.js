import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const AddBills = () => {

  const allBills = useSelector(state => state.allBills);
  const dispatch = useDispatch();

  const [billName, setBillName] = useState('');
  const [billAmount, setBillAmount] = useState(0);
  const [billDueDate, setBillDueDate] = useState({due: new Date()});
  const [billPlanToPay, setBillPlanToPay] = useState({due: new Date()});
  const [ hasError, setHasError ] = useState( false );
  const [errorMessage, setErrorMessage] = useState('');

  const onBillNameChangeHandler = event => {
    setBillName(event.target.value);
  }
  const onBillAmountChangeHandler = event => {
    setBillAmount(event.target.value);
  }
  const onBillDueDateChangeHandler = event => {
    setBillDueDate(event.target.value);
  }
  const onBillPlanToPayChangeHandler = event => {
    setBillPlanToPay(event.target.value);
  }

  const onSubmitFormHandler = event => {
    event.preventDefault();

    if(billName.trim() === '' || billAmount === 0 || billAmount === '') {
      setHasError( true );
      setErrorMessage('Input Cannot Be Empty!');
    }
    else if(allBills.filter( bill => bill.name.trim().toLowerCase() === billName.trim().toLowerCase()).length !==0) {
      setHasError( true );
        setErrorMessage('Bill is already exist! Please try again.');
    }
    else {
        dispatch({type: 'ADD', payload: {
          name: billName,
          amount: billAmount,
          dueDate: billDueDate,
          planToPay: billPlanToPay,
          status: 'pending'

        }})
        setHasError( false );
        setErrorMessage('');
        setBillName('');
        setBillAmount('');
        setBillDueDate('');
        setBillPlanToPay('');
    }
}

  return (
    <>
      <form onSubmit = {onSubmitFormHandler}>
      <h1>Adding Bills</h1>
        <h3>Bill Name</h3>
        <input
        type = 'text'
        value = {billName}
        onChange = { onBillNameChangeHandler}
        />
        <h3>Amount Due</h3>
        <input
        type = 'number'
        value = {billAmount}
        onChange = { onBillAmountChangeHandler}
        />
        <h3>Due Date</h3>
        <input
        type = 'date'
        value = {billDueDate}
        onChange = { onBillDueDateChangeHandler}
        />
        <h3>Plan To Pay</h3>
        <input
        type = 'date'
        value = {billPlanToPay}
        onChange = { onBillPlanToPayChangeHandler}
        />
        <br/>
            {/* Conditional rendering for error */}
            { hasError && <small className='error'>{ errorMessage }</small> }

            <br/>
            <button type="submit">
                + Add Bill
            </button>

      </form>
    </>
  )
}

export default AddBills;