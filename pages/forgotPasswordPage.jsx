import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"
import Loader from "../src/components/loader"
import { useNavigate } from "react-router-dom"

export default function ForgotPasswordPage() {
    
    const [otpSent, setOtpSent] = useState(false)
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState("")
    const [otp, setOtp] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const navigate = useNavigate()

    async function resetPassword(){
        if(newPassword != confirmPassword){
            toast.error("Passwords do not match!")
            return
        }

        setLoading(true)

        try {
            await axios.post(import.meta.env.VITE_BACKEND_URL + "/users/validate-otp",{
                email: email,
                otp: otp,
                newPassword: newPassword
            })
            toast.success("Password reset successfull.")
            setLoading(false)
            navigate("/login")
        }catch(error){
            console.log(error)
            toast.error("Error resetting password try again!")
            setLoading(false)
        }
    }
    
    async function sendOTP(){
        setLoading(true)
            
        try {
            await axios.get(import.meta.env.VITE_BACKEND_URL + "/users/send-otp/" + email)
            toast.success("OTP send to your email.")
            setLoading(false)
            setOtpSent(true)
        }catch(error){
            console.log(error)
            toast.error("Error sending OTP please try again!")
            setLoading(false)
        }
    }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
        {
            loading && <Loader />
        }
        {
            otpSent ? 
            <div className="w-[400px] h-[500px] flex flex-col justify-center items-center bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Enter OTP and New Password</h2>
                <input type="text" placeholder="Enter OTP" className="w-full mt-1 p-2 border border-gray-300 rounded" onChange={(e)=>{setOtp(e.target.value)}} />
                <input type="password" placeholder="Enter New Password" className="w-full mt-1 p-2 border border-gray-300 rounded" onChange={(e)=>{setNewPassword(e.target.value)}} />
                <input type="password" placeholder="Confirm New Password" className="w-full mt-1 p-2 border border-gray-300 rounded" onChange={(e)=>{setConfirmPassword(e.target.value)}} />
                <button onClick={resetPassword} className="w-full bg-blue-500 text-white mt-3 p-2 rounded hover:bg-blue-600">Reset Password</button>
            </div> :
            <div className="w-[400px] h-[400px] flex flex-col justify-center items-center bg-white rounded-lg shadow-lg p-8 ">
                <input type="email" placeholder="Enter your email" className="w-full p-2 mb-4 border border-gray-300 rounded" onChange={(e)=>{setEmail(e.target.value)}} />
                <button onClick={sendOTP} className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                    Sent OTP
                </button>
            </div>
        }
    </div>
  )
}
