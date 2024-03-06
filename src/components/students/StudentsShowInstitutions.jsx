
import React, { useEffect, useState } from 'react'
import axiosInstance from '../../api/axios'
import prev from '../../assets/previousbutton.png'
// eslint-disable-next-line react/prop-types
function StudentsShowInstitutions ({ getshowInstitutions }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [showInstitutions, setshowInstitutions] = useState([]);
    const [balance, setBalance] = useState()
    const [limit, setLimit] = useState(1)
    useEffect(() => {
        const balanceStudents = async () => {
            const setPages = await axiosInstance.get(`/students/getbalanceinstitutions?currentPage=${currentPage}&limit=${limit}`)
            setBalance(setPages.data.findBalanceLength);
        }
        balanceStudents()
    }, [])
    useEffect(() => {
        const getinstitutions = async () => {
            const response = await axiosInstance.get(`/students/getshowinstitutions?currentPage=${currentPage}&limit=${limit}`)
            setshowInstitutions(response.data.findInstitutions);
        }
        getinstitutions()
    }, [currentPage])


    const previousButton = () => {
        setCurrentPage(currentPage - 1)
    }
    const nextButton = () => {
        setCurrentPage(currentPage + 1)
    }
    return (
        <>
            <div className=' flex justify-center   h-screen items-center  sm:gap-y-5 flex-col' >
                <div className=' flex justify-center mt-[120%] sm:mt-0 bg-none sm:bg-none rounded-md flex-wrap w-1/2 p-4 gap-x-10  gap-y-5 sm:gap-y-0 sm:fixed'>
                    <div className=' flex justify-center items-end'>{currentPage > 1 && <button onClick={previousButton} className=' flex  justify-center font-bold items-center w-28 h-5'><img className='w-[30%] mr-1' src={prev} />Previous</button>}</div>
                    {/* <br /> */}
                    {showInstitutions.map((institutions, index) => (
                        <div key={index} className=' bg-gray-200 p-4 rounded-lg hover:shadow-xl hover:scale-105 transition duration-300'>
                            <div className='flex justify-center'><img className='w-[100px] h-[100px] rounded-full' src={institutions.image} /></div>
                            <h1 className='text-xl font-bold font-serif mb-2'>Name: {institutions.firstName + ' ' + institutions.lastName}</h1>
                            <p>DateOfBirth: {institutions.dob}</p>
                            <p>G-mail: {institutions.email}</p>
                            <p>ContactNumber: {institutions.contactNumber}</p>
                        </div>
                    ))}
                    <div className=' flex justify-center items-end '>
                        {currentPage < balance && <button onClick={nextButton} className=' flex justify-center  font-bold items-center w-28 h-5 gap-x-2'>Next<img className='w-[30%] -rotate-180 mr-1' src={prev} /></button>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudentsShowInstitutions
