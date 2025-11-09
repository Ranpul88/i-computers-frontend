import { Route, Routes } from "react-router-dom";
import Header from "../src/components/header";
import ProductsPage from "./productsPage";
import Cart from "./cart";
import ProductOverview from "./productOverview";

export default function HomePage(){
    return(
        <div className="w-full h-full overflow-y-scroll">
            <Header />
            
            <div className="w-full min-h-[calc(100%-100px)]">
                <Routes>
                    <Route path="/" element={<h1>Home page</h1>}/>
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/about" element={<h1>About Page</h1>} />
                    <Route path="/contact" element={<h1>Contact Page</h1>} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/overview/:productID" element={<ProductOverview />} />
                    <Route path="/*" element={<h1>404 Page Not Found</h1>} />
                </Routes>
            </div>
        </div>
    )
}