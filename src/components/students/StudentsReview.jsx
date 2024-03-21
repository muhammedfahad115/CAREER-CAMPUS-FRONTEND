import StudentsReviewCards from './StudentsReviewCards'

function StudentsReview() {
    return (
        <>
            <div className="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center py-5">
                <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
                    <div className="w-full max-w-6xl mx-auto">
                        <div className="text-center max-w-xl mx-auto">
                            <h1 className="text-6xl md:text-7xl font-bold mb-5 text-gray-600">
                                What people are saying.
                                <br />
                            </h1>
                            <h3 className="text-xl mb-5 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                            <div className="text-center mb-10">
                                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
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
                </div>
            </div>
        </>
    )
}

export default StudentsReview