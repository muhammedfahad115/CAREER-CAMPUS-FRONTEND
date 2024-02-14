import React from 'react'
import { Routes,Route } from 'react-router-dom'
import InstitutionsLogin from '../components/institutions/InstitutionsLogin'
import InstitutionsSignup from '../components/institutions/InstitutionsSignup'

function InstituitonRouter() {
  return (
    <>
    <Routes>
        <Route path='/login' element={<InstitutionsLogin/>}></Route>
        <Route path='/signup' element={<InstitutionsSignup/>}></Route>
    </Routes>
    </>
  )
}

export default InstituitonRouter