import React from 'react'
import {logos} from '../data'
import './linksLogo.css'
const LinksLogo = () => {
  return (
    <section className='flex max-w-[200px] justify-between mt-3'>
        {
            logos.map((logo,index)=>{
                return <div key={index} className='secondary-color logo-effect text-2xl p-2 mr-2
                hover:text-gray-800 hover:rounded-full 
                hover:cursor-pointer'>{logo.logo}</div>
            })
        }
    </section>
  )
}

export default LinksLogo