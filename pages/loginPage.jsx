import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../src/components/loader";
import { GrGoogle } from "react-icons/gr";
import { useGoogleLogin } from "@react-oauth/google";

export default function LoginPage(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const googleLogin = useGoogleLogin({
        onSuccess: (res)=>{
            setIsLoading(true)
            axios.post(import.meta.env.VITE_BACKEND_URL + "/users/google-login", {
                token: res.access_token
            })
                .then((res)=>{
                    localStorage.setItem("token", res.data.token)
                    
                    if(res.data.role == "admin"){
                        navigate("/admin")
                    }else{
                        navigate("/")
                    }

                    toast.success("Login Successfull!")
                    setIsLoading(false)
                })
                .catch((err)=>{
                    console.log(err)
                })
            setIsLoading(false)
        },
        onError: ()=>{toast.error("Google Login Failed!")},
        onNonOAuthError: ()=>{toast.error("Google Login Failed!")}
    })

    async function login(){
        setIsLoading(true)

        try {
            const res = await axios.post(import.meta.env.VITE_BACKEND_URL + "/users/login", {
            email: email,
            password: password
        })

        localStorage.setItem("token", res.data.token)
        
        if(res.data.role == "admin"){
            navigate("/admin")
        }else{
            navigate("/")
        }
        
        toast.success("Login successful! Welcome back.")
        setIsLoading(false)

        } catch (error) {
            toast.error("Login failed! Please check your credentials and try again.")
            console.log("Error during login:")
            console.log(error)
            setIsLoading(false)
        }

    }

    return(
        <div className="w-full h-screen bg-[url('/bg.jpg')] bg-center bg-cover bg-no-repeat flex">
           
            <div className="hidden w-[50%] h-full lg:flex justify-center items-center flex-col p-[50px]">
                
                <img src="/logo.png" alt="logo" className="w-[200px] h-[200px] mb-[10px] object-cover" />
                
                <h1 className="text-[50px] mb-[10px] text-gold text-shadow-accent text-shadow-2xs text-center font-bold">Plug In. Power Up. Play Hard</h1>
                
                <p className="text-[30px] text-white italic text-center">Your Ultimate Destination For Gaming Gear</p>
            
            </div>

            <div className="w-full lg:w-[50%] h-full flex justify-center items-center">
                
                <div className="w-[300px] h-[450px] lg:w-[450px] lg:h-[600px] backdrop-blur-lg shadow-2xl rounded-2xl flex flex-col justify-center items-center p-[30px]">

                    <img src="/logo.png" alt="logo" className="lg:hidden w-[80px] h-[80px] mb-[5px] object-cover" />
                
                    <h1 className="text-[30px] lg:text-[40px] font-bold mb-[20px] text-white ">Login</h1>

                    <input onChange={(e)=>{
                        setEmail(e.target.value)
                    }} 
                    type="email" placeholder="Your email" className="w-full h-[40px] lg:h-[50px] mb-[10px] rounded-lg border border-accent p-[10px] text-[15px] lg:text-[20px] focus:outline-none focus:ring-2 focus:ring-gold" />
                   
                    <input onChange={(e)=>{
                        setPassword(e.target.value)
                    }} 
                    type="password" placeholder="Your pasword" className="w-full h-[40px] lg:h-[50px] rounded-lg border border-accent p-[10px] text-[15px] lg:text-[20px] focus:outline-none focus:ring-2 focus:ring-gold" />
                    
                    <p className="text-white w-full text-[12px] lg:text-[15px] text-right mb-[20px]">Forgot your password? <Link to="/forgot-password" className="text-gold italic">Reset it here</Link></p>
                    <button onClick={login} disabled={isLoading} className="w-full h-[35px] lg:h-[50px] bg-accent text-white font-bold text-[15px] lg:text-[20px] mb-[10px] rounded-lg border-[2px] border-accent hover:bg-transparent hover:text-white cursor-pointer">Login</button>

                    <button onClick={googleLogin} disabled={isLoading} className="w-full h-[35px] lg:h-[50px] bg-accent text-white font-bold text-[15px] lg:text-[20px] rounded-lg border-[2px] border-accent hover:bg-transparent hover:text-white cursor-pointer">Login with <GrGoogle className="inline ml-2 mb-1" /></button>
                    
                    <p className="w-full text-[12px] lg:text-[15px] text-white text-right">Don't have an account? <Link to="/register" className="text-gold italic">Register here</Link></p>
                
                </div>
            
            </div>
            {isLoading && <Loader />}
        </div>
    )
}