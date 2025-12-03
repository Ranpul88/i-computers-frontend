// import axios from "axios";
// import { useEffect, useState} from "react";
// import { BiPlus } from "react-icons/bi";
// import { Link } from "react-router-dom";
// import Loader from "../../src/components/loader";

// export default function AdminUsersPage() {
//   const [users, setUsers] = useState([])
//   const[loaded, setLoaded] = useState(false)

//   const token = localStorage.getItem("token")

//   useEffect(() => {
//     if(!loaded){
//       axios.get(import.meta.env.VITE_BACKEND_URL + "/users/all", {
//       headers: {
//         Authorization: "Bearer " + token
//       }
//     })
//       .then((res) => {
//         setUsers(res.data)
//         setLoaded(true)
//       })
//     }
//   }, [loaded])

//   return (
//     <div className="w-full min-h-screen flex justify-center bg-primary text-secondary p-10 relative">
//       <div className="w-full max-w-7xl bg-white rounded-2xl shadow-xl p-6 overflow-x-auto">
//         <h2 className="text-2xl font-semibold mb-6 text-accent border-b pb-3">Products List</h2>

//         {loaded ? <table className="w-full border-collapse text-sm">
//           <thead className="bg-accent text-white sticky top-0">
//             <tr>
//               <th className="py-3 px-4 text-center">Image</th>
//               <th className="py-3 px-4 text-center">Email</th>
//               <th className="py-3 px-4 text-center">First Name</th>
//               <th className="py-3 px-4 text-center">Last Name</th>
//               <th className="py-3 px-4 text-center">Role</th>
//               <th className="py-3 px-4 text-center">Status</th>
//               <th className="py-3 px-4 text-center">Action</th>
//             </tr>
//           </thead>

//           <tbody className="divide-y divide-gray-200 text-center">
//             {
//               users.map((item, index) => (
//                 <tr
//                   key={item.productID}
//                   className="hover:bg-gray-50 transition-colors duration-200"
//                 >
//                   <td className="py-3 px-4">
//                     <img src={item.image} className="w-[40px] h-[40px] rounded-md object-cover shadow-sm" />
//                   </td>
//                   <td className="py-3 px-4 font-medium text-gray-700">{item.email}</td>
//                   <td className="py-3 px-4">{item.firstName}</td>
//                   <td className="py-3 px-4">{item.lastName}</td>
//                   <td className="py-3 px-4">{item.role}</td>
//                   <td className="py-3 px-4"></td>
//                   <td className="py-3 px-4"></td>
//                 </tr>
//               ))
//             }
//           </tbody>
//         </table> : <Loader />}
//       </div>

//       <Link
//         to="/admin/add-product"
//         className="fixed right-8 bottom-8 w-[60px] h-[60px] flex justify-center items-center text-5xl bg-accent text-white rounded-full shadow-lg hover:bg-gold hover:shadow-xl transition-all duration-300"
//       >
//         <BiPlus />
//       </Link>
//     </div>
//   )
// }