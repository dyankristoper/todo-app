import { useDispatch } from "react-redux";

import '../assets/styles/BillRow.css';


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
            <td className='buttons'>
                {
                    status === 'PENDING' &&
                    <button className='paid'
                     onClick = { () => 
                    dispatch({ type: 'PAID', payload: {name: name}})}>
                        Paid
                    </button>
                }
                {
                    status === 'PAID' &&
                    <button className='undo' 
                    onClick = { () => 
                    dispatch({ type: 'UNDO', payload: {name: name}})}>
                        Undo
                    </button>
                }
                <button className='remove' 
                onClick={ () => 
                    dispatch({ type: 'REMOVE', payload: {name: name}})}>
                    Remove
                </button>
            </td>
        </tr>
  )
}

export default BillRow