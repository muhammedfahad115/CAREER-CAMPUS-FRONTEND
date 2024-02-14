import React from 'react'
import { Route,Routes } from 'react-router-dom'
import ComapaniesLogin from '../components/companies/ComapaniesLogin'
import CompaniesSignup from '../components/companies/CompaniesSignup'
function CompaniesRouter() {
  return (
    <>
    <Routes>
        <Route path='/login' element={<ComapaniesLogin/>}></Route>
        <Route path='/signup' element={<CompaniesSignup/>}></Route>
    </Routes>
    </>
  )
}

export default CompaniesRouter