import React, { useRef, useState } from 'react';
import defaultProfile from '../../assets/defaultprofile.webp'
import axiosInstance from '../../api/axios';
function StudentProfile() {
    // State variables for each input field
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [description, setDescription] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [email, setEmail] = useState('')
    const [image, setImage] = useState('');
    const [error, setError] = useState('');
    const [editButton, setEditButton] = useState(false)
    const [submit, setSubmit] = useState(true);
    const inputRef = useRef(null);
    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Access individual state variables for form data
        const formData = new FormData();
        formData.append('firstName',firstName);
        formData.append('lastName',lastName);
        formData.append('dob',dob);
        formData.append('gender',gender);
        formData.append('description',description);
        formData.append('contactNumber',contactNumber);
        formData.append('email',email);
        formData.append('image',image);
        try {
            const response = await axiosInstance.post('/students/addprofile', formData,{
            withCredentials: true,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
            })
            // Add your logic for form submission here
            console.log('Form Submitted:', formData);
            if (response.data.message) {
                setError(response.data.message);
            } else {
                setError('');
            }
        } catch (error) {
            if (error.response && error.response.data.error) {
                setError(error.response.data.error);
                setEditButton(true);
                setSubmit(false)
                console.log(error.response.data.error);
            } else {
                setError('');
            }
        }
    };

    const handleClick = () => {
        inputRef.current.click();
    }

    const handleChange = (event) => {
        const file = event.target.files[0];
        setImage(file);
    }
    return (
        <>
            <form onSubmit={handleSubmit} action="post">
                <div className="h-screen flex justify-center items-center ">
                    <div className="max-w-4xl w-full bg-yellow-500  p-6   rounded-md shadow-2xl">
                        <div className=' flex justify-center text-3xl mb-3  font-bold'><h1>Profile</h1>
                        </div>
                        <div className=' flex  justify-center mb-10'>
                            <div className=' flex items-center  w-[100px] h-[100px] rounded-full overflow-hidden bg-gray-500 ' onClick={handleClick}>
                                {image ? (<img src={URL.createObjectURL(image)} />) : (<img src={defaultProfile} />)}
                                <input type="file" accept='image/*' onChange={handleChange} ref={inputRef} className='w-full h-fll object-cover rounded-2xl cursor-pointer' />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row">
                            {/* First Div */}
                            <div className="md:w-1/2 pr-4 mb-4 md:mb-0">
                                {/* First Name */}
                                <div className="mb-4">
                                    <label className="block text-black text-sm font-bold mb-2" htmlFor="firstName">
                                        First Name
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-black"
                                        type="text"
                                        id="firstName"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        placeholder='Enter your FirstName'
                                        required
                                    />
                                </div>

                                {/* Last Name */}
                                <div className="mb-4">
                                    <label className="block text-black text-sm font-bold mb-2" htmlFor="lastName">
                                        Last Name
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-black"
                                        type="text"
                                        id="lastName"
                                        value={lastName}
                                        placeholder='Enter your LastName'
                                        onChange={(e) => setLastName(e.target.value)}
                                        required
                                    />
                                </div>

                                {/* Date of Birth */}
                                <div className="mb-4">
                                    <label className="block text-black text-sm font-bold mb-2" htmlFor="dob">
                                        Date of Birth
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-black"
                                        type="date"
                                        id="dob"
                                        value={dob}
                                        onChange={(e) => setDob(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Second Div */}
                            <div className="md:w-1/2">
                                {/* Gender */}
                                <div className="mb-4">
                                    <label className="block text-black text-sm font-bold mb-2" htmlFor="gender">
                                        Gender
                                    </label>
                                    <select
                                        className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-black"
                                        id="gender"
                                        value={gender}
                                        onChange={(e) => setGender(e.target.value)}
                                        required
                                    >
                                        <option value="" disabled hidden>
                                            Select Gender
                                        </option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                {/* Description */}
                                <div className="mb-4">
                                    <label className="block text-black text-sm font-bold mb-2" htmlFor="description">
                                        Description
                                    </label>
                                    <textarea
                                        className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-black"
                                        id="description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        placeholder='Tell us something about you'
                                        rows="3"
                                    />
                                </div>
                                {/* ContactNumber */}
                                <div className="mb-4">
                                    <label className="block text-black text-sm font-bold mb-2" htmlFor='contactNumber'>
                                        Contact Number
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-black"
                                        id="contactNumber"
                                        value={contactNumber}
                                        placeholder='Enter your ContactNumber'
                                        onChange={(e) => setContactNumber(e.target.value)}
                                    />
                                </div>
                                {/* {email} */}
                                <div className="mb-4">
                                    <label className="block text-black text-sm font-bold mb-2" htmlFor='email'>
                                        Email
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-black"
                                        id="email"
                                        value={email}
                                        placeholder='Enter your Email'
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className='flex justify-center'>
                            <p className={error.includes('Profile added successfully') ? ('text-blue-500 text-xl font-semibold') : ('text-red-500 font-semibold  text-xl')}>{error}</p>
                        </div>
                        <div className="mt-4 flex gap-x-3  justify-center">
                            <br />
                            <br />
                           {submit &&  <button
                                type="submit"
                                className=" bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                            >
                                Submit
                            </button>}
                            {editButton && <button type='button' className=' bg-blue-600 px-4 py-2 text-black rounded-md hover:bg-blue-400 focus:outline-none focus:shadow-outline'>
                                Edit
                            </button>}
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default StudentProfile;
