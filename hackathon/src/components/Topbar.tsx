import React from "react";

const Topbar = () => {
  return (
    <div className="w-full bg-gray-100 py-2 px-4 text-sm text-gray-700 flex justify-between items-center">
      <div>Free Shipping on Orders Over $50!</div>
      <div className="flex gap-4">
        <a href="/login" className="hover:underline">
          Login
        </a>
        <a href="/signup" className="hover:underline">
          Signup
        </a>
      </div>
    </div>
  );
};

export default Topbar;