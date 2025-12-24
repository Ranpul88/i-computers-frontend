import { useEffect, useState } from 'react'
import Loader from '../src/components/loader'
import axios from 'axios'
import ProductCard from '../src/components/productCard'

export default function ProductsPage() {

    const [products, setProducts] = useState([])
    const [loaded, setLoaded] = useState(false)
    
    useEffect(() => {
    if(!loaded){
      axios.get(import.meta.env.VITE_BACKEND_URL + "/products")
      .then((res) => {
        setProducts(res.data)
        setLoaded(true)
      })
    }
  }, [])
  return (
    <div className='w-full h-full'>
        {!loaded ? <Loader /> : 
            <div className='w-full flex justify-center flex-wrap pb-4'>
              <div className='w-full h-[80px] lg:h-[100px] bg-primary sticky top-0 p-4 flex items-center justify-center shadow-md z-10 mb-10'>
                <input type="text" placeholder='Search products...' className='w-1/2 h-[35px] lg:h-[50px] px-4 py-2 border border-secondary/30 rounded-lg outline-none' onChange={async (e)=>{
                  if(e.target.value == ""){
                    await axios.get(import.meta.env.VITE_BACKEND_URL + "/products")
                      .then((res) => {
                        setProducts(res.data)
                        setLoaded(true)
                      })
                  }else{
                    await axios.get(import.meta.env.VITE_BACKEND_URL + "/products/search/" + e.target.value)
                      .then((res) => {
                        setProducts(res.data)
                      })
                  }
                }} />
              </div>
                {
                  products.map((item)=>{
                      return(
                          <ProductCard key={item.productID} product={item} />
                      )
                  })
                }
            </div>
        }
    </div>
  )
}
