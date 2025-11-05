import { createClient } from "@supabase/supabase-js"

const url = "https://glcorbfadicldwigvgio.supabase.co"
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdsY29yYmZhZGljbGR3aWd2Z2lvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyNzAwOTMsImV4cCI6MjA3Nzg0NjA5M30.XXx9GVLL_eSi3F5AEj6arnPlL76hePI4jhSW78wUHLg"

const supabase = createClient(url, key)

export default function uploadFile(file){
    return new Promise(
        (resolve, reject)=>{
            const timeStamp = Date.now()
            const fileName = timeStamp + "_" + file.name

            supabase.storage.from("images").upload(fileName, file, {
                cacheControl: "3600",
                upsert: false
            })
                .then(()=>{
                    const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl
                    resolve(publicUrl)
                })
                .catch((error)=>{
                    reject(error)
                })
        }
    )
}