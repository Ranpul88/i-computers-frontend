import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Modal from 'react-modal';

export default function ViewOrderInfo(props) {
  const order = props.order;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notes, setNotes] = useState(order.notes || "")
  const [status, setStatus] = useState(order.status)

  if (!order) return null;

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="max-w-3xl mx-auto mt-20 bg-white rounded-2xl shadow-xl p-6 outline-none mb-10 overflow-y-scroll"
        overlayClassName="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center z-50"
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-2xl font-semibold text-secondary">
            Order Details – <span className="text-accent">{order.orderID}</span>
          </h2>

          <button
            onClick={() => setIsModalOpen(false)}
            className="text-secondary hover:text-accent text-xl font-bold"
          >
            ✕
          </button>
        </div>

        {/* Order Basic Info */}
        <div className="grid grid-cols-2 gap-4 mt-4 text-secondary">
          <div>
            <p className="text-sm text-gray-500">Customer Name</p>
            <p className="font-medium">{order.name}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-medium">{order.email}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="font-medium">{order.phone || "N/A"}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Order Date</p>
            <p className="font-medium">
              {new Date(order.date).toLocaleString()}
            </p>
          </div>

          <div className="col-span-2">
            <p className="text-sm text-gray-500">Delivery Address</p>
            <p className="font-medium">{order.address}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Status</p>
            <div className='flex flex-row'>
              <p
                className={`font-semibold capitalize ${
                  order.status === "pending"
                    ? "text-yellow-600"
                    : order.status === "completed"
                    ? "text-green-600"
                    : order.status === "processing"
                    ? "text-blue-600"
                    : "text-red-600"
                }`}
              >
                {order.status}
              </p>
              <select value={status} onChange={(e=>{setStatus(e.target.value)})} className='ml-4 px-2 py-1 border border-secondary/20 outliine-none rounded-lg text-sm text-secondary'>
                <option value="pending" className='bg-transparent border-1 border-accent rounded-full'>Pending</option>
                <option value="processing" className='bg-transparent border-1 border-accent rounded-full'>Processing</option>
                <option value="completed" className='bg-transparent border-1 border-accent rounded-full'>Completed</option>
                <option value="canceled" className='bg-transparent border-1 border-accent rounded-full'>Cancel</option>
              </select>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500">Total Amount</p>
            <p className="font-semibold text-accent text-lg">Rs. {order.total}</p>
          </div>
        </div>

        {/* Notes */}
          <div className="mt-4 p-3 bg-primary rounded-lg border">
            <p className="text-sm text-gray-500">Notes</p>
            <textarea className="w-full text-secondary outline-0" value={notes} onChange={(e)=>{
              if(e.target.value == ""){
                setNotes(null)
              }else{
                setNotes(e.target.value)
              }
              }}></textarea>
          </div>

        {/* Items */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-secondary mb-3">
            Items in Order
          </h3>

          <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
            {order.items.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-3 bg-primary rounded-xl border shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg border"
                  loading="lazy"
                />

                <div className="flex-1">
                  <p className="font-semibold text-secondary text-lg">
                    {item.name}
                  </p>

                  <p className="text-gray-600 text-sm">
                    Price: Rs. {item.price}
                  </p>

                  <p className="text-gray-600 text-sm">
                    Quantity: {item.quantity}
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-semibold text-secondary">
                    Rs. {item.price * item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Footer */}
        <div className="mt-6 flex justify-end gap-2">
          {(order.notes != notes || order.status != status)&&
            <button
            onClick={() => {
              const token = localStorage.getItem("token")

              axios.put(import.meta.env.VITE_BACKEND_URL + `/orders/${order.orderID}`, {
                status: status,
                notes: notes
              },{
                headers: {
                  Authorization: `Bearer ${token}`
                }
              }
            )
              .then((res)=>{
                toast.success("Order updated successfully")
                setIsModalOpen(false)
                window.location.reload()
              })
              .catch((err)=>{
                toast.error("Error updating order")
              })
            }}
            className="px-5 py-2 bg-accent text-white rounded-lg hover:bg-secondary transition"
          >
            Save Changes
          </button>}
          <button
            onClick={() => setIsModalOpen(false)}
            className="px-5 py-2 bg-accent text-white rounded-lg hover:bg-secondary transition"
          >
            Close
          </button>
        </div>
      </Modal>

      {/* Button */}
      <button
        className="bg-accent/80 hover:bg-accent p-2 rounded-lg text-white cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        View Info
      </button>
    </>
  );
}
