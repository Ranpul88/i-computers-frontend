import { Route, Routes } from "react-router-dom";
import Header from "../src/components/header";
import ProductsPage from "./productsPage";
import ProductOverview from "./productOverview";
import CartPage from "./cart";
import CheckoutPage from "./checkout";
import OrdersPage from "./ordersPage";
import HomeContent from "./homeContent";
import ContactPage from "./contactPage";
import NotFoundPage from "./notFoundPage";
import AboutPage from "./aboutPage";
import Footer from "../src/components/footer";

export default function HomePage(){
    return(
        <div className="flex flex-col min-h-screen">
            <Header />
            
            <div className="w-full min-h-[calc(100%-100px)]">
                <Routes>
                    <Route path="/" element={<HomeContent />}/>
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/products/:productID" element={<ProductOverview />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="checkout" element={<CheckoutPage />} />
                    <Route path="/orders" element={<OrdersPage />} />
                    <Route path="/*" element={<NotFoundPage />} />
                </Routes>
            </div> 
            <Footer />        
        </div>
        
    )
}