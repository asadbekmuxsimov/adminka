import { NavLink } from "react-router";

function Saitbar() {
  return (
    <div className="fixed  left-0 h-screen w-36 bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-lg">
      <div className="flex flex-col p-4 gap-4">
        {[
          {
            to: "/user",
            label: "Users",
          },
          {
            to: "/banners",
            label: "Banners",
          },
          {
            to: "/orders",
            label: "Orders",
          },
          {
            to: "/products",
            label: "Products",
          },
          {
            to: "/categories",
            label: "Categories",
          },
        ].map((item) => {
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex justify-center items-center p-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "bg-white text-black font-semibold"
                    : "bg-blue-700 hover:bg-blue-800 text-gray-200"
                }`
              }
            >
              {item.label}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default Saitbar;