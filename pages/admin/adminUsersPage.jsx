import axios from "axios";
import { useEffect, useState} from "react";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import Loader from "../../src/components/loader";
import { VscVerified } from "react-icons/vsc";

export default function AdminUsersPage() {
  const [users, setUsers] = useState([])
  const[loaded, setLoaded] = useState(false)

  const token = localStorage.getItem("token")

  useEffect(() => {
    if(!loaded){
      axios.get(import.meta.env.VITE_BACKEND_URL + "/users/all", {
      headers: {
        Authorization: "Bearer " + token
      }
    })
      .then((res) => {
        setUsers(res.data)
        setLoaded(true)
      })
    }
  }, [loaded])

  async function handleBlockUser(item){
    await axios.put(import.meta.env.VITE_BACKEND_URL + `/users/toggle-block/${item.email}`, {
      isBlocked: !item.isBlocked
    }, {
      headers: {
        Authorization: "Bearer " + token
      }
    })
    
    setLoaded(false)
  }

  return (
    <div className="w-full min-h-screen flex justify-center bg-primary text-secondary p-10 relative">
      <div className="w-full max-w-7xl bg-white rounded-2xl shadow-xl p-6 overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-6 text-accent border-b pb-3">Products List</h2>

        {loaded ? <table className="w-full border-collapse text-sm">
          <thead className="bg-accent text-white sticky top-0">
            <tr>
              <th className="py-3 px-4 text-center">Image</th>
              <th className="py-3 px-4 text-center">Email</th>
              <th className="py-3 px-4 text-center">First Name</th>
              <th className="py-3 px-4 text-center">Last Name</th>
              <th className="py-3 px-4 text-center">Role</th>
              <th className="py-3 px-4 text-center">Status</th>
              <th className="py-3 px-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 text-center ">
            {
              users.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="py-3 px-4">
                    <img src={item.image} referrerPolicy="no-referrer" className="w-[40px] h-[40px] rounded-full object-cover shadow-sm" />
                  </td>
                  <td className="py-5 px-4 font-medium text-gray-700 flex flex-row gap-1 items-center justify-center">{item.email} { item.isEmailVerified ? <VscVerified className="text-blue-500 text-lg" /> : "" }</td>
                  <td className="py-3 px-4">{item.firstName}</td>
                  <td className="py-3 px-4">{item.lastName}</td>
                  <td className="py-3 px-4">{item.role}</td>
                  <td className="py-3 px-4">{item.isBlocked ? "Blocked" : "Active"}</td>
                  <td className="py-3 px-4">
                    <button onClick={()=>{handleBlockUser(item)}} className="px-3 py-1 bg-accent text-primary rounded-lg hover:bg-accent/90 cursor-pointer">
                      { item.isBlocked ? "Unblock" : "Block" }
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table> : <Loader />}
      </div>

      <Link
        to="/admin/add-product"
        className="fixed right-8 bottom-8 w-[60px] h-[60px] flex justify-center items-center text-5xl bg-accent text-white rounded-full shadow-lg hover:bg-gold hover:shadow-xl transition-all duration-300"
      >
        <BiPlus />
      </Link>
    </div>
  )
}