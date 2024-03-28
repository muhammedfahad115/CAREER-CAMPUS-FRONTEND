import { useState } from 'react'
import StudentsReviewCards from './StudentsReviewCards'
import axiosInstance from '../../api/axios';
import commentButton from '../../assets/commentbutton.png'
import downButton from '../../assets/downbutton.png'
import { toast } from 'react-toastify';

function StudentsReview({ institutionsEmail, onClose }) {

    const [comments, setComments] = useState('');
    const [options, setOptions] = useState(null)
    const [showComments, setShowComments] = useState([]);
    const handleClose = () => {
        onClose()
    }

    const selectOptions = (e) => {
        setOptions(e.target.value);
    }

    const handleComment = async (e) => {
        e.preventDefault();
        if(options !== null){
            try {
                const response = await axiosInstance.post('/students/comments', { comments, options });
                if(response.status == 200){
                    toast.success('Comment Added')
                    setShowComments(response.data.comment);
                }
            } catch (error) {
                console.log(error, 'error when submitting a comment');
            }
        }else{
            toast.error('Please click any options')
        }
    }

    return (
        <>
            <div className="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center py-5">
                <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800 relative">
                    <button
                        className="absolute top-5 right-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:bg-gray-200 rounded-full p-1 z-10"
                        onClick={handleClose}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                    <div className="w-full max-w-6xl mx-auto">
                        <div className="text-center max-w-xl mx-auto">
                            <h1 className="text-6xl md:text-7xl font-bold mb-5 text-gray-600">
                                What people are saying about.
                                <br />
                            </h1>
                            <h3 className="text-2xl mb-5 font-light">{institutionsEmail}.</h3>
                            <div className="text-center mb-10">
                                <span className="inline-block w-1 h-1  rounded-full bg-indigo-500 ml-1"></span>
                                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                            </div>
                        </div>
                        <div className="-mx-3 md:flex items-start">
                            <div className="px-3 md:w-1/3">
                                <StudentsReviewCards
                                    name="Kenzie Edgar"
                                    image="https://i.pravatar.cc/100?img=1"
                                    quote='"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti.'
                                />
                                <StudentsReviewCards
                                    name="Stevie Tifft"
                                    image="https://i.pravatar.cc/100?img=2"
                                    quote='"Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Dolore quod necessitatibus, labore sapiente, est, dignissimos ullam error ipsam sint quam tempora vel.'
                                />
                            </div>
                            <div className="px-3 md:w-1/3">
                                <StudentsReviewCards
                                    name="Tommie Ewart"
                                    image="https://i.pravatar.cc/100?img=3"
                                    quote='"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, obcaecati ullam excepturi dicta error deleniti sequi.'
                                />
                                <StudentsReviewCards
                                    name="Charlie Howse"
                                    image="https://i.pravatar.cc/100?img=4"
                                    quote='"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore voluptatum nostrum atque, corrupti, vitae esse id accusamus dignissimos neque reprehenderit natus, hic sequi itaque dicta nisi voluptatem! Culpa, iusto.'
                                />
                            </div>
                            <div className="px-3 md:w-1/3">
                                <StudentsReviewCards
                                    name="Nevada Herbertson"
                                    image="https://i.pravatar.cc/100?img=5"
                                    quote='"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptatem porro obcaecati dicta, quibusdam sunt ipsum, laboriosam nostrum facere exercitationem pariatur deserunt tempora molestiae assumenda nesciunt alias eius? Illo, autem!'
                                />
                                <StudentsReviewCards
                                    name="Kris Stanton"
                                    image="https://i.pravatar.cc/100?img=6"
                                    quote='"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto, explicabo, cupiditate quas totam!'
                                />
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleComment} className="h-full  flex items-center bg-gray-300 sm:mx-60 mx-auto rounded-xl  px-5 justify-center">
                        <input
                            className="w-full bg-gray-300 outline-none px-3 py-4 rounded-xl "
                            value={comments}
                            onChange={(e) => setComments(e.target.value)}
                            type="text"
                            placeholder="Add your Comment here..."

                        />
                        <button className='px-5 h-[30px] text-lime-500  rounded-md bg-gray-500' type='submit'>
                            <img src={commentButton} />
                        </button>
                        <select onChange={selectOptions} className='w-[20px] rounded-full ml-2'>
                            <option hidden value=''></option>
                            <option className='text-sm text-white font-bold bg-yellow-500 p-[1px] rounded-md' value='anonymous'>Anonymous</option>
                            <option className='text-sm text-white font-bold bg-yellow-500 p-[1px] rounded-md' value='non-anonymous'>Non-anonymous</option>
                        </select>
                    </form>
                </div>
            </div>
        </>
    )
}

export default StudentsReview