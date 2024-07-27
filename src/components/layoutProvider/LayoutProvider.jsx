"use client"

import { usePathname } from "next/navigation";

const LayoutProvider = () => {
    const pathname = usePathname();
    return (
        <div>
            
        </div>
    );
};

export default LayoutProvider;