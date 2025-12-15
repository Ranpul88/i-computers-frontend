import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../src/components/loader";

export default function LoginPage(){

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmedPassword, setConfirmedPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    async function register(){
        if(firstName.trim() == ""){
            toast.error("First name is required!")
            return
        }
        if(lastName.trim() == ""){
            toast.error("Last name is required!")
            return
        }
        if(email.trim() == ""){
            toast.error("Email is required!")
            return
        }
        if(password.trim() == ""){
            toast.error("Password is required!")
            return
        }
        if(confirmedPassword.trim() == ""){
            toast.error("Confirm password is required!")
            return
        }
        if(password != confirmedPassword){
            toast.error("Passwords do not match!")
            return
        }
        
        setIsLoading(true)

        try {
            await axios.post(import.meta.env.VITE_BACKEND_URL + "/users/", {
            email: email.trim(),
            password: password.trim(),
            firstName: firstName.trim(),
            lastName: lastName.trim()
        })

        toast.success("Registration successful! Welcome to I Computers. ")
        setIsLoading(false)
        navigate("/login")

        } catch (error) {
            toast.error("Registration failed! Please check your data and try again.")
            console.log("Error during login:")
            console.log(error)
            setIsLoading(false)
        }

    }

    return(
        <div className="w-full h-screen bg-[url('bg.jpg')] bg-center bg-cover bg-no-repeat flex">
           
            <div className="hidden w-[50%] h-full lg:flex justify-center items-center flex-col p-[50px]">
                
                <img src="/logo.png" alt="logo" className="w-[200px] h-[200px] mb-[10px] object-cover" />
                
                <h1 className="text-[50px] text-gold text-shadow-accent text-shadow-2xs text-center font-bold">Plug In. Power Up. Play Hard</h1>
                
                <p className="text-[30px] text-center text-white italic">Your Ultimate Destination For Gaming Gear</p>
            
            </div>

            <div className="w-full lg:w-[50%] h-full flex justify-center items-center">
                
                <div className="w-[350px] h-[550px] lg:w-[450px] lg:h-[600px] backdrop-blur-lg shadow-2xl rounded-2xl flex flex-col justify-center items-center p-[30px]">

                    <img src="/logo.png" alt="logo" className="lg:hidden w-[80px] h-[80px] mb-[5px] object-cover" />

                    <h1 className="text-[30px] lg:text-[40px] font-bold mb-[20px] text-white ">Register</h1>

                    <input onChange={(e)=>{
                        setFirstName(e.target.value)
                    }} 
                    type="text" placeholder="Your first name" className="w-full h-[40px] lg:h-[50px] mb-[10px] rounded-lg border border-accent p-[10px] text-[15px] lg:text-[20px] focus:outline-none focus:ring-2 focus:ring-gold" />

                    <input onChange={(e)=>{
                        setLastName(e.target.value)
                    }} 
                    type="text" placeholder="Your last name" className="w-full h-[40px] lg:h-[50px] mb-[10px] rounded-lg border border-accent p-[10px] text-[15px] lg:text-[20px] focus:outline-none focus:ring-2 focus:ring-gold" />
                   
                    <input onChange={(e)=>{
                        setEmail(e.target.value)
                    }} 
                    type="email" placeholder="Your email" className="w-full h-[40px] lg:h-[50px] mb-[10px] rounded-lg border border-accent p-[10px] text-[15px] lg:text-[20px] focus:outline-none focus:ring-2 focus:ring-gold" />
                   
                    <input onChange={(e)=>{
                        setPassword(e.target.value)
                    }} 
                    type="password" placeholder="Your pasword" className="w-full h-[40px] lg:h-[50px] mb-[10px] rounded-lg border border-accent p-[10px] text-[15px] lg:text-[20px] focus:outline-none focus:ring-2 focus:ring-gold" />
                    
                    <input onChange={(e)=>{
                        setConfirmedPassword(e.target.value)
                    }} 
                    type="password" placeholder="confirm your password" className="w-full h-[40px] lg:h-[50px] mb-[10px] rounded-lg border border-accent p-[10px] text-[15px] lg:text-[20px] focus:outline-none focus:ring-2 focus:ring-gold" />
                    
                    <button onClick={register} className="w-full h-[35px] lg:h-[50px] bg-accent text-white font-bold text-[15px] lg:text-[20px] mb-1 rounded-lg border-[2px] border-accent hover:bg-transparent hover:text-white cursor-pointer">Register</button>
                    
                    <p className="w-full text-[12px] lg:text-[15px] text-white text-right">Already have an account? <Link to="/login" className="text-gold italic">Login here</Link></p>
                
                </div>
            
            </div>
            {isLoading && <Loader />}
        </div>
    )
}