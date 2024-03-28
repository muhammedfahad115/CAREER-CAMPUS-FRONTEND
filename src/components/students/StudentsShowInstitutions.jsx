import { useEffect, useState } from 'react';
import axiosInstance from '../../api/axios';
import { Link } from 'react-router-dom';
import prev from '../../assets/previousbutton.png';
import StudentsReview from './StudentsReview';

function StudentsShowInstitutions() {
    const [currentPage, setCurrentPage] = useState(1);
    const [showInstitutions, setshowInstitutions] = useState([]);
    const [balance, setBalance] = useState();
    const [limit, setLimit] = useState(1);
    const [institutionsEmail, setInstitutionsEmail] = useState('');
    const [isSticky, setIsSticky] = useState(false);
    const [review, setReview] = useState(false);
    const [institutionRating, setInstitutionRating] = useState({});

    useEffect(() => {
        const balanceStudents = async () => {
            const setPages = await axiosInstance.get(`/students/getbalanceinstitutions?currentPage=${currentPage}&limit=${limit}`);
            setBalance(setPages.data.findBalanceLength);
        };
        balanceStudents();
    }, [currentPage, limit]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPercentage = (window.scrollY / window.innerHeight) * 100;
            setIsSticky(scrollPercentage >= 20);
        };

        window.addEventListener('scroll', handleScroll);

    }, [])
    useEffect(() => {
        const getInstitutions = async () => {
            try {
                const response = await axiosInstance.get(`/students/getshowinstitutions?currentPage=${currentPage}&limit=${limit}`);
                const joinedDataArray = response.data.findInstitutions.reduce((acc, institution) => {
                    return [...acc, ...institution.joinedData]; // Accumulate all joinedData objects into an array
                }, []);
                const initialRatings = joinedDataArray.reduce((acc, joinedData) => {
                    acc[joinedData.institutionEmail] = { rating: joinedData.rating === "true" }; // Convert string "true" to boolean true
                    return acc;
                }, {});
                setInstitutionRating(initialRatings);
                setshowInstitutions(response.data.findInstitutions);
            } catch (error) {
                console.error("Error fetching institutions:", error);
            }
        };
        getInstitutions();
    }, [currentPage, limit]);

    const previousButton = () => {
        setCurrentPage(currentPage - 1);
    };

    const nextButton = () => {
        setCurrentPage(currentPage + 1);
    };

    const removeComment = () => {
        setReview(false)
    }

    const showReview = (email) => {
        setInstitutionsEmail(email)
        setReview(true);
    }

    const handleRating = async (email) => {
        // Check if institutionRating[email] exists
        if (institutionRating && institutionRating[email]) {
            const updatedRating = !institutionRating[email].rating;
            setInstitutionRating(prevRatings => ({
                ...prevRatings,
                [email]: { rating: updatedRating }
            }));
            setInstitutionsEmail(email);
            try {
                console.log('Updated institution rating:', institutionRating);
                const response = await axiosInstance.post('/students/rating', { rating: updatedRating, institutionsEmail: email });
            } catch (error) {
                console.error('Error submitting rating:', error);
            }
        } else {
            // If the email doesn't exist, add a new entry to institutionRating
            const updatedRating = true; // Set the initial rating
            setInstitutionRating(prevRatings => ({
                ...prevRatings,
                [email]: { rating: updatedRating }
            }));
            setInstitutionsEmail(email);
            try {
                console.log('New institution rating added:', institutionRating);
                const response = await axiosInstance.post('/students/rating', { rating: updatedRating, institutionsEmail: email });
            } catch (error) {
                console.error('Error submitting rating:', error);
            }
        }
    }
    

    // useEffect(()=>{
    //     const postRating = async () =>{
    //         try {
    //             console.log('institution rating ', institutionRating);
    //             const response = await axiosInstance.post('/students/rating',{rating: institutionRating.rating, institutionsEmail})
    //         } catch (error) {
    //             console.error('Error Submitting rating:', error);
    //         }
    //     }
    //     postRating();
    // },[institutionsEmail, institutionRating])


    return (
        <>
            <div className={` flex justify-center h-screen items-center sm:gap-y-5 flex-col `}>
                <div className={`${isSticky ? '-z-40' : 'z-0'} flex flex-col justify-center mt-[120%] sm:mt-0 bg-none sm:bg-none rounded-md h-[500px] flex-wrap w-1/2 p-4 gap-x-10 gap-y-5 sm:gap-y-0 sm:fixed`}>

                    {showInstitutions.map((institutions, index) => (
                        <div key={index} className='relative flex rounded-xl shadow-lg shadow-gray-300 md:max-w-3xl mx-auto border border-white'>
                            <div className='w-full md:w-1/3 bg-gray-100 rounded-md grid place-items-center'>
                                <img className='rounded-tl-xl rounded-bl-xl w-full h-full' src={institutions.image} alt={`Institution ${index + 1}`} />
                            </div>
                            <div className='w-full md:w-2/3 rounded-tr-xl rounded-br-xl bg-gray-700 flex flex-col space-y-2 p-3'>
                                <div className='flex justify-between text-white item-center'>
                                    <p className='font-medium hidden md:block'>Vacations</p>
                                    <div className='flex items-center'>
                                        <svg onClick={() => handleRating(institutions.email)} xmlns="http://www.w3.org/2000/svg" className={` ${institutionRating[institutions.email]?.rating ? ' text-yellow-400' : 'text-white'}  h-5 w-5 cursor-pointer`} viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <p className='font-bold text-sm ml-1'>
                                            4.96
                                            <span className='font-normal'>(76 reviews)</span>
                                        </p>
                                    </div>

                                    <div onClick={() => showReview(institutions.firstName + ' ' + institutions.lastName)} className='bg-gray-200 px-3 py-1 cursor-pointer rounded-full text-xs font-medium text-gray-800 hidden md:block'>
                                        Comments
                                    </div>
                                </div>
                                <h3 className='font-black text-white md:text-1xl text-xl'>Name: {institutions.firstName + ' ' + institutions.lastName}</h3>
                                <p className='text-white'>Started Year: {institutions.dob}</p>
                                <p className='text-white'>G-mail: {institutions.email}</p>
                                <p className='text-white'>ContactNumber: {institutions.contactNumber}</p>
                                <Link to={'/students/message'}><button className='bg-yellow-500 flex w-1/5 justify-center rounded-xl p-1 font-mono'>Message</button></Link>
                            </div>
                        </div>
                    ))}
                    <div className='flex justify-center items-end'>
                        {currentPage < balance && <button onClick={nextButton} className='flex justify-center mt-4 font-bold items-center w-28 h-5 gap-x-2'>Next<img className='w-[30%] -rotate-180 mr-1' src={prev} /></button>}
                    </div>
                    <div className='flex justify-center items-end'>
                        {currentPage > 1 && <button onClick={previousButton} className='flex mt-3 justify-center font-bold items-center w-28 h-5'><img className='w-[30%] mr-1' src={prev} />Previous</button>}
                    </div>
                </div>
            </div>
            <div>
                {review && (<div className='w-full h-1/2'><StudentsReview institutionsEmail={institutionsEmail} onClose={removeComment} /></div>)}
            </div>
        </>
    );
}

export default StudentsShowInstitutions;
