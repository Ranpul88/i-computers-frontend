import axios from "axios";
import { useEffect, useState} from "react";
import Loader from "../../src/components/loader";
import toast from "react-hot-toast";

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState([])
  const[loaded, setLoaded] = useState(false)

  const token = localStorage.getItem("token")

  useEffect(() => {
    if(!loaded){
      axios.get(import.meta.env.VITE_BACKEND_URL + "/reviews", {
      headers: {
        Authorization: "Bearer " + token
      }
    })
      .then((res) => {
        setReviews(res.data)
        setLoaded(true)
      })
    }
  }, [loaded])

  async function deleteReview(item){
    await axios.delete(import.meta.env.VITE_BACKEND_URL + "/reviews/" + item.productID, {
      headers: {
        Authorization: "Bearer " + token
      },
        data: { email: item.email } 
    })
    .then(()=>{
        toast.success("Review deleted")
        setLoaded(false)
    })
    .catch((err)=>{
        toast.error("Failed to delete review")
        console.error("Error deleting review: ")
        console.error(err)
        setLoaded(false)
    })
    
  }

  return (
    <div className="w-full min-h-screen flex justify-center bg-primary text-secondary p-10 relative">
      <div className="w-full max-w-7xl bg-white rounded-2xl shadow-xl p-6 overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-6 text-accent border-b pb-3">Reviews List</h2>

        {loaded ? <table className="w-full border-collapse text-sm">
          <thead className="bg-accent text-white sticky top-0">
            <tr>
              <th className="py-3 px-4 text-center">Product ID</th>
              <th className="py-3 px-4 text-center">Email</th>
              <th className="py-3 px-4 text-center">Name</th>
              <th className="py-3 px-4 text-center">Stars</th>
              <th className="py-3 px-4 text-center">Message</th>
              <th className="py-3 px-4 text-center">Date</th>
              <th className="py-3 px-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 text-center ">
            {
              reviews.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="py-5 px-4 font-medium text-gray-700 flex flex-row gap-1 items-center justify-center">{item.productID}</td>
                  <td className="py-3 px-4">{item.email}</td>
                  <td className="py-3 px-4">{item.name}</td>
                  <td className="py-3 px-4">{item.stars}</td>
                  <td className="py-3 px-4">{item.message}</td>
                  <td className="py-3 px-4">{item.date}</td>
                  <td className="py-3 px-4">
                    <button onClick={()=>{deleteReview(item)}} className="px-3 py-1 bg-red-600 text-primary rounded-lg hover:bg-red-700 cursor-pointer">Delete
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table> : <Loader />}
      </div>
    </div>
  )
}