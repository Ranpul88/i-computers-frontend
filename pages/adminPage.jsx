import { Link, Route, Routes } from "react-router-dom";
import { LuClipboardList, LuUsers } from "react-icons/lu";
import { LuBoxes } from "react-icons/lu";
import { MdOutlineRateReview } from "react-icons/md";
import AdminProductsPage from "./admin/adminProductsPage";
import AdminAddProductsPage from "./admin/adminAddProductsPage";
import AdminUpdateProductsPage from "./admin/adminUpdateProductPage";
import AdminOrdersPage from "./admin/adminOrdersPage";

export default function AdminPage() {
  return (
    <div className="w-full h-full flex bg-accent">

        <div className="w-[300px] h-full bg-accent">

            <div className="w-full h-[100px] text-primary flex items-center">

                <img src="/logo.png" alt="" className="h-full"/>

                <h1 className="text-2xl">Admin</h1>

            </div>

            <div className="w-full h-[400px] text-white flex flex-col text-2xl pl-[20px] pt-[20px]">

                <Link to="/admin" className="w- w-full flex items-center h-[50px] gap-[10px]"><LuClipboardList />Orders</Link>
                <Link to="/admin/products" className="w- w-full flex items-center h-[50px] gap-[10px]"><LuBoxes />Products</Link>
                <Link to="/admin/users" className="w- w-full flex items-center h-[50px] gap-[10px]"><LuUsers />Users</Link>
                <Link to="/admin/reviews" className="w- w-full flex items-center h-[50px] gap-[10px]"><MdOutlineRateReview />Reviews</Link>

            </div>
        </div>

        <div className="w-[calc(100%-300px)] h-full max-h-full border-[10px] bg-primary border-accent rounded-4xl overflow-y-scroll">

          <Routes>
            <Route path="/" element={<AdminOrdersPage />} />
            <Route path="/products" element={<AdminProductsPage />} />
            <Route path="/add-product" element={<AdminAddProductsPage />} />
            <Route path="/update-product" element={<AdminUpdateProductsPage />} />
            <Route path="/users" element={<h1>Users</h1>} />
            <Route path="/reviews" element={<h1>Reviews</h1>} />
          </Routes>

        </div>
    </div>
  )
}
