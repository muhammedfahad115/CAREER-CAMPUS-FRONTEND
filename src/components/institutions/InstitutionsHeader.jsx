import React, { useState } from 'react'
import img1 from '../../assets/searchiconj.png'
import { Link } from 'react-router-dom'
import _, { includes } from 'lodash'
import InstitutionsSearch from './InstitutionsSearch'
function InstitutionsHeader({getShowStudents}) {
    const [typedInput, setTypedInput] = useState('')
    const [showSearch, setShowSearch] = useState(false);
    
    const debounceInputChange = _.debounce((e)=>{
        setTypedInput(e.target.value);
    },1000)
    const filteredData =  getShowStudents.filter((student)=>{
        return typedInput && student && student.firstName && student.firstName.toLowerCase(includes(typedInput))
    })
    const searchBar = () =>{
        setShowSearch(true);
    } 
    const clearSearch =()=>{
        setShowSearch(false)
    }
     
    const home = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  return (
    <>
      <div className='flex flex-col md:flex-row z-50 justify-between bg-black bg-opacity-10 backdrop-blur-lg text-white sm:p-4  md:p-6 fixed  w-full'>
                <div className=' text-center sm:bg-yellow-500 rounded-md p-2 font-extrabold    '>
                    CAREER&CAMPUS
                </div>
                <div className='flex items-center'>
                    <div className='relative   sm:flex'>
                        <input type="text" onChange={debounceInputChange} className='rounded-2xl w-80 h-10 pl-10 text-yellow-500 placeholder:text-center' placeholder='Search Students' onClick={searchBar} onBlur={clearSearch} />
                            
                        <img className='absolute left-2 top-2 w-6 cursor-pointer' src={img1} alt="Search Icon" />
                    </div>
                </div>
                <div className='flex flex-wrap gap-5 mt-4 md:mt-0 md:ml-4 sm:flex justify-center cursor-pointer'>
                    <div><button onClick={home} className='hover:text-yellow-500'>HOME</button></div>
                    <div><Link to={'/institutions/addprofile'}><button className='hover:text-yellow-500'> Add Profile</button></Link></div>
                    <div><button className='hover:text-yellow-500'>Messages</button></div>
                    <div><Link to={'/institutions/showprofile'}><button className='hover:text-yellow-500'>Your Profile</button></Link></div>
                </div>
            </div>
           {
            showSearch && <InstitutionsSearch getShowStudents={getShowStudents}/>
           }
    </>
  )
}

export default InstitutionsHeader