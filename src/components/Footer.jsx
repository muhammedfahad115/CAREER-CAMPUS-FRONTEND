import React from 'react'

function Footer() {
  return (
    <>
      <div className="bg-black h-screen flex flex-col justify-center text-white p-8">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <div className="flex flex-row gap-3">
          <div className="bg-gray-800 p-6 rounded-lg mb-4">
            <p className="text-lg">
              Welcome to <span className="text-yellow-500">CAREER&CAMPUS</span>, where we're dedicated to guiding students, institutions, and professionals towards a brighter future. Our platform serves as a nexus, connecting students with the right institutions and helping institutions showcase their courses to eager learners.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg mb-4">
            <p className="text-lg">
              For students, we provide a comprehensive directory of institutions, complete with detailed profiles, reviews, and a vast catalog of courses. It's the ideal place to find the perfect educational path that aligns with your goals.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg mb-4">
            <p className="text-lg">
              Professionals seeking new opportunities can explore job listings from reputable companies. Our platform empowers companies to not only find top talent but also showcase their workplace culture and post available positions.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg mb-4">
            <p className="text-lg">
              At <span className="text-yellow-500">CAREER&CAMPUS</span>, we believe in bridging the gap between ambition and achievement. Join us on this journey, where education meets opportunity, and careers find their next chapter.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer