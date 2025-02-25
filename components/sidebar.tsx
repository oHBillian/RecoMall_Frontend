
import React from "react";
import SidebarItems from "./sidebaritems";
import GetSubcategories from "@/actions/get-subcategories";
// import MainSidebar from "./mainsidebar";
interface SidebarProps {
    categoryId?: string;
}

const Sidebar = async ({ categoryId }: SidebarProps) => {
    let subcategories = [];

    if(categoryId){
        subcategories = await GetSubcategories(categoryId)
    }
    
    const formattedsubcategories = subcategories.map((data) => ({
        id: data.id,
        name: data.name
    }))


  return (
    <div className="h-full w-64 flex flex-col p-10 border-r">
      <p className="text-black font-medium text-xl">Categories</p>
      <div className="border mt-2"></div>
      <div className="mt-2 flex flex-col gap-y-3 ">
        <SidebarItems data={formattedsubcategories}/>
      </div>
    </div>
  );
};

export default Sidebar;
