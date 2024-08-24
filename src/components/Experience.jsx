import React from 'react'
import {experiences} from '../data'
const Experience = () => {
  return (
    <section className='mt-10 max-w-[800px]'>
        <h2 className='text-xl text-gray-50 bg-primary-color font-bold font-serif'>Experience</h2>
        <div className='mr-3 md:mt-3 '>
            {
               experiences.map((experience, index)=>{
                const {date, detail, role, tech} = experience;
                return <div key={index} className=' min-h-[100px] py-4 flex flex-col md:flex-row'>
                    <div className='min-w-[150px]'>{date}</div>
                    <div>
                        <h3 className='font-bold text-xl hover:underline hover:cursor-pointer'>{role}</h3>
                        <p>{detail}</p>
                        <div className='flex justify-start'>
                            {
                                tech.map((th,index)=>{
                                    return <div key={index} className='mr-3 py-2 text-xl'>{th}</div>
                                })
                            }
                        </div>
                    </div>
                </div>
               })
            }
        </div>
    </section>
  )
}

export default Experience