import { useState } from 'react'
import { BsChevronUp } from 'react-icons/bs'
import { useLocation, useNavigate } from 'react-router-dom';

export default function CheckoutPage() {

    const location = useLocation();
    const navigate = useNavigate();
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

  return (
    <div className='w-full flex flex-col items-center p-[20px]'>
        {console.log(cart)}
        {
            cart.map((item, index)=>{
                return(
                    <div key={item.productID} className='w-[50%] h-[130px] rounded-xl overflow-hidden shadow-2xl my-1 flex justify-between'>
                        <img src={item.image} className='h-full aspect-square object-cover' />
                        <div className='w-[400px] flex flex-col justify-center pl-4'>
                            <h1 className='text-2xl font-semibold relative hover:[&_.tooltip]:opacity-100'><span className='tooltip italic text-sm absolute bottom-[-25px] bg-accent text-white px-2 rounded-xl opacity-0'>{item.name}</span>
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
                        <div className='h-full flex flex-row items-center gap-4 '>
                            <div className='h-full flex flex-col justify-center items-center'>
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
        <div className='w-[50%] h-[150px] rounded-xl overflow-hidden shadow-2xl my-1 flex justify-between items-center'>
            <button className='self-center ml-4 px-6 py-3 rounded bg-accent text-white hover:bg-accent/90 transition'>Order Now</button>
            <span className='pr-4 text-xl font-bold min-w-[150px] text-right'>
                LKR. {getCartTotal().toFixed(2)}
            </span>
        </div>
    </div>
  )
}

