import { useEffect, useRef, useState } from 'react'
import axiosInstance from '../../api/axios';
import useRazorpay from 'react-razorpay';

function InstitutionsAdsPayment() {
    const [image, setImage] = useState('');
    const [institutions, setInstitutions] = useState('');
    const [error, setError] = useState('');
    const [orderId, setOrderId] = useState('');
    const [amount, setAmount] = useState(null);
    const formData = new FormData()
    const [Razorpay] = useRazorpay();
    const inputRef = useRef(null);

    useEffect(()=>{
      const getOrderId = async () =>{
        try {
          if(amount === null || amount === undefined) return;
          const response = await axiosInstance.post('/institutions/payment',{amount});
          setOrderId(response.data.orderId)
        } catch (error) {
          console.log('An Error occured when getting orderid',error);
        }
      }
      getOrderId();
    },[amount])

    const handlePayment = async () =>{
      const options = {
        key: 'rzp_test_xFM7xDL30mXGB2',
        amount: amount,
        currency: 'INR',
        order_id: orderId,
        handler: function (response) {
          console.log('Payment successfull',  response.orderId);
        },
      }
      const razorPayInstance = new Razorpay(options)
      razorPayInstance.open();
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        setAmount(10000);
        // Check if an image file is selected
        if (!image || !institutions) {
          return;
        }

        formData.append('image', image);
        formData.append('institutions', institutions);

        try {
          // Make the API request using axios
          // const response = await axiosInstance.post('/institutions/addedimage', formData, {
          //   withCredentials: true,
          //   headers: {
          //     'Content-Type': 'multipart/form-data',
          //   },
          // });
    
          // Handle the response as needed
          // console.log(response.data);
          handlePayment();
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
            <div className=" w-[414px] h-[496px]  bg-white border-2 border-[#000000] rounded-[30px] overflow-hidden shadow-lg">
                {/* screen */}
                <div className="bg-white px-2 py-2 w-full h-[812px]">
                    <form className=' flex flex-col gap-y-4' onSubmit={handleSubmit} action="post">
                        <div className=' w-full flex rounded-tr-2xl rounded-tl-2xl bg-gray-400 justify-center p-2'><h1 className=' font-serif text-xl font-bold  text-black'>Advertisement</h1></div>
                        <div className=' flex items-center  w-full h-[300px]  cursor-pointer overflow-hidden bg-white-500 '  onClick={handleClick}>
                        {image ? (<img   src={URL.createObjectURL(image)}/>) : (<p className=' bg-red-500 w-full'> Click here Anywhere</p>)}
                        <input type="file" name='image' onChange={handleChange} accept='image/*' ref={inputRef}  className='w-full h-fll object-cover  opacity-0  rounded-2xl cursor-pointer' />
                        </div>
                        <div ><input placeholder='Enter your Insitution Name here...' className='border-[1px]  placeholder:text-center py-2 px-5 outline-none border-black rounded-2xl w-full ' type="text" onChange={(e)=>setInstitutions(e.target.value)} /></div>
                        <div><button className='py-2 outline-none  bg-yellow-500 border-none rounded-2xl w-full '>Submit</button></div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default InstitutionsAdsPayment