import {Routes, Route} from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/Homepage'
import AddBills from './pages/AddBills'
import PendingBills from './pages/PendingBills'
import PaidBills from './pages/PaidBills'

const App = () => {

// const counter = useSelector();
// const dispatch = useDispatch();

  return (
    <>
      <Header />
      <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/add-bills' element={<AddBills />} />
      <Route path='/pending-bills' element={ <PendingBills />} />
      <Route path='/paid-bills' element={ <PaidBills />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
