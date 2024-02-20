import { useContext, useState } from 'react'
import 'animate.css'
import axiosInstance from '../../api/axios'
import { StudentContext } from '../../context/StudentsContext'
function StudentNewPassword() {
    const [newpassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const {verifyPhoneNumber} = useContext(StudentContext)
    console.log(verifyPhoneNumber)
    
    
    function regexValidation(newpassword){
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
        if(newpassword.trim() === ''){
            setError('')
        }else if(passwordRegex.test(newpassword)){
            setError('')
        }else{
            setError('Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character (@, $, !, %, *, ?, &).')
        }
      }
      function passwordValidation(){
        regexValidation(newpassword)
      }

    async function submit(e){
        e.preventDefault()
        if(newpassword !== confirmPassword){
            setError('Password does not match')
        }else{
            console.log(verifyPhoneNumber, "contextValue")
            const response = await axiosInstance.patch('/students/newpassword',{newpassword,verifyPhoneNumber},{withCredentials: true})
            console.log(newpassword,confirmPassword)
        }
    }
    return (
        <>
            <div className="flex justify-center items-center h-screen ">
                <div className="bg-white p-8 border-4 border-y-yellow-400-300 rounded-lg shadow-lg max-w-md w-full animate__animated animate__fadeInDown">
                    <h1 className="text-3xl font-bold text-yellow-500 mb-6 text-center">NEW PASSWORD</h1>
                    <form onSubmit={submit} className="space-y-4">
                        <div>
                            <input
                                type="password"
                                id="NewPassword"
                                name="NewPassword"
                                className="w-full border p-2 rounded border-yellow-500"
                                onBlur={passwordValidation}
                                placeholder='Enter your New Password'
                                onChange={(e) => (setNewPassword(e.target.value))}
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                id="ConfirmPassword"
                                name="ConfirmPassword"
                                className="w-full border p-2 rounded border-yellow-500"
                                placeholder='Confirm your New Password'
                                onChange={(e) => (setConfirmPassword(e.target.value))}
                                required
                            />
                        </div>
                        <p className=' text-red-500 text-center '> {error}</p>
                        <div className=' flex justify-center'>
                            <button className ='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded'>Save Password</button>
                        </div>
                    </form>
                    <br />
                </div>
            </div>
        </>
    )
}

export default StudentNewPassword