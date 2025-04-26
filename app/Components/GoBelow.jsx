import { ChevronsDown, ChevronsUp } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const GoBelow = ({link , isUpward}) => {
  return (
    <div className={`md:absolute left-0 right-0 bottom-0 flex justify-end items-end ${isUpward?"":"md:pb-12"}  pt-2 md:px-16`}>
       <Link
       
       href={link}>
      {
        isUpward? <ChevronsUp size={'2rem'} className='hover-pointer'/>: <ChevronsDown size={'2rem'} className='hover-pointer'/>
      }
       </Link>
    </div>
  )
}

export default GoBelow