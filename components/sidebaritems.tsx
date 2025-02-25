"use client"
import { SubCategory } from '@/type'
import React from 'react'
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { setSubcategoryId } from '@/lib/slice/subcategoryslice';


interface SidebarItems{
    data: SubCategory[];
}
const SidebarItems:React.FC<SidebarItems> = ({data}) => {
  const dispatch = useDispatch();
  return (
    <>
    {data.map((subcategory) => (
        <Button variant={"outline"} key={subcategory.id} className='w-44 p-1.5 rounded-md' onClick={() => {dispatch(setSubcategoryId(subcategory.id))}} >
            <p className='text-black'>{subcategory.name}</p>
        </Button>
    ))}
    </>
  )
}

export default SidebarItems