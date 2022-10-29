import { useDispatch } from "react-redux"


const BillRow = ({timeCreated, dateCreated, name, amount, dueDate, planToPay, status}) => {
    const dispatch = useDispatch();

  return (
    <table>
        <thead>
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
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>
                <span>{timeCreated}</span>
            </td>
            <td>
                <span>{dateCreated}</span>
            </td>
            <td>
                <span>{name}</span>
            </td>
            <td>
                <span>{amount}</span>
            </td>
            <td>
                <span>{dueDate}</span>
            </td>
            <td>
                <span>{planToPay}</span>
            </td>
            {
                status === 'pending' &&
                <button onClick = { () => dispatch({ type: 'PAID', payload: {name: name}})}>
                    Paid
                </button>
            }
            {
                status === 'paid' &&
                <button onClick = { () => dispatch({ type: 'UNDO', payload: {name: name}})}>
                    Undo
                </button>
            }
            <button onClick={ () => dispatch({ type: 'REMOVE', payload: {name: name}})}>
                Remove
            </button>
        </tr>
        </tbody>
    </table>
  )
}

export default BillRow