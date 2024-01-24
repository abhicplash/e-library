import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="bg-blue-50 w-full">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
