import React, { useEffect, useState } from 'react';
import axiosInstance from '../../api/axios';
import { Link } from 'react-router-dom';
import prev from '../../assets/previousbutton.png';

function StudentsShowInstitutions({ getshowInstitutions }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [showInstitutions, setshowInstitutions] = useState([]);
    const [balance, setBalance] = useState();
    const [limit, setLimit] = useState(1);
    const [review, setReview] = useState(false);

    useEffect(() => {
        const balanceStudents = async () => {
            const setPages = await axiosInstance.get(`/students/getbalanceinstitutions?currentPage=${currentPage}&limit=${limit}`);
            setBalance(setPages.data.findBalanceLength);
        };
        balanceStudents();
    }, [currentPage, limit]);

    useEffect(() => {
        const getInstitutions = async () => {
            const response = await axiosInstance.get(`/students/getshowinstitutions?currentPage=${currentPage}&limit=${limit}`);
            setshowInstitutions(response.data.findInstitutions);
        };
        getInstitutions();
    }, [currentPage, limit]);

    const previousButton = () => {
        setCurrentPage(currentPage - 1);
    };

    const nextButton = () => {
        setCurrentPage(currentPage + 1);
    };

    const showReview = () => {
        setReview(true);
    }

    return (
        <div className={ `${review ? 'opacity-30' : 'opacity-100'} flex justify-center h-screen items-center sm:gap-y-5 flex-col `}>
            <div className={` flex flex-col justify-center mt-[120%] sm:mt-0 bg-none sm:bg-none rounded-md h-[500px] flex-wrap w-1/2 p-4 gap-x-10 gap-y-5 sm:gap-y-0 sm:fixed`}>

                {showInstitutions.map((institutions, index) => (
                    <div key={index} className='relative flex rounded-xl shadow-lg shadow-gray-300 md:max-w-3xl mx-auto border border-white'>
                        <div className='w-full md:w-1/3 bg-gray-100 rounded-md grid place-items-center'>
                            <img className='rounded-tl-xl rounded-bl-xl w-full h-full' src={institutions.image} alt={`Institution ${index + 1}`} />
                        </div>
                        <div className='w-full md:w-2/3 rounded-tr-xl rounded-br-xl bg-gray-700 flex flex-col space-y-2 p-3'>
                            <div className='flex justify-between text-white item-center'>
                                <p className='font-medium hidden md:block'>Vacations</p>
                                <div className='flex items-center'>
                                    <svg  xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <p className='font-bold text-sm ml-1'>
                                        4.96
                                        <span className='font-normal'>(76 reviews)</span>
                                    </p>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 cursor-pointer w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div onClick={showReview} className='bg-gray-200 px-3 py-1 cursor-pointer rounded-full text-xs font-medium text-gray-800 hidden md:block'>
                                    Comments
                                </div>
                            </div>
                            <h3 className='font-black text-white md:text-1xl text-xl'>Name: {institutions.firstName + ' ' + institutions.lastName}</h3>
                            <p className='text-white'>DateOfBirth: {institutions.dob}</p>
                            <p className='text-white'>G-mail: {institutions.email}</p>
                            <p className='text-white'>ContactNumber: {institutions.contactNumber}</p>
                            <Link to={'/students/message'}><button className='bg-yellow-500 flex w-1/5 justify-center rounded-xl p-1 font-mono'>Message</button></Link>
                        </div>
                    </div>
                ))}
                <div className='flex justify-center items-end'>
                    {currentPage < balance && <button onClick={nextButton} className='flex justify-center mt-4 font-bold items-center w-28 h-5 gap-x-2'>Next<img className='w-[30%] -rotate-180 mr-1' src={prev} /></button>}
                </div>
                <div className='flex justify-center items-end'>
                    {currentPage > 1 && <button onClick={previousButton} className='flex mt-3 justify-center font-bold items-center w-28 h-5'><img className='w-[30%] mr-1' src={prev} />Previous</button>}
                </div>
            </div>
        </div>
    );
}

export default StudentsShowInstitutions;
