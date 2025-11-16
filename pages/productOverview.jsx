import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useParams } from "react-router-dom"
import Loader from "../src/components/loader"
import ImageSlidder from "../src/components/imageSlidder"
import { CgChevronRight } from "react-icons/cg"
import { addToCart, emptyCart } from "../src/utils/cart"

export default function ProductOverview() {

    const params = useParams()
    const [product, setProduct] = useState()
    const [status, setStatus] = useState("loading")

    const token = localStorage.getItem("token")

    useEffect(()=>{
        if(status == "loading"){
            axios.get(import.meta.env.VITE_BACKEND_URL + "/products/" + params.productID, {
                headers: {
                    Authorization: "Bearer " + token
                }
            })
                .then((response)=>{
                    setProduct(response.data)
                    setStatus("success")
                }
            )
                .catch((error)=>{
                    toast.error("Product Not Found.")
                    console.log(error)
                    setStatus("error")
                }
            )
        }
    }, [])

  return (
    <>
        {
            status == "loading" && <Loader /> 
        }

        {
            status == "error" && <h1 className="text-center mt-10 text-2xl">Error Loading Product...</h1>
        }

        {
            status == "success" && 
            <div className="w-full h-[calc(100vh-100px)] flex">
                <div className="w-1/2 h-full flex justify-center items-center">
                    <ImageSlidder images={product.images}  />
                </div>
                <div className="w-1/2 h-full p-10 flex flex-col gap-6">
                    <h1 className="text-4xl font-semibold">{product.name}</h1>
                    <h2 className="text-lg text-secondary/80">{product.productID}</h2>
                    <h3 className="text-lg text-secondary/80 flex items-center"><CgChevronRight /> {product.category}</h3>
                    <p className="h-32 text-md text-justify text-secondary/90 overflow-y-auto">{product.description}</p>
                    <div className="w-full ">
                        {
                            product.labelledPrice > product.price && 
                            <h2 className="text-secondary/80 line-through decoration-gold/70 decoration-2 mr-2 text-xl">LKR. {product.labelledPrice.toFixed(2)}</h2>
                        }
                        <h2 className="text-accent font-semibold text-3xl">LKR. {product.price.toFixed(2)}</h2>
                    </div>
                    <div className="w-full  flex flex-row gap-4 mt-4">
                        <button onClick={()=>{
                            addToCart(product, 1)
                        }} className="bg-accent text-white px-6 py-3 rounded-md hover:bg-accent/90 transition">Add to Cart</button>
                        <button onClick={()=>{
                            emptyCart()
                        }} className="border-2 border-accent text-accent px-6 py-3 rounded-md hover:bg-accent hover:text-white">Buy Now</button>
                    </div>
                </div>
            </div>
        }
    </>
  )
}
