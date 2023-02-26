import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NewCustomer from './components/NewCustomer'
import Transferoption from './components/Transferoption'

function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/new" element={<NewCustomer />} />
      <Route path="/deposit" element={<Deposit />} />
      <Route path="/withdraw" element={<Withdraw />} />
      <Route path="/transfer" element={<Transferoption />} />
      <Route path="/balance" element={<Balance />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App