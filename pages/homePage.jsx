import { Route, Routes } from "react-router-dom";
import Header from "../src/components/header";
import ProductsPage from "./productsPage";
import ProductOverview from "./productOverview";
import CartPage from "./cart";
import CheckoutPage from "./checkout";
import OrdersPage from "./ordersPage";
import HomeContent from "./homeContent";
import ContactPage from "./contactPage";
import Footer from "../src/components/footer";
import NotFoundPage from "./notFoundPage";
import AboutPage from "./aboutPage";

export default function HomePage(){
    return(
        <div className="w-full h-full overflow-y-scroll">
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