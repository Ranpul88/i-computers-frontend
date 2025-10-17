import { Route, Routes } from "react-router-dom";
import Header from "../src/components/header";

export default function HomePage(){
    return(
        <div className="w-full h-full overflow-y-scroll">
            <Header />
            
            <div className="w-full min-h-[calc(100%-100px)]">
                <Routes>
                    <Route path="/" element={<h1>Home page</h1>}/>
                    <Route path="/products" element={<h1>Products page</h1>} />
                    <Route path="/about" element={<h1>About Page</h1>} />
                    <Route path="/contact" element={<h1>Contact Page</h1>} />
                    <Route path="/*" element={<h1>404 Page Not Found</h1>} />
                </Routes>
            </div>
        </div>
    )
}