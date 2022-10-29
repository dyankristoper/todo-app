import {Routes, Route} from 'react-router';
import { useSelector } from 'react-redux';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/Homepage'
import AddBills from './pages/AddBills'
import PendingBills from './pages/PendingBills'
import PaidBills from './pages/PaidBills'

const App = () => {
  
  const bills = useSelector( state => state.allBills);

  const allPendingBills = bills.filter(bill => bill.status.toLowerCase() === 'pending');

  const allPaidBills = bills.filter(bill => bill.status.toLowerCase() === 'paid');

  // const pendingTotal = bills.filter((bill) => {return bill.status === 'pending'}).reduce((prevVal, billVal) => {return prevVal + billVal.amount});

  // const paidTotal = bills.filter((bill) => {return bill.status === 'paid'}).reduce((prevVal, billVal) => {return prevVal + billVal.amount});

  // const addNewBill = (newBillName, newBillAmount, newBillDueData, newBillPlanToPay) => {
  //   let currentBills = bills;
  //   const date = new Date();
  //   const currentDate = date.toDateString();
  //   const currentTime = date.toLocaleTimeString();

  //   currentBills.push( {
  //       timeCreated: currentTime,
  //       dateCreated: currentDate,
  //       name: newBillName,
  //       amount: newBillAmount,
  //       dueDate: newBillDueData,
  //       plantoPay: newBillPlanToPay,
  //       status: 'pending'
  //     }
  //   );
  // }

  return (
    <>
      <Header />
      <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/add-bills' element={<AddBills />} />
      <Route path='/pending-bills' element={ 
      <PendingBills
        allPendingBills = {allPendingBills} />} />
      <Route path='/paid-bills' element={ 
      <PaidBills 
        allPaidBills = {allPaidBills}/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
