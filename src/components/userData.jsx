import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function UserData(){
    const [user, setUser] = useState(null)
    const [selectedOption, setSelectedOption] = useState("user")

    const navigate = useNavigate()

    useEffect(()=>{
        const token = localStorage.getItem("token")

        if(token != null){
            axios.get(import.meta.env.VITE_BACKEND_URL + "/users", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then((res)=>{
                    setUser(res.data)
                })
                .catch(()=>{
                    setUser(null)
                })
        }
    }, [])


    return(
        <>
            {user ? <div className="lg:w-[60px] flex justify-center flex-row text-white">
                <img src={user.image} referrerPolicy="no-referrer" className="w-[45px] h-[45px] lg:w-[50px] lg:h-[50px] rounded-full" />
                <select onChange={
                    (e)=>{
                        if(e.target.value == "logout"){
                            localStorage.removeItem("token")
                            navigate("/login")
                        }else if(e.target.value == "my-orders"){
                            navigate("/orders")
                        }
                        setSelectedOption("user")
                    }
                } value={selectedOption} className="w-[60px] lg:w-[70px] text-sm lg:text-base bg-transparent outline-none ml-1 mt-2 lg:mt-3 text-white">
                    <option className="bg-accent" value={"user"}>{user.firstName}</option>
                    <option className="bg-accent" value={"logout"}>Logout</option>
                    <option className="bg-accent" value={"my-orders"}>My Orders</option>
                </select>
            </div>
                : <div className="w-full flex flex-row items-center justify-center text-white gap-3">
                    <Link to="/login" className="h-[40px] w-[80px] flex items-center justify-center bg-white text-accent rounded-full">Login</Link>
                    <Link to="/register" className="h-[40px] w-[90px] flex items-center justify-center bg-white text-accent rounded-full">Register</Link>
                </div>
            }
        </>
    )
}