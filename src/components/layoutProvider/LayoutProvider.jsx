"use client"

import { usePathname } from "next/navigation";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const LayoutProvider = ({children}) => {
    const pathname = usePathname();
    return (
        <div>
            {pathname !== "/login" && pathname !== "/signup" && <Navbar/>}
            {children}
            {pathname !== "/login" && pathname !== "/signup" && <Footer/>}
        </div>
    );
};

export default LayoutProvider;