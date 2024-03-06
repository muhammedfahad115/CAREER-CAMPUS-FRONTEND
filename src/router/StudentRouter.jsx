import React, { useContext, useEffect, useState } from 'react'
import { Route, Routes, Navigate, useNavigate, useOutlet } from 'react-router-dom'
import StudentsSignup from '../components/students/StudentsSignup'
import StudentsLogin from '../components/students/StudentsLogin'
import StudentsHome from '../pages/StudentsHome'
import StudentsForgotPassword from '../components/students/StudentsForgotPassword'
import StudentNewPassword from '../components/students/StudentNewPassword'
import { StudentContext, StudentsContextProvider } from '../context/StudentsContext'
import StudentProfile from '../components/students/StudentProfile'
import StudentShowProfile from '../components/students/StudentShowProfile'
import StudentMessage from '../components/students/StudentMessage'

function StudentRouter() {
  const [authorized, setAuthorized] = useState(false)
 
  useEffect(() => {
    const checkToken = async () => {
      try {
        const tokenExists = await localStorage.getItem('jwtToken') !== null
        setAuthorized(tokenExists)
      } catch (error) {
        console.log('Error when checking token', error)
      }
    }
    checkToken()
  }, [])


  return (
    <StudentsContextProvider>
    <>
      <Routes>
        <Route path='/signup' element={<StudentsSignup />}></Route>
        <Route path='/login' element={<StudentsLogin />}></Route>
        {
          authorized ? (<Route path='/home' element={<StudentsHome />}></Route>) : (<Route path='/login' element={<StudentsLogin />}></Route>)
        }
        <Route path='/forgotpassword' element={<StudentsForgotPassword />}></Route>
        <Route path='/newpassword' element={<StudentNewPassword/>}></Route>
        {
          authorized ? (<Route path='/addprofile' element={<StudentProfile/>}></Route>) : (<Route path='/login' element={<StudentsLogin />}></Route>)
        }
        {
          authorized ? (<Route path='/showprofile' element={<StudentShowProfile/>}></Route>) : (<Route path='/login' element={<StudentsLogin />}></Route>)
        }
        <Route path='/message' element={<StudentMessage/>}></Route>
      </Routes>
    </>
    </StudentsContextProvider>
  )
}

export default StudentRouter