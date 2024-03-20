import { Route, Routes } from 'react-router-dom'
import StudentsSignup from '../components/students/StudentsSignup'
import StudentsLogin from '../components/students/StudentsLogin'
import StudentsHome from '../pages/StudentsHome'
import StudentsForgotPassword from '../components/students/StudentsForgotPassword'
import StudentNewPassword from '../components/students/StudentNewPassword'
import { StudentsContextProvider } from '../context/StudentsContext'
import StudentProfile from '../components/students/StudentProfile'
import StudentShowProfile from '../components/students/StudentShowProfile'
import StudentMessage from '../components/students/StudentMessage'
import PageNotFound from '../components/PageNotFound'
import AuthGuard from '../routeguard/AuthGuard'

function StudentRouter() {


  return (
    <StudentsContextProvider>
      <>
        <Routes>
          <Route path='/signup' element={<StudentsSignup />}></Route>
          <Route path='/login' element={<StudentsLogin />}></Route>
          <Route path='/forgotpassword' element={<StudentsForgotPassword />}></Route>

          <Route path='/' element={<AuthGuard />}>
            <Route path='/home' element={<StudentsHome />}></Route>
            <Route path='/newpassword' element={<StudentNewPassword />}></Route>
            <Route path='/addprofile' element={<StudentProfile />}></Route>
            <Route path='/showprofile' element={<StudentShowProfile />}></Route>
            <Route path='/message' element={<StudentMessage />}></Route>
          </Route>

          <Route path='*' element={<PageNotFound />}></Route>
        </Routes>
      </>
    </StudentsContextProvider>
  )
}

export default StudentRouter