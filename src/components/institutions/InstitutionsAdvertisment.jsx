import React from 'react'
import ads from '../../assets/advertisement.webp'
function InstitutionsAdvertisment() {
    return (
        <>
            <div className="flex items-center justify-center mt-20  sm:mt-0 min-h-screen  sm:bg-gray-800">
                <div className="bg-white  rounded-lg shadow-md p-8 max-w-md w-full   space-y-4">
                    <img className=' w-[60%]  h-[50%]' src={ads}/>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Reach Students Worldwide<span className='animate-ping'>!</span>
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Showcase your institution to students around the globe. Make your advertisement visible and attract the right audience.
                    </p>
                    <button className="bg-yellow-500 font-semibold text-white px-4 py-2 animate-bounce rounded-md hover:bg-orange-600 hover:text-white transition duration-300">
                        Get Started
                    </button>
                </div>
            </div>

        </>
    )
}

export default InstitutionsAdvertisment