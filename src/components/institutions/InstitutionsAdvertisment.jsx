import React, { useState } from 'react'
import ads from '../../assets/advertisement.webp'
import InstitutionsAdsPayment from './InstitutionsAdsPayment';
function InstitutionsAdvertisment() {
    const [showPaymentUI,setShowPaymentUI] = useState(false);
    const goToAddPayment = () =>{
        setShowPaymentUI(true)
    }
    return (
        <>
            <div className=" flex items-center flex-col  gap-x-28 z-50  sm:flex-row justify-center mt-20 sm:mt-0 min-h-screen  sm:bg-gray-800">
                <div className="bg-white sm:translate-y-11  rounded-lg shadow-md p-8 max-w-md w-full   space-y-4">
                    <img className=' w-[60%]  h-[50%]' src={ads}/>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Reach Students Worldwide<span className='animate-ping'>!</span>
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Showcase your institution to students around the globe. Make your advertisement visible and attract the right audience.
                    </p>
                    <button onClick={goToAddPayment} className="bg-yellow-500 font-semibold text-white px-4 py-2 animate-bounce rounded-md hover:bg-orange-600 hover:text-white transition duration-300">
                        Get Started
                    </button>
                </div>
                {
                    showPaymentUI && (
                        <div className='sm:translate-y-10'><InstitutionsAdsPayment/></div>
                    )
                }
            </div>

        </>
    )
}

export default InstitutionsAdvertisment