import axios from 'axios'
import { useEffect, useState } from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'
// import Loader from './loader'
// import toast from 'react-hot-toast'
// import { useNavigate } from 'react-router-dom'

export default function RatingsAndReviews(props) {

    const { productName, productID, ratings } = props

    

  return (
    <div className='w-ful bg-gray-200 p-6 rounded-xl'>
        <h1 className='w-full lg:text-[20px] font-bold'>Rating and reviews of {productName}</h1>
        <div className='w-full flex flex-col gap-2'>
            <div className='w-full flex flex-row p-2'>
                <div className='w-[50%] flex justify-center flex-col'>
                <h1 className='w-full text-center text-[40px]'>{ratings.stars}/5</h1>
                <h1 className='w-full text-center text-[20px] my-2'>{ratings.noOfRatings} Ratings</h1>
            </div>
            <div className='w-[50%] flex flex-col'>
                <div className='w-full flex items-center flex-row text-lg gap-1 mt-2'>
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><h1 className='ml-4'>{ratings.fiveStar}</h1>
                </div>
                <div className='w-full flex items-center flex-row text-lg gap-1 mt-2'>
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /><h1 className='ml-4'>{ratings.fourStar}</h1>
                </div>
                <div className='w-full flex items-center flex-row text-lg gap-1 mt-2'>
                    <FaStar /><FaStar /><FaStar /><FaRegStar /><FaRegStar /><h1 className='ml-4'>{ratings.threeStar}</h1>
                </div>
                <div className='w-full flex items-center flex-row text-lg gap-1 mt-2'>
                    <FaStar /><FaStar /><FaRegStar /><FaRegStar /><FaRegStar /><h1 className='ml-4'>{ratings.twoStar}</h1>
                </div>
                <div className='w-full flex items-center flex-row text-lg gap-1 mt-2'>
                    <FaStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><h1 className='ml-4'>{ratings.oneStar}</h1>
                </div>
            </div>
            </div>
            <>
                {/* {status == "loading" && <Loader />}

                {status == "success" && <div className='w-full'>
                    <h1 className='text-[30px]'>Reviews</h1>
                        {
                            reviews.map((item, index)=>{
                                return (
                                    <div key={index} className='w-full flex flex-col gap-2 mt-4'>
                                        starts here
                                        <h1>{item.name}</h1>
                                        <h1>{item.message}</h1>
                                    </div>
                                )
                            })
                        }
                </div>} */}
            </>
        </div>
    </div>
  )
}
