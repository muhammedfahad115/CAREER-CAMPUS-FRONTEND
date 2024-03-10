import React, { useEffect, useRef, useState } from 'react';
import axiosInstance from '../../api/axios';
import io from 'socket.io-client';
import send from '../../assets/sendbutton.png'
import StudentsShowInstitutions from './StudentsShowInstitutions';



function StudentMessage() {
    const [studentMessage, setStudentMessage] = useState([]);
    const [socket, setSocket] = useState(null);
    const [message, setMessage] = useState('');
    const [addedMessage, setAddedMessage] = useState([])
    const [institutionsEmail, setInstitutionsEmail] = useState('');
    const messageContainerRef = useRef();
    const [showInstitutionsMessage, getShowInstitutionsMessage] = useState([])
    const [showBox, setShowBox] = useState(false)
    const token = localStorage.getItem('jwtToken');

    useEffect(() => {
        const fetchStudent = async () => {
            const response = await axiosInstance.get('/students/getinstitutions');
            setStudentMessage(response.data.findInstitutions);
        }
        fetchStudent()
        const socketInstance = io('http://localhost:3000', { transports: ['websocket'] });

        const getMessageStudents = async () => {
            const getMesssageOfStudents = await axiosInstance.get('/students/getmessagestudents')
            if (getMesssageOfStudents.data.addedMessage) {
                setAddedMessage(getMesssageOfStudents.data.findAddedMessage.addedMessage);

            }
        }
        getMessageStudents()

        socketInstance.on('connect', (message) => {
            // console.log(message);
            setSocket(socketInstance);
            console.log("studentSocketID", socketInstance.id)

        })
        socketInstance.emit('addUser', { token });
        return () => {
            if (socketInstance) {
                socketInstance.disconnect();
            }
        }
    }, [])


    useEffect(() => {
        if (socket !== null) {
            socket.on('messagefromtheserver', (message) => {
                setAddedMessage((msg) => [...msg, message])
                // console.log(addedMessage);
                // console.log(message);
            });
        }
    }, [socket]);

    const showMessageBox = async (email) => {
        // const response = await axiosInstance.get(`institutions/getSavedMessage?student=${email}`);
    }

    function showChatBox(user) {
        return function () {
            showMessageBox(user.email);
            setInstitutionsEmail(user);
            setShowBox(true);
        }
    }


    useEffect(() => {
        messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
        console.log(addedMessage)
        if (addedMessage.length > 0) {
            const saveMessage = async () => {
                const response = await axiosInstance.post('/students/postmessage', { addedMessage })
                console.log(response.data.addedMessage)
            }
            saveMessage()
        }
    }, [addedMessage])

    const sendMessage = (e) => {
        e.preventDefault()
        if (message.trim('')) {
            setAddedMessage((previousMessage) => [...previousMessage, message]);
        }
        console.log(socket)
        setMessage('')
        socket.emit('messagefromtheclient', { message, institutionsEmail, socketId: socket.id });
    }

    return (
        <>
            <div className="container mx-auto h-screen w-screen shadow-lg rounded-lg">
                <div className="px-5 py-5 flex justify-between items-center bg-white border-b-2">
                    <div className=' text-center sm:bg-yellow-500 rounded-md p-2 font-extrabold    '>
                        CAREER&CAMPUS
                    </div>
                    {institutionsEmail.image && (<div className="h-12 w-12 p-2 bg-yellow-500 rounded-full text-white font-semibold flex items-center justify-center">
                        <img src={institutionsEmail.image} className="w-full h-full object-cover rounded-full" />
                    </div>)}
                </div>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col w-[30%] h-[540px] border-r-2 overflow-y-auto">
                        <div className="border-b-2 py-4 px-2">
                            <input
                                type="text"
                                placeholder="search chatting"
                                className="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
                            />
                        </div>
                        {studentMessage.map((user, index) => (
                            <div key={index} onClick={showChatBox(user)} className="flex items-center border-2 rounded-xl  border-yellow-500 p-4 hover:bg-gray-100 cursor-pointer">
                                <img
                                    src={user.image}
                                    className="object-cover h-8 w-8 rounded-full mr-2"
                                    alt={`Profile of ${user.name}`}
                                />
                                <div className="text-xs font-semibold">{user.firstName + ' ' + user.lastName}</div>
                            </div>
                        ))}
                    </div>
                    <div ref={messageContainerRef} className="w-full px-5 flex flex-col justify-between p-2 h-[450px]  overflow-y-auto ">
                        {addedMessage.length > 0 && (
                            <div>
                                <ul>
                                    {addedMessage.map((previousMessage, index) => (
                                        <div key={index}>
                                            {previousMessage.email ? (
                                                <div className='flex justify-start'><p className=' w-[50%] text-white p-2 rounded-br-xl rounded-bl-xl mb-4  bg-green-400 rounded-tr-xl'>{previousMessage.message}</p></div>
                                            ) : (
                                                <div className='flex justify-end'><p className=' w-[50%] text-white p-2 rounded-tl-xl rounded-bl-xl mb-4 bg-blue-400 rounded-tr-xl'>{previousMessage}</p></div>
                                            )}
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {showBox ? (<div className='absolute bottom-0 w-[63%] h-[60px] mb-3 bg-gray-300 rounded-xl'>
                            <form onSubmit={sendMessage} className="h-full flex items-center px-3 justify-center">
                                <input
                                    className="w-full bg-gray-300 outline-none px-3 rounded-xl "
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    type="text"
                                    placeholder="type your message here..."
                                />
                                <button className='px-5 h-[30px] text-lime-500  rounded-md bg-gray-500' type='submit'>
                                    <img src={send} />
                                </button>
                            </form>
                        </div>) : (
                            <div className='flex  flex-col font-serif justify-center h-screen text-xl  items-center'>
                                <h1 className='text-3xl'>Welcome to <span className=' text-yellow-500 font-bold'><span className='text-5xl'>C</span>AREER&<span className='text-5xl'>C</span>AMPUS</span></h1>
                                <p className=' flex  justify-center text-center items-center h-[90px] w-[460px]'>Get ready to connect with students effortessly. Start conversations, share updates, and provide support - all in one place. </p>
                                <ul className=' flex  flex-col justify-center items-center '>
                                    <li>1. intiatie conversations: Feel free to reach  out to students.</li>
                                    <li>2. Timely Responses: Respond promptly during operating hours.</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudentMessage