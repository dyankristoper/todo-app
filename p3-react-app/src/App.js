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

  return (
    <>
      <Header />
      <Routes>
      <Route path='/' element={<HomePage
        allPendingBills = {allPendingBills}
        allPaidBills = {allPaidBills} />} />
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
