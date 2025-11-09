import { useState } from "react"
import { getCart } from "../src/utils/cart"

export default function Cart() {

    const [cart, setCart] = useState(getCart())

  return (
    <div className='w-full flex flex-col items-center p-[20px]'>
        {
            cart.map((item)=>{
                return(
                    <div className="w-[50%] h-[150px] shadow-2xl rounded-xl overflow-hidden my-1 flex">
                        <img src={item.image} className="h-full aspect-square object-cover" />
                        <div className="flex flex-col justify-center pl-4">
                            <h1 className="text-2xl font-semibold">{item.name}</h1>

                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}
