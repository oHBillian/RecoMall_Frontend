import { SubCategory } from '@/type'
import React from 'react'
interface SidebarItems{
    data: SubCategory[];
}
const SidebarItems:React.FC<SidebarItems> = ({data}) => {
  return (
    <>
    {data.map((subcategory) => (
        <button key={subcategory.id} className='border p-1.5 rounded-md'>
            <p className='text-black'>{subcategory.name}</p>
        </button>
    ))}
    </>
  )
}

export default SidebarItems