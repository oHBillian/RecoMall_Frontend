import Navbar from "@/components/navbar";
import { ReactNode } from "react";


export default async function layout({children} : {children : ReactNode}) {
    return(
        <div className="h-full">
            <Navbar />
            <div className="h-full pt-12">
            {children}
            </div>
            
        </div>
        
    )
}