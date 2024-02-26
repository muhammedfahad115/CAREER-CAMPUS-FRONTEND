import React, { useEffect, useState } from 'react'
// eslint-disable-next-line react/prop-types
function InstitutionsShowStudents({ getShowStudents }) {
   
    return (
        <>
            <div className=' flex justify-center  h-screen items-center gap-y-5 flex-col' >
                <div className=' flex justify-center flex-wrap w-screen p-4  fixed'>
                    <br />
                    {getShowStudents.map((student, index)=>(
                        <div key={index} className=' bg-gray-200 p-4 rounded-lg hover:shadow-xl hover:shadow-gray-300 hover:scale-105 transition duration-300'>
                            <h1 className='text-xl font- mb-2'>Name: {student.firstName + ' ' + student.lastName}</h1>
                            <p>DateOfBirth: {student.dob}</p>
                            <p>G-mail: {student.email}</p>
                            <p>ContactNumber: {student.contactNumber}</p>
                        </div>
                    ))}
                </div>  
            </div>
        </>
    )
}

export default InstitutionsShowStudents