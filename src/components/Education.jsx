import React from 'react'
import {educations} from '../data'
import { FaBook } from 'react-icons/fa6';
const Education = () => {
  return (
    <section className="mt-10 max-w-[800px]">
      <h2 className="bg-primary-color text-xl font-bold font-serif">Education</h2>
      <div className="mr-3 md:mt-3 min-h-[100px] ">
        {
            educations.map((education, index)=>{
                const {name, date, school, location} = education
                return (
                  <div
                    key={index}
                    className=" min-h-[100px] py-4 flex flex-col md:flex-row "
                  >
                    <div className="min-w-[130px]">{date}</div>
                    <div>
                      <h3 className="hover:underline hover:cursor-pointer">
                        {name}
                      </h3>
                      <p>{school}</p>
                      <p>{location}</p>
                    </div>
                  </div>
                );
            })
        }
        
      </div>
    </section>
  );
}

export default Education