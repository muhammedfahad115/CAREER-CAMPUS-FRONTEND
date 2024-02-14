import React, { useState } from 'react'
import studentsignup from '../../assets/studentsignup.jpg'
import axios from 'axios'
import { Link } from 'react-router-dom'
import 'animate.css'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../api/axios'

function StudentsSignup() {
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [reenterpassword,setReenterPassword] = useState('') 
  const [error,setError] = useState('')
  const navigate = useNavigate()

  const backendUrl = '/students/signup'

     function regexValidation(password){
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (passwordRegex.test(password)) {
      setError('')

    } else {
      setError('Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character (@, $, !, %, *, ?, &).')
    }
  }

  function passwordValidation(){
    regexValidation(password)
  }

  async function submit(e){
    e.preventDefault(); 
    if(password !== reenterpassword){
      setError('password does not match')
    }else{
      setError('')
      try{
        const response = await axiosInstance.post(`${backendUrl}`,{ 
          firstName,lastName,email,password
        })
        if(response.data.message){
          console.log(response.data.message)
          navigate('/students/home')
        }
      }catch(error){
        if(error.response && error.response.data.error){
          setError(error.response.data.error)
        }else{
          console.log('An error occured :',error)
          setError('An error occured. Please try again.')
        }
      }
    }
  }
  return (
    <>
      <div className='w-screen h-screen bg-cover' style={{ backgroundImage: `url(${studentsignup})` }}>
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-lg max-w-md w-full animate__animated animate__fadeInRight">
          <h2 className="text-4xl font-bold mb-4 text-yellow-500 flex justify-center">Sign Up</h2>

          <form onSubmit={submit}   action='/post'>
          <div className="flex mb-4">
            <div className="w-1/2 pr-2">
              <input placeholder='FirstName' onChange={(e)=>(setFirstName(e.target.value))}  type="text" id="firstname" name="firstname" className="w-full border border-gray-300 p-2 rounded" required />
            </div>
            <div className="w-1/2 pl-2">
              <input placeholder='LastName'   onChange={(e)=>(setLastName(e.target.value))}   type="text" id="lastname" name="lastname" className="w-full border border-gray-300 p-2 rounded" required />
            </div>
          </div>
          <div className="mb-4">
            <input placeholder='E-mail'  onChange={(e)=>(setEmail(e.target.value))}   type="email" id="email" name="email" className="w-full border border-gray-300 p-2 rounded" required />
          </div>

          <div className="mb-4">
            <input placeholder='Password'   onBlur={passwordValidation}  onChange={(e)=>(setPassword(e.target.value))}   type="password" id="password" name="password" className="w-full border border-gray-300 p-2 rounded" required />
          </div>
         
          <div className="mb-4">
            <input placeholder='Re-enter Password'  onChange={(e)=>(setReenterPassword(e.target.value))}  type="password" id="reenterpassword" name="reenterpassword" className="w-full border border-gray-300 p-2 rounded" required />
          </div>

          <div className="mb-4">
          </div>
          <div className=' flex  justify-center text-center text-red-500'><span id='error'>{error}</span></div>
          <div className="flex justify-between">
            <button type="submit" className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 w-full sm:w-auto">Sign Up</button>
            <Link to={'/students/login'}><button className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 w-full sm:w-auto">Back</button></Link>
          </div>
          </form>
        </div>
      </div>
    </div>
   
   
    </>
  )
}

export default StudentsSignup