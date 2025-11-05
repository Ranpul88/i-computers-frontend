import axios from 'axios'
import { useState } from 'react'
import toast from 'react-hot-toast'

export default function ProdutctDeleteButton(props) {
    const productID = props.productID
    const reload = props.reload

    const [isMessageOpen, setIsMessageOpen] = useState(false)
    const [isDeleting, setIsDeleting] = useState(false)

    async function handelDelete(){
        setIsDeleting(true)

        const token = localStorage.getItem("token")
        axios.delete(import.meta.env.VITE_BACKEND_URL + "/products/" + productID, {
            headers: {
            Authorization: `Bearer ${token}`
            }
        })
            .then(()=>{
            toast.success("Product deleted successfully")
            setIsDeleting(false)
            setIsMessageOpen(false)
            reload()
            })
            .catch((err)=>{
            console.error(err)
            toast.error("Failed to delete product")
            })

    }

  return (
    <>
        <button onClick={()=>{setIsMessageOpen(true)}} className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 trainsition'>
            Delete
        </button>
        {isMessageOpen && <div className='w-[100vw] h-screen fixed top-0 left-0 bg-black/55 flex justify-center items-center'>
            <div className='w-[500px] h-[300px] bg-primary rounded-2xl relative flex flex-col items-center justify-center p-10 shadow-xl'>
                <button onClick={()=>{setIsMessageOpen(false)}} className='w-[35px] h-[35px] bg-red-600 rounded-full text-white text-xl cursor-pointer hover:bg-red-800 absolute right-[-28px] top-[-28px]'>
                    x
                </button>
                <h1 className='text-2xl mb-6 text-center'>Are you sure you want to delete product {productID}?</h1>
                <div className='w-full flex justify-center gap-10'>
                    <button disabled={isDeleting} onClick={handelDelete} className=' bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 trainsition'>
                        Delete
                    </button>
                    <button className='bg-gray-500 text-white px-4 py-2 rounded hover:bg-red-600 trainsition' onClick={()=>{setIsMessageOpen(false)}}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>}
    </>
  )
}