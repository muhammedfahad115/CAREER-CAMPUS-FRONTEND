import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Landingpage from './pages/Landingpage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StudentRouter from './router/StudentRouter'
import LandingRouter from './router/LandingRouter'
import InstituitonRouter from './router/InstituitonRouter'
import EmployeesRouter from './router/EmployeesRouter'
import CompaniesRouter from './router/CompaniesRouter'
import StudentsSignup from './components/students/StudentsSignup'

function App() {

  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/companies/*' element={<CompaniesRouter/>} ></Route>
          <Route path='/students/*' element={<StudentRouter/>}></Route>
          <Route path='/institutions/*' element={<InstituitonRouter/>}></Route>
          <Route path='/employees/*' element={<EmployeesRouter/>}></Route>
          <Route path='/*' element={<LandingRouter/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
