import React, { useState, useEffect, useMemo } from 'react';
import { MoonLoader } from 'react-spinners';
import projectdata from '../../data/projectdata';
import { Tilt } from 'react-tilt';
export default function Project() {
  const [isLoading, SetIsLoading] = useState(true);
  const memoizedProjectIcon = useMemo(() => projectdata, []);
  useEffect(() => {
    console.log(memoizedProjectIcon)
    SetIsLoading(false);
  }, [memoizedProjectIcon]);
  return (
    <section className='h-full w-full mx-auto  max-w-screen-xl px-2.5 md:px-0 overflow-hidden grid gap-20'>
      <span className='text-center font-bold text-3xl' style={{ marginTop: '30px' }}>Projects</span>
      {isLoading ? <MoonLoader /> : memoizedProjectIcon.map((data, index) => {
        return (
          <div className='flex justify-between flex-wrap' style={{ flexDirection: index % 2 !== 0 && 'row-reverse' }}>
            <div className='max-w-[600px]  text-xl flex flex-col gap-2'>
              <div className='flex flex-col text-justify justify-center items-center'>
                <span className='font-bold text-2xl'>{data.title}</span>
                <span>{data.description}</span>
              </div>
              <div className='flex gap-1 flex-wrap justify-center gap-1'>
                {data.tech.map((TechIcon, techIndex) => {
                  return (
                    <TechIcon.icon key={techIndex} fill={TechIcon.primaryColor} fontSize={40} />
                  )
                }
                )}
              </div>
              <div>
              </div>
              <div className='flex justify-center gap-2'>
                {data.see_live && <a href={data.live} target='_blank'><button className='outline-none border-2 border-[#7f5af0] hover:bg-[#7f5af0] hover:text-white rounded-3xl px-7 py-1'>live</button></a>}
                <a href={data.code} target='_blank' ><button className='outline-none border-2 border-[#7f5af0] hover:bg-[#7f5af0] hover:text-white rounded-3xl px-6 py-1'>Code</button></a>
              </div>
            </div>
            <Tilt options={{ max: 5.8, scale: 1, transition: true }}> <img src={data.thumbnail} className='shadow rounded-xl max-md:w-[36vw] max-md:h-[22vw] lg:w-[600px] lg:h-[350px]' alt={`image${index}`} /></Tilt>
          </div>
        )
      })
      }
    </section>
  )
}
