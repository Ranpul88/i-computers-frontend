import axios from 'axios';
import { useState } from 'react'
import toast from 'react-hot-toast';
import { BsChevronUp } from 'react-icons/bs'
import { useLocation, useNavigate } from 'react-router-dom';

export default function CheckoutPage() {

    const location = useLocation();
    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [cart, setCart] = useState(location.state)

    if(location.state == null){
        navigate("/products")
    }

    function getCartTotal(){
        let total = 0

        cart.forEach((items)=>{
            total += items.price * items.quantity
        })

        return total
    }

    async function submitOrder(){
        const token = localStorage.getItem("token")

        if(token == null){
            toast.error("You must login to place an order.")
            navigate("/login")
            return
        }

        const orderItems = []

        cart.forEach((item)=>{
            orderItems.push({
                productID: item.productID,
                quantity: item.quantity
            })
        })

        axios.post(import.meta.env.VITE_BACKEND_URL + "/orders", {
            name: name,
            address: address,
            phone: phone,
            items: orderItems
        }, {
            headers: {
                Authorization: "Bearer " + token
            }
        })
            .then(()=>{
                toast.success("Order places successfully.")
                navigate("/orders")
            })
            .catch((error)=>{
                toast.error("Error placing order")
                console.log("Error during placing the order:")
                console.log(error)
            })
    }

  return (
    <div className='w-full flex flex-col items-center p-[20px]'>
        {
            cart.map((item, index)=>{
                return(
                    <div key={item.productID} className='w-full relative lg:w-[50%] lg:h-[130px] rounded-xl overflow-hidden shadow-2xl pt-[10px] my-1 flex justify-between'>
                        <h1 className='lg:hidden absolute w-full h-[22px] overflow-hidden top-0'>{item.name}</h1>
                        <div className='h-full flex flex-col mt-4'>
                            <img src={item.image} className='h-[100px] lg:h-full aspect-square object-cover' />
                            {
                                item.labelledPrice > item.price &&
                                <h2 className='lg:hidden text-secondary/80 line-through decoration-gold/70 decoration-2 mr-2 text-md pl-2 mt-2'>LKR. {item.labelledPrice.toFixed(2)}</h2>
                            }
                            <h2 className='lg:hidden text-md text-accent font-semibold pl-2'>LKR. {item.price.toFixed(2)}</h2>
                        </div>
                        <div className='hidden w-[400px] lg:flex flex-col justify-center pl-4'>
                            <h1 className='lg:text-2xl font-semibold relative hover:[&_.tooltip]:opacity-100'><span className='tooltip italic text-sm absolute bottom-[-25px] bg-accent text-white px-2 rounded-xl opacity-0'>{item.name}</span>
                            {
                                item.name.length > 25 ? item.name.substring(0, 25) + "..." : item.name
                            }
                            </h1>
                            {
                                item.labelledPrice > item.price &&
                                <h2 className='text-secondary/80 line-through decoration-gold/70 decoration-2 mr-2 text-lg'>LKR. {item.labelledPrice.toFixed(2)}</h2>
                            }
                            <h2 className='text-xl text-accent font-semibold mt-1'>LKR. {item.price.toFixed(2)}</h2>
                            <h3 className='text-lg mt-1'>{item.productID}</h3>
                        </div>
                        <div className='min-h-full flex flex-row items-center gap-4 '>
                            <div className='flex flex-col items-center'>
                                <BsChevronUp onClick={()=>{
                                    const copiedCart = [...cart]
                                    copiedCart[index].quantity +=1
                                    setCart(copiedCart)
                                }}
                                className='text-2xl cursor-pointer hover:text-accent transition'/>
                                <span className='text-lg'>{item.quantity}</span>
                                <BsChevronUp onClick={()=>{
                                    const copiedCart = [...cart]
                                    copiedCart[index].quantity -=1

                                    if(copiedCart[index].quantity < 1){
                                        copiedCart.splice(index, 1)
                                    }

                                    setCart(copiedCart)
                                }} 
                                className='rotate-180 text-2xl cursor-pointer hover:text-accent transition'/>
                            </div>
                            <span className='pr-4 text-lg font-semibold w-[150px] text-right'>LKR. {(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    </div>
                )
            })
            
        }
        <div className='lg:w-[50%] mt-2 p-4 rounded-xl overflow-hidden border-1 shadow-2xl my-2 flex flex-wrap justify-between items-center'>
            <div className='flex flex-col lg:w-[50%]'>
                <label>Name</label>
                <input type="text" value={name} className='px-6 py-3 rounded border-2 border-secondary/30 focus:border-accent outline-none transition w-[300px]' 
                onChange={(e)=>{setName(e.target.value)}} />
            </div>
            <div className='flex flex-col lg:w-[50%]'>
                <label>Phone</label>
                <input type="text" value={phone} className='px-6 py-3 rounded border-2 border-secondary/30 focus:border-accent outline-none transition w-[300px]' 
                onChange={(e)=>{setPhone(e.target.value)}} />
            </div>
            <div className='flex flex-col w-full'>
                <label>Address</label>
                <textarea type="text" value={address} className='px-6 py-3 rounded border-2 border-secondary/30 focus:border-accent outline-none transition w-full' 
                onChange={(e)=>{setAddress(e.target.value)}} />
            </div>
        </div>
        <div className='w-full lg:w-[50%] h-[150px] rounded-xl overflow-hidden shadow-2xl my-1 flex justify-between items-center'>
            <button onClick={submitOrder} className='self-center ml-4 px-6 py-3 rounded bg-accent text-white hover:bg-accent/90 transition'>Order Now</button>
            <span className='pr-4 text-xl font-bold min-w-[150px] text-right'>
                LKR. {getCartTotal().toFixed(2)}
            </span>
        </div>
    </div>
  )
}

