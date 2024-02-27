import { useEffect, useState } from 'react';
import 'animate.css';
import img from '../../assets/studentshowprofile.jpg'
import axiosInstance from '../../api/axios';
function StudentShowProfile() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [description, setDescription] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [students, setStudents] = useState();
  const [error, setError] = useState('');
  const formData = {
    firstName,
    lastName,
    dob,
    gender,
    description,
    contactNumber,
    email,
  };

  useEffect(() => {
    try {
      const getStudents = async () => {
        const StudentsResponse = await axiosInstance.get('/students/getStudents', { withCredentials: true })
        setStudents(StudentsResponse.data)
      }
      getStudents()
    } catch (error) {
      if (error) {
        setError('Error when fetching Details')
      } else {
        setError('')
      }
    }
  }, []);

  useEffect(() => {
    if (students) {
      setFirstName(students?.findStudents?.firstName || '')
      setLastName(students?.findStudents?.lastName || '')
      setDob(students?.findStudents?.dob || '')
      setGender(students?.findStudents?.gender || '')
      setDescription(students?.findStudents?.description || '')
      setContactNumber(students?.findStudents?.contactNumber || '')
      setEmail(students?.findStudents?.email)
    }
  }, [students]);


  const handleUpdate = async () =>{
  try {
    const editResponse = await axiosInstance.put('/students/editstudents',{formData},{
      withCredentials: true,
    })
    if(editResponse.data.message){
      setError(editResponse.data.message);
    }
  } catch (error) {
    console.log('An error occured',error);
  }
  }

  return (
    <>
      <div className='flex justify-center bg-cover bg-no-repeat items-center h-screen' style={{ backgroundImage: `url(${img})` }}>
        <div className=' bg-white  bg-opacity-40 w-[800px] rounded-xl  justify-evenly h-[600px] backdrop-blur-lg '>
          <div className=" flex justify-center mt-4 text-3xl font-extrabold text-yellow-500 mb-4">
          <div><img className=' w-[150px] h-[150px] rounded-full ' src="https://careercampus.s3.ap-south-1.amazonaws.com/image-1709007782083.jpeg" /></div>
          </div>
          <div className='flex justify-evenly'>
            <div className='bg-white flex justify-center p-2 w-[320px] rounded-2xl h-[380px]'>
              <div className=' flex flex-col  gap-y-16 justify-center'>
                <input className=' outline-none border-b-2 border-black  border-opacity-30' value={firstName} type="text" placeholder='FirstName' onChange={(e) => setFirstName(e.target.value)} />
                <input className=' outline-none border-b-2 border-black border-opacity-30' value={lastName} type="text" placeholder='LastName' onChange={(e) => setLastName(e.target.value)} />
                <input className=' outline-none border-b-2 border-black border-opacity-30' value={dob} type="text" placeholder='Date of Birth' onChange={(e) => setDob(e.target.value)} />
              </div>
            </div>
            <div className='bg-white flex justify-center p-2 w-[320px] rounded-2xl   h-[380px]'>
              <div className=' flex flex-col gap-y-10 justify-center'>
                <select
                  id="gender"
                  className="outline-none border-b-2 border-black border-opacity-30 px-2 py-1"
                  onChange={(e) => setGender(e.target.value)}
                  value={gender}
                >
                  <option hidden value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <textarea
                  id="description"
                  className="outline-none border-b-2 border-black border-opacity-30 px-2 py-1"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter your description"
                ></textarea>
                <input className=' outline-none border-b-2 border-black border-opacity-30' value={contactNumber} onChange={(e) => setContactNumber(e.target.value)}
                  type="number" placeholder='ContactNumber' />
                <input type="email" className=' outline-none border-b-2 border-black border-opacity-30' value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
              </div>
            </div>
          </div>
          <div className='flex justify-center'><p className=' text-red-500 '>{error}</p></div>
          <div className=' flex justify-center mt-2 '><button onClick={handleUpdate} className="relative inline-flex items-center justify-center  mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Update
            </span>
          </button></div>
        </div>
      
      </div>
    </>
  );
}

export default StudentShowProfile;
