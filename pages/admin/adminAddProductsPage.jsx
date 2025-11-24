import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { LuBoxes } from "react-icons/lu"
import toast from "react-hot-toast"
import axios from "axios"
import uploadFile from "../../src/utils/mediaUpload"

export default function AdminAddProductsPage() {

  const [productID, setProductID] = useState("")
  const [name, setName] = useState("")
  const [altNames, setAltNames] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState(0)
  const [labelledPrice, setLabelledPrice] = useState(0)
  const [files, setFiles] = useState([])
  const [category, setCategory] = useState("")
  const [brand, setBrand] = useState("")
  const [model, setModel] = useState("")
  const [stock, setStock] = useState(0)
  const [isAvailable, setIsAvailable] = useState(false)
  const navigate = useNavigate()

  async function addProduct(){

    
    const token = localStorage.getItem("token")
    
    if(token == null){
      toast.error("You must logged in as an admin to add products.")
      navigate("/login")
      return
    }

    const imagesPromises = []

    for(let i = 0; i < files.length; i++){
      const promises = uploadFile(files[i])
      imagesPromises.push(promises)
    }

    const images = await Promise.all(imagesPromises)
      .catch((err)=>{
        toast.error("Error uploading images, Please try again.")
        console.log("Error uploading images: ")
        console.log(err)
        return
      })
    
    if(productID == "" || name == "" || description == "" || category == "" || brand == "" || model == ""){
      toast.error("Please fill in all required fields.")
      return
    }

    try {

      const altNamesInArray = altNames.split(",")

      await axios.post(import.meta.env.VITE_BACKEND_URL + "/products", {
        productID: productID,
        name: name,
        altNames: altNamesInArray,
        description: description,
        price: price,
        labelledPrice: labelledPrice,
        images: images,
        category: category,
        brand: brand,
        model: model,
        stock: stock,
        isAvailable: isAvailable
      },{
        headers: {
          Authorization: "Bearer " + token
        } 
      })

      toast.success("Product added succefully.")
      navigate("/admin/products")

    } catch (err) {
      toast.error("Error adding product. Please try again.")
      console.log("Error adding product: ")
      console.log(err)
    }

  }

  return (
    <div className='w-full flex justify-center p-[50px]'>
        <div className="w-[800px] bg-accent/80 rounded-2xl p-[40px] shadow-2xl">

          <h1 className="w-full text-2xl font-bold mb-[30px] ml-[10px] text-primary flex items-center gap-[5px]"><LuBoxes /> Add New Product </h1>

          <div className="w-full bg-white p-[20px] flex flex-wrap justify-between rounded-xl shadow-2xl">

            <div className="my-[10px] w-[40%]">
              <label>Product ID</label>
              <input type="text" value={productID} onChange={(e)=>{setProductID(e.target.value)}} className="w-full h-[40px] rounded-2xl border border-accent focus:outline-none focus:ring-2 focus:ring-accent shadow-2xl px-[10px]" />
              <p className="text-sm text-gray-500 w-full text-right">Provide a unique product ID</p>
            </div>

            <div className="my-[10px] w-[40%]">
              <label>Name</label>
              <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} className="w-full h-[40px] rounded-2xl border border-accent focus:outline-none focus:ring-2 focus:ring-accent shadow-2xl px-[10px]" />
            </div>

            <div className="my-[10px] w-full">
              <label>Alternative Names</label>
              <input type="text" value={altNames} onChange={(e)=>{setAltNames(e.target.value)}} className="w-full h-[40px] rounded-2xl border border-accent focus:outline-none focus:ring-2 focus:ring-accent shadow-2xl px-[10px]" />
              <p className="text-sm text-gray-500 w-full text-right">Separate multiple names with commas</p>
            </div>

            <div className="my-[10px] w-full">
              <label>Description</label>
              <textarea type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}} className="w-full h-[40px] rounded-2xl border border-accent focus:outline-none focus:ring-2 focus:ring-accent shadow-2xl px-[10px] py-[10px]" />
            </div>

            <div className="my-[10px] w-[40%]">
              <label>Price</label>
              <input type="number" value={price} onChange={(e)=>{setPrice(e.target.value)}} className="w-full h-[40px] rounded-2xl border border-accent focus:outline-none focus:ring-2 focus:ring-accent shadow-2xl px-[10px]" />
            </div>

            <div className="my-[10px] w-[40%]">
              <label>Labelled Price</label>
              <input type="number" value={labelledPrice} onChange={(e)=>{setLabelledPrice(e.target.value)}} className="w-full h-[40px] rounded-2xl border border-accent focus:outline-none focus:ring-2 focus:ring-accent shadow-2xl px-[10px]" />
            </div>

            <div className="my-[10px] w-full">
              <label>Images</label>
              <input type="file" multiple={true} onChange={(e)=>{setFiles(e.target.files)}} className="w-full h-[40px] rounded-2xl border border-accent focus:outline-none focus:ring-2 focus:ring-accent shadow-2xl px-[10px]" />
            </div>

            <div className="my-[10px] w-[30%] flex flex-col">
              <label>category</label>
              <select value={category} onChange={(e)=>{setCategory(e.target.value)}} className="w-full h-[40px] rounded-2xl border border-accent focus:outline-none focus:ring-2 focus:ring-accent shadow-2xl px-[10px]">
                <option value="CPU">CPU</option>
                <option value="Graphic  Cards">Graphic  Cards</option>
                <option value="Motherboards">Motherboards</option>
                <option value="Power Supplies">Power Supplies</option>
                <option value="RAM">RAM</option>
                <option value="Storage Devices">Storage Devices</option>
                <option value="Cooling Solutions">Cooling Solutions</option>
                <option value="Computer Cases">Computer Cases</option>
                <option value="Mouse and Keyboards">Mouse and Keyboards</option>
                <option value="Accessories">Accessories</option>
                <option value="Monitors">Monitors</option>
                <option value="Computers">Computers</option>
                <option value="Laptops">Laptops</option>
                <option value="Cables">Cables</option>
                <option value="Others">Others</option>
              </select>
            </div>
            
            <div className="my-[10px] w-[30%]">
              <label>Brand</label>
              <input type="text" value={brand} onChange={(e)=>{setBrand(e.target.value)}} className="w-full h-[40px] rounded-2xl border border-accent focus:outline-none focus:ring-2 focus:ring-accent shadow-2xl px-[10px]" />
            </div>

            <div className="my-[10px] w-[30%]">
              <label>Model</label>
              <input type="text" value={model} onChange={(e)=>{setModel(e.target.value)}} className="w-full h-[40px] rounded-2xl border border-accent focus:outline-none focus:ring-2 focus:ring-accent shadow-2xl px-[10px]" />
            </div>

            <div className="my-[10px] w-[40%]">
              <label>Stock</label>
              <input type="number" value={stock} onChange={(e)=>{setStock(e.target.value)}} className="w-full h-[40px] rounded-2xl border border-accent focus:outline-none focus:ring-2 focus:ring-accent shadow-2xl px-[10px]" />
            </div>

            <div className="my-[10px] w-[30%] flex flex-col">
              <label>Availability</label>
              <select value={isAvailable} onChange={(e)=>{setIsAvailable(e.target.value)}} className="w-full h-[40px] rounded-2xl border border-accent focus:outline-none focus:ring-2 focus:ring-accent shadow-2xl pl-[10px]">
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>

            <Link to="/admin/products" className="w-[49%] text-accent font-bold rounded-2xl flex justify-center  items-center hover:bg-red-700 hover:text-white border-[2px] mt-[20px]">Cancel</Link>
            <button onClick={addProduct} className="w-[49%] h-[50px] bg-accent text-white font-bold rounded-2xl hover:bg-transparent hover:text-accent border border-accent mt-[20px]">Add Product</button>

          </div>
        </div>
    </div>
  )
}
