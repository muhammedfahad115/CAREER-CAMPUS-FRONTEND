import React, { useEffect, useState } from 'react'
import axiosInstance from '../../api/axios'

function InstitutionsShowStudents() {
    const [getShowStudents, setGetShowStudents] = useState([])
    useEffect(() => {
        const showStudents = async () => {
            const response = await axiosInstance.get('/institutions/getshowstudents', {
                withCredentials: true,
            })
            setGetShowStudents(response.data.getStudents)
        }
        showStudents()
    }, [])
    console.log(getShowStudents);
    return (
        <>
            <div className=' flex justify-center  h-screen items-center gap-y-5 flex-col' >
                <div className=' text-3xl'>
                    <h1  className=' text-gray-500'>Welcome to <span className='text-yellow-500 font-bold'>CAREER&CAMPUS</span> , explore yourself and enjoy using CAREER&CAMPUS.</h1>
                </div>
                <div className=' flex justify-center flex-wrap w-screen p-4 '>
                    <br />
                    {getShowStudents.map((student, index)=>(
                        <div key={index} className=' bg-gray-200 p-4 rounded-lg hover:shadow-2xl hover:shadow-yellow-500 transition duration-300'>
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