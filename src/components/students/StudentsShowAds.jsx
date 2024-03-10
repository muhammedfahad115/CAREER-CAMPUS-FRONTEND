import React from 'react'

function StudentsShowAds() {
  return (
    <>
        <div className="flex justify-center items-center h-screen">
        {/* Bigger Container */}
        <div className="w-1/2 h-300 bg-white rounded-lg shadow-md p-4">
          {/* Smaller Container */}
          <div className="w-1/3 h-1/3 bg-yellow-200 shadow-yellow p-2">
            {/* Content of the smaller container goes here */}
          </div>
        </div>
      </div>
      </>
  )
}

export default StudentsShowAds