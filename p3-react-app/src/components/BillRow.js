import { useDispatch } from "react-redux";


const BillRow = ({timeCreated, dateCreated, name, amount, dueDate, planToPay, status}) => {
    const dispatch = useDispatch();

  return (
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
                <span>&#8369;{amount}</span>
            </td>
            <td>
                <span>{dueDate}</span>
            </td>
            <td>
                <span>{planToPay}</span>
            </td>
            {
                status === 'PENDING' &&
                <button onClick = { () => dispatch({ type: 'PAID', payload: {name: name}})}>
                    Paid
                </button>
            }
            {
                status === 'PAID' &&
                <button onClick = { () => dispatch({ type: 'UNDO', payload: {name: name}})}>
                    Undo
                </button>
            }
            <button onClick={ () => dispatch({ type: 'REMOVE', payload: {name: name}})}>
                Remove
            </button>
        </tr>
  )
}

export default BillRow