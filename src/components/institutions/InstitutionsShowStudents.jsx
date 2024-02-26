import React, { useEffect, useState } from 'react'
import axiosInstance from '../../api/axios'
import '../institutions/institutionshowstudent.css'
// eslint-disable-next-line react/prop-types
function InstitutionsShowStudents({ getShowStudents }) {
    const handleItemClick = (e) => {
        const target = e.target;
        target.parentNode.childNodes.forEach((item) => {
            item.classList.remove('active');
        });
        target.parentNode.classList.add('active');
    };
    <style>
        
    </style>
    return (
        <>


            <div className="container">
                <ul className="pagination">
                    <li onClick={handleItemClick}><a href="#">Previous</a></li>
                    <li onClick={handleItemClick}><a href="#">1</a></li>
                    <li onClick={handleItemClick}><a href="#">2</a></li>
                    <li onClick={handleItemClick}><a href="#">3</a></li>
                    <li onClick={handleItemClick}><a href="#">4</a></li>
                    <li onClick={handleItemClick}><a href="#">5</a></li>
                    <li onClick={handleItemClick}><a href="#">6</a></li>
                    <li onClick={handleItemClick}><a href="#">7</a></li>
                    <li onClick={handleItemClick}><a href="#">8</a></li>
                    <li onClick={handleItemClick}><a href="#">Next</a></li>
                </ul>
            </div>


            {/* <div className=' flex justify-center  h-screen items-center gap-y-5 flex-col' >
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
            </div> */}
        </>
    )
}

export default InstitutionsShowStudents