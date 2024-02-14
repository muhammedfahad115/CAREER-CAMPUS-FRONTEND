import React, { useEffect, useState } from 'react'
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import StudentsSignup from '../components/students/StudentsSignup'
import StudentsLogin from '../components/students/StudentsLogin'
import StudentsHome from '../pages/StudentsHome'
import StudentsForgotPassword from '../components/students/StudentsForgotPassword'
import studentStore from '../redux/studentsredux/studentsstore'


// function  PrivateRoute({ element, authorized, fallbackPath }) {
//   return authorized ? element : <Navigate to={fallbackPath} />;
// }

function StudentRouter() {
  const [authorized,setAuthorized]= useState(false)

  useEffect(()=>{
    const checkToken = async()=> {
      try{
          const tokenExists = await localStorage.getItem('jwtToken') !== null
          setAuthorized(tokenExists) 
      }catch(error){
        console.log('Error when checking token',error)
      }
    }
    checkToken()
  },[])
  

  return (
    <>
      <Routes>
        <Route path='/signup' element={<StudentsSignup />}></Route>
        <Route path='/login' element={<StudentsLogin />}></Route>
        {
          authorized ? (<Route path='/home' element={<StudentsHome/>}></Route>) : (<Route path='/login' element={<StudentsLogin/>}></Route>)
        }
        {/* <PrivateRoute
        path="/home"
        element={<StudentsHome />}
        authorized={authorized}
        fallbackPath="/login"
      /> */}
        <Route path='/forgotpassword' element={<StudentsForgotPassword/>}></Route>
      </Routes>
    </>
  )
}

export default StudentRouter