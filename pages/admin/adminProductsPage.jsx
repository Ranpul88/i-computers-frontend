import axios from "axios";
import { useEffect, useState} from "react";
import { BiPlus } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../src/components/loader";
import ProductDeleteButton from "../../src/components/productDeleteButton";

export default function AdminProductsPage() {
  const [products, setProducts] = useState([])
  const[loaded, setLoaded] = useState(false)
  const navigate = useNavigate()

  const token = localStorage.getItem("token")

  useEffect(() => {
    if(!loaded){
      axios.get(import.meta.env.VITE_BACKEND_URL + "/products", {
      headers: {
        Authorization: "Bearer " + token
      }
    })
      .then((res) => {
        setProducts(res.data)
        setLoaded(true)
      })
    }
  }, [loaded])

  return (
    <div className="w-full min-h-screen flex justify-center bg-primary text-secondary p-10 relative">
      <div className="w-full max-w-7xl bg-white rounded-2xl shadow-xl p-6 overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-6 text-accent border-b pb-3">Products List</h2>

        {loaded ? <table className="w-full border-collapse text-sm">
          <thead className="bg-accent text-white sticky top-0">
            <tr>
              <th className="py-3 px-4 text-center">Image</th>
              <th className="py-3 px-4 text-center">Product ID</th>
              <th className="py-3 px-4 text-center">Name</th>
              <th className="py-3 px-4 text-center">Price</th>
              <th className="py-3 px-4 text-center">Labelled Price</th>
              <th className="py-3 px-4 text-center">Category</th>
              <th className="py-3 px-4 text-center">Brand</th>
              <th className="py-3 px-4 text-center">Model</th>
              <th className="py-3 px-4 text-center">Stock</th>
              <th className="py-3 px-4 text-center">Availability</th>
              <th className="py-3 px-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 text-center">
            {
              products.map((item, index) => (
                <tr
                  key={item.productID}
                  className="hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="py-3 px-4">
                    <img src={item.images[0]} className="w-[40px] h-[40px] rounded-md object-cover shadow-sm" />
                  </td>
                  <td className="py-3 px-4 font-medium text-gray-700">{item.productID}</td>
                  <td className="py-3 px-4">{item.name}</td>
                  <td className="py-3 px-4 text-gold font-semibold">Rs. {item.price.toLocaleString()}</td>
                  <td className="py-3 px-4 text-gray-500 line-through">Rs. {item.labelledPrice.toLocaleString()}</td>
                  <td className="py-3 px-4">{item.category}</td>
                  <td className="py-3 px-4">{item.brand}</td>
                  <td className="py-3 px-4">{item.model}</td>
                  <td className="py-3 px-4">{item.stock}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium flex justify-center ${item.isAvailable ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                      {item.isAvailable ? "Available" : "Unavailable"}
                    </span>
                  </td>
                  <td className="py-3 px-4 flex gap-2">
                    {/* <Link to="/admin/update-products" state={item}  className="w[70px] px-3 py-2 rounded-md bg-accent/20 text-accent text-center" >Edit</Link> */}

                    <button className="w[70px] px-3 py-2 rounded-md bg-accent/20 text-accent text-center hover:bg-accent/30" onClick={()=>{
                      navigate("/admin/update-product", {state: item})
                    }}>
                        Edit
                    </button>
                    <ProductDeleteButton productID = {item.productID} reload = {()=>{setLoaded(false)}} />
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table> : <Loader />}
      </div>

      <Link
        to="/admin/add-products"
        className="fixed right-8 bottom-8 w-[60px] h-[60px] flex justify-center items-center text-5xl bg-accent text-white rounded-full shadow-lg hover:bg-gold hover:shadow-xl transition-all duration-300"
      >
        <BiPlus />
      </Link>
    </div>
  )
}
