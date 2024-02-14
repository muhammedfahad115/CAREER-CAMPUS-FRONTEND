import React from 'react'
import institutionsloginbackground from '../../assets/institutionslogin.jpg'
import { Link } from 'react-router-dom'
import 'animate.css'
function InstitutionsLogin() {
  return (
    <>
    
      <div className='w-screen h-screen bg-cover' style={{ backgroundImage: `url(${institutionsloginbackground})` }}>
        <div className="min-h-screen flex flex-col items-center justify-center">
          <div className="bg-white p-8 pr-12 rounded-lg shadow-lg max-w-md w-full flex animate__animated animate__fadeInDown flex-col items-center sm:flex-row sm:items-start">
            <form className="w-full sm:ml-4">
              <h2 className="text-3xl  flex justify-center font-bold mb-4 text-black-500"> Institutions Login</h2>
              <div className="mb-4">
                <input type="email" placeholder='E-mail' id="email" name="email" className="w-full border border-gray-300 p-2 rounded" required />
              </div>
              <div className="mb-4">
                <input type="password" placeholder='Password' id="password" name="password" className="w-full border border-gray-300 p-2 rounded" required />
              </div>
              <Link to={'/institutions/signup'}><p className=' flex gap-2 justify-center'>You don't have an account? <span className=' text-yellow-600 cursor-pointer'>SignUp</span></p></Link>
              <div className="flex flex-col justify-center my-7 sm:flex-row sm:items-start">
                <button type="submit" className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-yellow-600 w-full sm:w-auto">Login</button>
                <Link to={'/'}><button className="mt-4 bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 sm:mt-0 sm:ml-4 w-full sm:w-auto">Back</button></Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default InstitutionsLogin