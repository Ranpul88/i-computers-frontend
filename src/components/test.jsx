import { useState } from "react"
import { createClient } from "@supabase/supabase-js"
import uploadFile from "../utils/mediaUpload"

const url = "https://glcorbfadicldwigvgio.supabase.co"
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdsY29yYmZhZGljbGR3aWd2Z2lvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyNzAwOTMsImV4cCI6MjA3Nzg0NjA5M30.XXx9GVLL_eSi3F5AEj6arnPlL76hePI4jhSW78wUHLg"

const supabase = createClient(url, key)

export default function Test(){

    const [file, setFile] = useState(null)

    async function handleUpload(){
        const url = await uploadFile(file)
        console.log(url)
    }

    return(
        <div className="w-full h-full flex justify-center items-center">
            <input type="file" onChange={
                    (e)=>{
                        setFile(e.target.files[0])
                    }
                } />

            <button onClick={handleUpload} className="bg-red-900 p-2 text-white rounded-xl">upload</button>
        </div>
        
    )
}