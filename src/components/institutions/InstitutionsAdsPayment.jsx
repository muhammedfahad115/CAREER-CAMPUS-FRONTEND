import React, { useRef, useState } from 'react'
import axiosInstance from '../../api/axios';

function InstitutionsAdsPayment() {
    const [image, setImage] = useState('');
    const [institutions, setInstitutions] = useState('');
    const [error, setError] = useState('');
    const formData = new FormData()
    const inputRef = useRef(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Check if an image file is selected
        if (!image || !institutions) {
          
          return;
        }
        formData.append('image', image);
        formData.append('institutions', institutions);
        try {
          // Make the API request using axios
          const response = await axiosInstance.post('/institutions/addedimage', formData, {
            withCredentials: true,
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
    
          // Handle the response as needed
          console.log(response.data);
        } catch (error) {
          // Handle errors
          console.error('Error uploading image:', error);
        }
      };
    
      const handleClick = () =>{
        inputRef.current.click();
      }

      const handleChange = (event) => {
        const file = event.target.files[0];
        setImage(file);
      };
    return (
        <>
            <div className=" w-[314px] h-[496px]  bg-black border-2 border-[#000000] rounded-[30px] overflow-hidden shadow-lg">
                {/* screen */}
                <div className="bg-black w-full h-[812px]">
                    <form className=' flex flex-col gap-y-4' onSubmit={handleSubmit} action="post">
                        <div className=' w-full flex bg-yellow-500 justify-center p-2'><h1 className=' font-serif text-xl font-bold  text-black'>Advertisement</h1></div>
                        <div className=' flex items-center  w-full h-[300px]  overflow-hidden bg-white-500 '  onClick={handleClick}>
                        {image && <img src={URL.createObjectURL(image)}/>}
                        <input type="file" onChange={handleChange} accept='image/*' ref={inputRef}  className='w-full h-fll object-cover rounded-2xl cursor-pointer' />
                        </div>
                        <div ><input placeholder='Enter your Insitution Name here...' className='border-[1px]  placeholder:text-center py-2 outline-none border-black rounded-2xl w-full ' type="text" onChange={(e)=>setInstitutions(e.target.value)} /></div>
                        <div><button className='py-2 outline-none  bg-yellow-500 border-none rounded-2xl w-full '>Submit</button></div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default InstitutionsAdsPayment