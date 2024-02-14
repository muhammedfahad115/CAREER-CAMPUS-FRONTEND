import React from 'react'
import { Route,Routes } from 'react-router-dom'
import EmployeesLogin from '../components/employees/EmployeesLogin'
import Employeessignup from '../components/employees/Employeessignup'
function EmployeesRouter() {
  return (
    <>
    <Routes>
        <Route path='/login' element={<EmployeesLogin/>}></Route>
        <Route path='/signup' element={<Employeessignup/>}></Route>
    </Routes>
    </>
  )
}

export default EmployeesRouter