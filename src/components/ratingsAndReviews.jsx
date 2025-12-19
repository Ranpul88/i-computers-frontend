import axios from 'axios'
import { useEffect, useState } from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'
import toast from 'react-hot-toast'
import Loader from './loader'

export default function RatingsAndReviews(props) {
    const { productName, productID, ratings } = props

    const [reviews, setReviews] = useState()
    const [loading, setLoading] = useState(true)
    const [loggedIn, setLoggedIn] = useState(false)
    const [reviewFormVisible, setReviewFormVisible] = useState(false)
    const [rating, setRating] = useState(0)
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    const [hover, setHover] = useState(0)

    const token = localStorage.getItem("token")

    useEffect(()=>{
        axios.get(import.meta.env.VITE_BACKEND_URL + "/reviews/" + productID)
            .then((response)=>{
                setReviews(response.data)
                
                if(token!=null){
                    setLoggedIn(true)
                }

                setLoading(false)

            })
            .catch((error)=>{
                toast.error("Could not load reviews.")
                console.log(error)
                setLoading(false)
            })
    }, [])

    async function submitReview(){
        if(rating == 0){
            toast.error("Please select a rating.")
            return
        }
        try {
            await axios.post(import.meta.env.VITE_BACKEND_URL + "/reviews/" + productID, {
            stars: rating,
            name: name,
            message: message
        })
            await axios.put(import.meta.env.VITE_BACKEND_URL + "/products/ratings/" + productID,{stars: rating})
        }catch(error){
            toast.error("Could not submit review. Please check whether you have purchased this product.")
            console.log("Error submitting review: ")
            console.log(error)
            return
        }
        
    }
    console.log(hover)

  return (
    <div className='w-full bg-gray-200 p-6 rounded-xl '>
        <h1 className='w-full lg:text-[20px] font-bold'>Rating and reviews of {productName}</h1>
        <div className='w-full flex flex-col gap-2'>
            <div className='w-full flex flex-row p-2'>
                <div className='w-[50%] flex justify-center flex-col'>
                    <div className='w-full flex justify-center text-2xl'>
                        {ratings.stars >= 1 ? <FaStar className='text-gold' /> : <FaRegStar className='text-gold' />}
                        {ratings.stars >= 2 ? <FaStar className='text-gold' /> : <FaRegStar className='text-gold' />}
                        {ratings.stars >= 3 ? <FaStar className='text-gold' /> : <FaRegStar className='text-gold' />}
                        {ratings.stars >= 4 ? <FaStar className='text-gold' /> : <FaRegStar className='text-gold' />}
                        {ratings.stars >= 5 ? <FaStar className='text-gold' /> : <FaRegStar className='text-gold' />}
                    </div>
                    <h1 className='w-full text-center text-[40px] mt-1'>{ratings.stars}/5</h1>
                    <h1 className='w-full text-center text-[20px] m-1'>{ratings.noOfRatings} Ratings</h1>
                </div>
                <div className='w-[50%] flex flex-col'>
                    <div className='w-full flex items-center flex-row text-lg gap-1 mt-2'>
                        <FaStar className='text-gold' /><FaStar className='text-gold' /><FaStar className='text-gold' /><FaStar className='text-gold' /><FaStar className='text-gold' /><h1 className='ml-4'>{ratings.fiveStar}</h1>
                    </div>
                    <div className='w-full flex items-center flex-row text-lg gap-1 mt-2'>
                        <FaStar className='text-gold' /><FaStar className='text-gold' /><FaStar className='text-gold' /><FaStar className='text-gold' /><FaRegStar className='text-gold' /><h1 className='ml-4'>{ratings.fourStar}</h1>
                    </div>
                    <div className='w-full flex items-center flex-row text-lg gap-1 mt-2'>
                        <FaStar className='text-gold' /><FaStar className='text-gold' /><FaStar className='text-gold' /><FaRegStar className='text-gold' /><FaRegStar className='text-gold' /><h1 className='ml-4'>{ratings.threeStar}</h1>
                    </div>
                    <div className='w-full flex items-center flex-row text-lg gap-1 mt-2'>
                        <FaStar className='text-gold' /><FaStar className='text-gold' /><FaRegStar className='text-gold' /><FaRegStar className='text-gold' /><FaRegStar className='text-gold' /><h1 className='ml-4'>{ratings.twoStar}</h1>
                    </div>
                    <div className='w-full flex items-center flex-row text-lg gap-1 mt-2'>
                        <FaStar className='text-gold' /><FaRegStar className='text-gold' /><FaRegStar className='text-gold' /><FaRegStar className='text-gold' /><FaRegStar className='text-gold' /><h1 className='ml-4'>{ratings.oneStar}</h1>
                    </div>     
                </div>
            </div>
            {loading ? <Loader /> :<div className='w-full'>
                <h1 className='text-[30px]'>Reviews</h1>
                    {
                        reviews.length == 0 ? <h1 className='text-lg mt-4'>No Reviews Yet.</h1> :
                        (reviews.map((item, index)=>{
                            return (
                                <div key={index} className='w-full flex flex-col border-1 rounded-2xl p-4 gap-1 my-4'>
                                    <div className='w-full flex items-center '>
                                        <h1 className='text-xl font-semibold mr-2'>{item.name}</h1>
                                        {item.stars >= 1 ? <FaStar className='text-gold' /> : <FaRegStar className='text-gold' />}
                                        {item.stars >= 2 ? <FaStar className='text-gold' /> : <FaRegStar className='text-gold' />}
                                        {item.stars >= 3 ? <FaStar className='text-gold' /> : <FaRegStar className='text-gold' />}
                                        {item.stars >= 4 ? <FaStar className='text-gold' /> : <FaRegStar className='text-gold' />}
                                        {item.stars >= 5 ? <FaStar className='text-gold' /> : <FaRegStar className='text-gold' />}
                                    </div>
                                    <h1 className='w-full text-lg'>{item.message}</h1>
                                </div>
                            )
                        }))
                    }
                    { loggedIn && <button onClick={()=>{setReviewFormVisible(true)}} className='p-2 bg-accent text-white rounded-md cursor-pointer hover:bg-accent/90'>Submit Review</button>}
            </div>}
        </div>
        { reviewFormVisible && <div className='w-full h-full fixed top-0 right-0 bg-black/60 flex items-center justify-center'>
            <div className='w-[400px] h-[450px] bg-primary rounded-2xl p-6 flex flex-col '>
                <h1 className='text-2xl font-semibold'>Submit Review</h1>
                <p className='text-red-600 text-sm my-2'>You can submit a review only if you have purchased this product.</p>
                <div className='w-full h-full p-2 gap-4 flex flex-col justify-center'>
                    
                    <div className='w-full flex flex-row text-2xl gap-1 mx-1'>
                        {rating >= 1 || hover >= 1 ? <FaStar onClick={()=>{setRating(1)}} onMouseEnter={()=>{setHover(1)}} onMouseLeave={() => setHover(0)} className='cursor-pointer text-gold' /> : <FaRegStar onClick={()=>{setRating(1)}} onMouseEnter={()=>{setHover(1)}} className='cursor-pointer text-gold' />}
                        {rating >= 2 || hover >= 2 ? <FaStar onClick={()=>{setRating(2)}} onMouseEnter={()=>{setHover(2)}} onMouseLeave={() => setHover(0)} className='cursor-pointer text-gold' /> : <FaRegStar onClick={()=>{setRating(2)}} onMouseEnter={()=>{setHover(2)}} className='cursor-pointer text-gold' />}
                        {rating >= 3 || hover >= 3 ? <FaStar onClick={()=>{setRating(3)}} onMouseEnter={()=>{setHover(3)}} onMouseLeave={() => setHover(0)} className='cursor-pointer text-gold' /> : <FaRegStar onClick={()=>{setRating(3)}} onMouseEnter={()=>{setHover(3)}} className='cursor-pointer text-gold' />}
                        {rating >= 4 || hover >= 4 ? <FaStar onClick={()=>{setRating(4)}} onMouseEnter={()=>{setHover(4)}} onMouseLeave={() => setHover(0)} className='cursor-pointer text-gold' /> : <FaRegStar onClick={()=>{setRating(4)}} onMouseEnter={()=>{setHover(4)}} className='cursor-pointer text-gold' />}
                        {rating >= 5 || hover >= 5 ? <FaStar onClick={()=>{setRating(5)}} onMouseEnter={()=>{setHover(5)}} onMouseLeave={() => setHover(0)} className='cursor-pointer text-gold' /> : <FaRegStar onClick={()=>{setRating(5)}} onMouseEnter={()=>{setHover(5)}} className='cursor-pointer text-gold' />}
                    </div>
                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='name(optional)' className='w-full border border-accent p-2 rounded-2xl' />
                <textarea type="text" value={message} onChange={(e)=>{setMessage(e.target.value)}} placeholder='Enter your review here...(optional)' className='w-full h-[100px] border border-accent p-2 rounded-2xl' />
                <div className='w-full flex justify-center gap-4'>
                    <button onClick={()=>{
                        setRating(0)
                        setHover(0)
                        setName("")
                        setMessage("")
                        setReviewFormVisible(false)   
                    }} 
                        
                        className="w-[40%] text-accent font-bold rounded-xl flex justify-center  items-center hover:bg-red-700 hover:text-white border-[2px] cursor-pointer">Cancel</button>
                    <button onClick={submitReview} className="w-[40%] h-[40px] bg-accent text-white font-bold rounded-xl hover:bg-transparent hover:text-accent border border-accent cursor-pointer">Submit Review</button>
                </div>
                </div>
                
            </div>
        </div>}
    </div>
  )
}
