import { Route, Routes } from "react-router";
import Saitbar from "./Saitbar";
import User from "../_companents/user/User";
import Orders from "../_companents/Orders/Orders";
import Catigories from "../_companents/catigories/Catigories";
import Products from "../_companents/products/Products";
import Banners from "../_companents/baners/Banerlar";

function Navbar() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-between items-center p-4 bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-lg">
        <div className="text-2xl font-semibold">Logo</div>
        
        <div className="flex items-center space-x-4">
          <img
            className="w-12 h-12 rounded-full border-2 border-white"
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
            alt="User"
          />
          
          <div className="text-sm">
            <p className="font-medium">Ozoedbk</p>
            <p className="text-xs">ID: 123</p>
          </div>
        </div>
      </div>

      <Saitbar />

      <div className="p-4">
        <Routes>
          <Route path="/user" element={<User />} />
          <Route path="/banerlar" element={<Banners />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products" element={<Products />} />
          <Route path="/catigories" element={<Catigories />} />
        </Routes>
      </div>
    </div>
  );
}

export default Navbar;