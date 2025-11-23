import axios from "axios";
import { useEffect, useState} from "react";
import Loader from "../../src/components/loader";
import ViewOrderInfo from "../../src/components/viewOrderInfo";

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState([])
  const[loaded, setLoaded] = useState(false)

  const token = localStorage.getItem("token")

  useEffect(() => {
    if(!loaded){
      axios.get(import.meta.env.VITE_BACKEND_URL + "/orders", {
      headers: {
        Authorization: "Bearer " + token
      }
    })
      .then((res) => {
        console.log(res.data)
        setOrders(res.data)
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
              <th className="py-3 px-4 text-center">OrderID</th>
              <th className="py-3 px-4 text-center">Customer Email</th>
              <th className="py-3 px-4 text-center">Customer Name</th>
              <th className="py-3 px-4 text-center">Date</th>
              <th className="py-3 px-4 text-center">Status</th>
              <th className="py-3 px-4 text-center">Total Amount</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 text-center">
            {
              orders.map((order, index) => (
                <tr
                  key={order.orderID}
                  className="hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="py-3 px-4 font-medium text-gray-700">{order.orderID}</td>
                  <td className="py-3 px-4">{order.email}</td>
                  <td className="py-3 px-4">{order.name}</td>
                  <td className="py-3 px-4">{new Date(order.date).toLocaleDateString()}</td>
                  <td className="py-3 px-4">{order.status}</td>
                  <td className="py-3 px-4 text-gold font-semibold">Rs. {order.total.toLocaleString()}</td>
                  <td className="py-3 px-4 flex justify-center gap-2">
                    <ViewOrderInfo order={order} />
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
