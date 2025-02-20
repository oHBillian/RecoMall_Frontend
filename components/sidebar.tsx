
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
    <div className="h-full w-60 flex flex-col p-10 border-r">
      <p className="text-black font-medium text-xl">Categories</p>
      <div className="border mt-2"></div>
      <div className="mt-2 flex gap-2">
        <SidebarItems data={formattedsubcategories}/>
      </div>
      {/* <div className="bg-[#3A3B3D] mt-auto flex items-center justify-around h-16 p-2">
        <UserButton />
        {user && (
          <span className="text-sm font-medium text-white">
            {user.primaryEmailAddress?.emailAddress}
          </span>
        )}
      </div> */}
    </div>
  );
};

export default Sidebar;
