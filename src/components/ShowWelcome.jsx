// import React, { useState } from 'react';
// import deleteImage from '../assets/deletebutton.png';

// function ShowWelcome() {
//   const [showWelcome, setShowWelcome] = useState(true);

//   const deleteComponent = () => {
//     setShowWelcome(false);
//   };

//   return (
//     <>
//       {showWelcome && (
//         <div className='relative container mx-auto my-8 text-center bg-gray-100 p-8 rounded-lg'>
//           <button
//             onClick={deleteComponent}
//             className='absolute top-2 right-2 p-2 bg-red-500 text-white rounded-md hover:bg-red-600'
//           >
//             <img className='w-20' src={deleteImage} />
//           </button>
//           <h1 className='text-3xl text-gray-500'>
//             Welcome to{' '}
//             <span className='text-yellow-500 font-bold'>CAREER&CAMPUS</span>, explore yourself and enjoy using CAREER&CAMPUS.
//           </h1>
//         </div>
//       )}
//     </>
//   );
// }

// export default ShowWelcome;
