/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import 'animate.css'
import { Link, useNavigate,  } from 'react-router-dom';
import axiosInstance from '../../api/axios';
import StudentNewPassword from './StudentNewPassword';
import { StudentContext } from '../../context/StudentsContext';
function ShowOtp() {
  const [error, setError] = useState('')
  const [Otp, setOtp] = useState('')
  const {newPasswordAuthorized, setNewPasswordAuthorized} = useContext(StudentContext)
  const {verifyPhoneNumber} = useContext(StudentContext)
  const navigate = useNavigate()

  async function submit(e) {
    e.preventDefault()
    // console.log(verifyPhoneNumber)
    try {
      const response = await axiosInstance.post('/students/verifyotp', { Otp, verifyPhoneNumber }, { withCredentials: true })
      if(response.data.message){
        console.log(response.data.message)
        setError('')
        setNewPasswordAuthorized(true)
        navigate('/students/newpassword')
      }
    } catch (error) {
      if(error.response && error.response.data.error){
        setError(error.response.data.error)
      }
    }
  }

  return (
    <>
      <form onSubmit={submit} action="post">
        <div className=' mt-7'>
          <input
            type="text"  // Change the type to "text" for OTP
            id="otp"
            name="otp"
            maxLength="6"  // Set the maximum length to 6
            className="w-full border border-gray-300 p-2 rounded"
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter your OTP"
            required
          />
        </div>
        <br />
        <p className=' text-red-500 text-center '>{error}</p>
        <div>
          <button type='submit' className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-black w-full">Submit</button>
        </div>
      </form>

    </>
  )
}
function StudentsForgotPassword() {
  const [forgotEmail, setForgotEmail] = useState('')
  const [showOtp, setshowOtp] = useState(false)
  const [error, setError] = useState('')
  const {verifyPhoneNumber,setVerifyPhoneNumber} = useContext(StudentContext) 
  async function forgotStudent(e) {
    e.preventDefault()

    try {
      const response = await axiosInstance.post('/students/otp', { emailOrPhoneNumber: forgotEmail }, { withCredentials: true })
      const setPhoneNumber = response.data.phoneNumber
      if(setPhoneNumber){
        setVerifyPhoneNumber(setPhoneNumber)
      }
 
      if (response.data.message) {
        setError('')
        setshowOtp(true)
      }

    } catch (error) {

      if (error.response && error.response.data.error) {
        setError(error.response.data.error)
        setshowOtp(false)
      }
    }

  }
  return (
    <>
      <div className="flex justify-center items-center h-screen ">
        <div className="bg-white p-8 border-4 border-y-yellow-400-300 rounded-lg shadow-lg max-w-md w-full animate__animated animate__fadeInUp">
          <h1 className="text-3xl font-bold text-black mb-6 text-center">FORGOT PASSWORD</h1>
          <form onSubmit={forgotStudent} className="space-y-4">
            <div>
              <input
                type="text"
                id="emailOrPhoneNumber"
                name="emailOrPhoneNumber"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder='Enter your Email or PhoneNumber'
                onChange={(e) => (setForgotEmail(e.target.value))}
                readOnly={showOtp}
                required
              />
            </div>
            <p className=' text-red-500 text-center '> {error}</p>
            <div>
            </div>
            {!showOtp && <button
              type="submit"
              className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-black w-full"
            >
              Sent OTP
            </button>}
          </form>
          {showOtp && <ShowOtp  />}
          <br /> 
          <Link to={'/students/login'}> <div className='flex justify-end'><button className='bg-black text-white py-2 px-4 rounded hover:bg-gray-500'>Back</button></div></Link>
        </div>
      </div>

    </>
  );
}

export default StudentsForgotPassword;
