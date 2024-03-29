import React from 'react'
import { Routes,Route } from 'react-router-dom'
import InstitutionsLogin from '../components/institutions/InstitutionsLogin'
import InstitutionsSignup from '../components/institutions/InstitutionsSignup'
import InstitutionsHome from '../pages/InstitutionsHome'
import InstitutionsProfile from '../components/institutions/InstitutionsProfile'
import InstitutionsMessage from '../components/institutions/InstitutionsMessage'
import InstitutionsAdvertisment from '../components/institutions/InstitutionsAdvertisment'
import InstitutionsAdsPayment from '../components/institutions/InstitutionsAdsPayment'
import PageNotFound from '../components/PageNotFound'

function InstituitonRouter() {
  return (
    <>
    <Routes>
        <Route path='/login' element={<InstitutionsLogin/>}></Route>
        <Route path='/signup' element={<InstitutionsSignup/>}></Route>
        <Route path='/home' element={<InstitutionsHome/>}></Route>
        <Route path='/addprofile' element={<InstitutionsProfile/>}></Route>
        <Route path='/message' element={<InstitutionsMessage/>}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
    </Routes>
    </>
  )
}

export default InstituitonRouter