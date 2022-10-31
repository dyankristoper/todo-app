const AllBillRow = ({timeCreated, dateCreated, name, amount, dueDate, planToPay, status}) => {

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
            <span>{amount}</span>
        </td>
        <td>
            <span>{dueDate}</span>
        </td>
        <td>
            <span>{planToPay}</span>
        </td>
        <td>
            <span>{status}</span>
        </td>
    </tr>
  )
}

export default AllBillRow