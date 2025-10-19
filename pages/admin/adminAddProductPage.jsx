export default function AdminAddProductPage() {

    const [productID, setProductID] = useState("")
    const [name, setName] = useState("")
    const [altNames, setAltNames] = useState("")
    const [price, setPrice] = useState("")
    const [decrption, setDescription] = useState("")
    const [labelledPrice, setLabelledPrice] = useState("")
    const [image, setImage] = useState("")
    const [category, setCategory] = useState("")
    const [brand, setBrand] = useState("")
    const [model, setModel] = useState("")
    const [stock, setStock] = useState("")
    const [isAvailable, setIsAvailable] = useState("")

  return (
    <div className='w-full h-full flex justify-center overflow-y-scroll p-[50px]'>
        <div className='w-[600px] bg-accent/80 rounded-2xl p-[40px] '>
          <div>
            <div className="w-full bg-white p-[20px]">
              <div className="my-[10px]">
                <label htmlFor="">ProductID</label>
                <input type="text" value={productID} onChange={(e)=>{setProductID(e.target.value)}} className="w-full h-[50px] rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-[20px]" />
                <p className="text-sm text-gray-500 w-full right">Provide a unique ID</p>
              </div>

              <div className="my-[10px]">
                <label htmlFor="">Name</label>
                <input type="text" value={name} onChange={(e)=>{setProductID(e.target.value)}} className="w-full h-[50px] rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-[20px]" />
                
              </div>
              
              <div className="my-[10px]">
                <label htmlFor="">Alternative Names</label>
                <input type="text" value={altNames} onChange={(e)=>{setProductID(e.target.value)}} className="w-full h-[50px] rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent border border-accent shadow-2xl px-[20px]" />
                <p className="text-sm text-gray-500 w-full right">Separate multiple names with commas</p>
              </div>
              
            </div>
          </div>
        </div>
          
    </div>
  )
}
