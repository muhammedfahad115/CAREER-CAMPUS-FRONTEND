import React from 'react'
import {Link} from 'react-router-dom'
function Header() {
    const home =()=>{
        window.scrollTo({top:0, behavior:'smooth'})
    }
    return (
        <>
            <div className='flex flex-col md:flex-row z-50 justify-between bg-black bg-opacity-10 backdrop-blur-lg text-white p-4 md:p-6 fixed  w-full'>
                <div className=' text-center sm:bg-yellow-500 rounded-md p-2 font-extrabold    '>
                    CAREER&CAMPUS
                </div>
                <div className='flex flex-wrap gap-5 mt-4 md:mt-0 md:ml-4 sm:flex justify-center cursor-pointer'>
                   <div><button onClick={home} className='hover:text-yellow-500'>HOME</button></div>
                   <Link to={'/students/login'}> <div><button className='hover:text-yellow-500'>STUDENTS</button></div></Link>
                   <Link to={'/institutions/login'}><div><button className='hover:text-yellow-500'>INSTITUTIONS</button></div></Link>
                   <Link to={'/employees/login'}><div><button className='hover:text-yellow-500'>EMPLOYEES</button></div></Link>
                   <Link to={'/companies/login'}><div><button className='hover:text-yellow-500'>COMPANIES</button></div></Link>
                </div>

            </div>

        </>
    )
}

export default Header