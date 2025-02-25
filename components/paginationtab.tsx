'use client'
import { RootState } from '@/lib/store'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from './ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { setDescrement, setIncrement } from '@/lib/slice/Paginationslice'

const PaginationTab = () => {
  const pageValue = useSelector((state :RootState) => state.pagination.pagevalue)
  const dispatch = useDispatch()
  return (
    <div className='flex items-center gap-x-2'>
        <Button variant={'outline'} className='p-1 px-2' onClick={() => dispatch(setDescrement())}> <ArrowLeft /></Button>
        <div className='py-1 px-3 border rounded-'>
        {pageValue}
        </div>
        <Button variant={'outline'} className='p-1 px-2' onClick={() => dispatch(setIncrement())}><ArrowRight /></Button>
    </div>
  )
}

export default PaginationTab