import React, { useState } from 'react';

function InstitutionsSearch({ searchedStudent }) {
  return (
    <>
      <div className='md:flex  justify-center pt-24 sm:mr-48 ml-2.5'>
        <div className='fixed z-50 w-[300px] rounded-md h-[400px] bg-gray-300 p-2'>
          {searchedStudent.map((student, index) => (
            <h1 className='text-white border-b-2 ' key={index}>
              {student.firstName + ' ' + student.lastName}
            </h1>
          ))}
        </div>
      </div>
    </>
  );
}

export default InstitutionsSearch;
