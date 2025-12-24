import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { BiSupport } from "react-icons/bi";
import Loader from "../src/components/loader";

export default function ContactPage() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [text, setText] = useState("")
  const [loaded, setloaded] = useState(true)

  async function handleSubmit(){
    if(name.trim() === "" || email.trim() === "" || text.trim() === ""){
      toast.error("Please fill all the fields!")
      return
    }

    setloaded(false)

    try {
      await axios.post(import.meta.env.VITE_BACKEND_URL + "/users/contact",{
      name: name,
      email: email,
      text: text
    })

    setloaded(true)
    setName("")
    setEmail("")
    setText("")
    toast.success("Message sent successfully.")

    }catch(error){
      toast.error("Error sending message, please try again!")
      console.log("Error sending message: ")
      console.log(error)
      setloaded(true)
    }
    
  }

  return (
      <div className="w-full h-full flex flex-col items-center p-4">
       <div className="w-full h-[50px] lg:h-[100px] flex justify-center p-4">
            <h1 className="text-[30px] lg:text-[40px] font-bold">Contact US</h1>
        </div>
        <div className="w-full h-[80px] lg:h-[50px] flex justify-center">
            <h2 className="w-full text-[20px] lg:text-3xl flex flex-row items-center gap-2 justify-center">Our team is always ready to assist. <BiSupport /></h2>
        </div>
        <div className="w-full flex flex-col lg:flex-row lg:mt-12 px-20 pb-2 lg:justify-between items-center gap-4">
          <div className="w-[350px] [h-400px] lg:w-[420px] lg:h-[300px] bg-accent p-10 border rounded-2xl shadow-2xl text-primary">
            <h1 className="text-base lg:text-xl">For any general enquiries, please fill out this form and our team will get back to you as soon as possible. Whether you have a question, need more information, or simply want to reach out, we’re here to help. We look forward to hearing from you...</h1>
          </div>
          <div className="w-[350px] h-[450px] lg:w-[800px] lg:h-[400px] p-6 flex flex-wrap items-center justify-between border border-accent/ rounded-2xl shadow-2xl bg-accent">
            <input type="text" placeholder="Name" value={name} onChange={(e)=>{setName(e.target.value)}} className="w-full lg:w-[45%] h-[50px] rounded-lg border-2 bg-white border-accent p-[10px] text-[18px] lg:text-[20px] focus:outline-none" />
            <input type="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="w-full lg:w-[45%] h-[50px] rounded-lg border-2 bg-white border-accent p-[10px] text-[18px] lg:text-[20px] focus:outline-none" />
            <textarea placeholder="Enter your message here..." value={text} onChange={(e)=>{setText(e.target.value)}} className="w-full h-[120px] rounded-lg border-2 bg-white border-accent p-[10px] text-[18px] lg:text-[20px] focus:outline-none"></textarea>
            <button onClick={handleSubmit} disabled={!loaded} className="w-[80px] h-[40px] bg-white rounded-lg hover:scale-102 cursor-pointer">Submit</button>
          </div>
        </div>
        {!loaded && <Loader />}
    </div>
  )
}
