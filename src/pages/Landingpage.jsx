import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import img1 from '../assets/studentsimg1.jpg'
import img2 from '../assets/studentsimg2.webp'
import img3 from '../assets/studentsimg3.webp'
import img4 from '../assets/studentsimg4.webp'
import background from '../assets/landingpagebackground.avif'
import {Link} from 'react-router-dom'

function Landingpage() {
    const slides = [img1, img2, img3, img4]
    const [currentIndex, setCarousel] = useState(0)
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCarousel(newIndex)
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCarousel(newIndex)
    }
    return (
        <>
            <Header />
            <div className=" text-white bg-gradient-to-b p-[120px] from-gray-300  to-white     ">

                <div className="cta-div sm:bg-none  bg-yellow-500 text-black p-8 rounded-xl flex flex-col md:flex-row items-center md:justify-between">
                    <div className="mb-8 md:mb-0 md:mr-8">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Gateway to Career and Campus Excellence</h1>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Explore, Connect, Succeed</h2>
                        <p className="text-base md:text-lg mb-4">Empowering Students, Professionals, and Institutions</p>
                        <p className="text-base md:text-lg">Discover the best institutions and companies for your career path. Uncover opportunities, courses, and talent.</p>
                    </div>

                    <div>
                        <img src={background} className='w-full sm:w-[550px] h-[auto] sm:h-[500px] rounded-2xl' alt="Background" />
                    </div>
                </div>
            </div>
            <div className='max-w-[1000px] h-[580px] m-auto py-16 px-4 relative  top-16 '>
                <div style={{ backgroundImage: `url(${slides[currentIndex]})` }} className='w-full h-full bg-center rounded-2xl bg-cover duration-500'></div>
            </div>
            <div className=' absolute sm:top-[155%] translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-yellow-500 text-white cursor-pointer' >
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            <div className=' absolute sm:top-[155%] translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-yellow-500 text-white cursor-pointer' >
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className="flex my-28 flex-col md:flex-row justify-center items-center gap-8 ">
                {/* Student Card */}
                <div className="card bg-gray-100 p-4 md:w-72 md:h-96 text-center rounded-md hover:bg-yellow-500 hover:text-white transition duration-300 ease-in-out relative">
                    <h2 className="text-2xl font-bold mb-2">Students</h2>
                    <p>Unlock a world of knowledge and opportunities. Find the best institutions, courses, and connect with like-minded peers.</p>
                    <div className="absolute bottom-4 left-0 right-0">
                        <Link to={'/students/login'}><button  className="btn rounded-2xl bg-black text-white border-2 border-black hover:bg-yellow-500  hover:text-black py-2 px-6">Get Started</button></Link>
                    </div>
                </div>


                {/* Institution Card */}
                <div className="card bg-gray-100 p-4 md:w-72 md:h-96 text-center rounded-md hover:bg-yellow-500 hover:text-white transition duration-300 ease-in-out relative">
                    <h2 className="text-2xl font-bold mb-2">Institutions</h2>
                    <p>Showcase your institution, courses, and facilities. Connect with prospective students and be part of their educational journey.</p>
                    <div className='absolute bottom-4 left-0 right-0'>
                        <Link to={'/institutions/login'}><button className="btn rounded-2xl bg-black text-white border-2 border-black hover:bg-yellow-500  hover:text-black py-2 px-6">Get Started</button></Link>
                    </div>
                </div>

                {/* Employee Card */}
                <div className="card bg-gray-100 p-4 md:w-72 md:h-96 text-center rounded-md hover:bg-yellow-500 hover:text-white transition duration-300 ease-in-out relative">
                    <h2 className="text-2xl font-bold mb-2">Employees</h2>
                    <p>Discover job opportunities, explore companies, and connect with professionals in your industry. Take the next step in your career.</p>
                    <div className='absolute bottom-4 left-0 right-0'>
                        <Link to={'/employees/login'}><button className="btn rounded-2xl bg-black text-white border-2 border-black hover:bg-yellow-500  hover:text-black py-2 px-6">Get Started</button></Link>
                    </div>
                </div>

                {/* Company Card */}
                <div className="card bg-gray-100 p-4 md:w-72 md:h-96 text-center rounded-md hover:bg-yellow-500 hover:text-white transition duration-300 ease-in-out relative">
                    <h2 className="text-2xl font-bold mb-2">Companies</h2>
                    <p>Find the best talent for your team. Showcase your company culture, job opportunities, and connect with potential employees.</p>
                    <div className=' absolute bottom-4 left-0 right-0'>
                    <Link to={'/companies/login'}><button className="btn rounded-2xl bg-black text-white border-2 border-black hover:bg-yellow-500  hover:text-black py-2 px-6">Get Started</button></Link>
                    </div>
                </div>
            </div>
            <div className='py-32'>
                <div className="flex flex-wrap justify-around mt-8">
                    {/* <!-- Students Success Card --> */}
                    <div className="card rounded-2xl text-center bg-white shadow-md p-4 md:w-48 mb-4">
                        <p className="text-3xl font-bold text-yellow-500">500+</p>
                        <h2 className="text-2xl font-bold mb-2">Students Success</h2>
                        <p className="text-lg text-gray-700 mb-4">Accomplished through our website</p>
                    </div>

                    {/* <!-- Companies Hired Card --> */}
                    <div className="card rounded-2xl text-center bg-white shadow-md p-4 md:w-48 mb-4">
                        <p className="text-3xl font-bold text-yellow-500">50+</p>
                        <h2 className="text-2xl font-bold mb-2">Companies Hired</h2>
                        <p className="text-lg text-gray-700 mb-4">Through our website</p>
                    </div>

                    {/* <!-- Institutions Students Card --> */}
                    <div className="card rounded-2xl text-center bg-white shadow-md p-4 md:w-48 mb-4">
                        <p className="text-3xl font-bold text-yellow-500">300+</p>
                        <h2 className="text-2xl font-bold mb-2">Institution Students</h2>
                        <p className="text-lg text-gray-700 mb-4">Through our website</p>
                    </div>

                    {/* <!-- Employees Better Jobs Card --> */}
                    <div className="card rounded-2xl text-center bg-white shadow-md p-4 md:w-48 mb-4">
                        <p className="text-3xl font-bold text-yellow-500">100+</p>
                        <h2 className="text-2xl font-bold mb-2">Employees Better Jobs</h2>
                        <p className="text-lg text-gray-700 mb-4">Through our website</p>
                    </div>
                </div>
            </div>
           <Footer/>
        </>
    )
}

export default Landingpage