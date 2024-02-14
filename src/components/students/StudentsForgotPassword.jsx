import React from 'react';
import 'animate.css'
import { Link } from 'react-router-dom';
function StudentsForgotPassword() {
  return (
    <>
      <div className="flex justify-center items-center h-screen ">
        <div className="bg-white p-8 border-4 border-y-yellow-400-300 rounded-lg shadow-lg max-w-md w-full animate__animated animate__fadeInUp">
          <h1 className="text-3xl font-bold text-black mb-6 text-center">FORGOT PASSWORD</h1>
          <form className="space-y-4">
            <div>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter your email"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-black w-full"
            >
              Reset Password
            </button>
          </form>
          <br />
           <Link to={'/students/login'}> <div className='flex justify-end'><button className='bg-black text-white py-2 px-4 rounded hover:bg-gray-500'>Back</button></div></Link>
        </div>
      </div>
    </>
  );
}

export default StudentsForgotPassword;
