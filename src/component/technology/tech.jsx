import React, { useState, useEffect,useMemo } from 'react';
import { MoonLoader } from 'react-spinners';
import icon from '../../data/technologyknow';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'
export default function Tech() {
  const [isLoading, SetIsLoading] = useState(true);
  const memoizedIcons = useMemo(() => icon, []);
  useEffect(() => {
    SetIsLoading(false);
  }, [memoizedIcons]);
  return (
    <div className='h-full w-full mx-auto  max-w-screen-xl px-3 md:px-0 sm:px-10 overflow-hidden  flex items-center justify-center flex-col text-3xl gap-4 my-5' >
      <span className='text-3xl text-center'>Technologies I know</span>
      <div className='flex gap-3 flex-wrap items-center justify-center '>
        {isLoading ? <MoonLoader/> : memoizedIcons.map((data, index) => {
          return (
            <>
              
                <data.icon.icon alt={data.header} className='text-[50px] max-sm:text-[50px] ' fill={data.icon.primaryColor} data-tooltip-id={`my-tooltip-children-multiline${index}`} />
                <Tooltip id={`my-tooltip-children-multiline${index}`} className='tool-tip p-0  z-[1] tooltip bg-none'  style={{borderRadius:'16px'}}
                arrowColor={"#ea580c"}
                >
                  <div className='w-auto max-w-[250px]  bg-slate-50 text-black p-2 rounded-2xl border-5 border-orange-600'>
                    <h1 className='after-hover-content text-center'>{data.header}</h1>
                    <p className='after-hover-content  text-justify text-base'>{data.about}</p>
                  </div>
                </Tooltip>
             
            </>
          )
        })}
      </div>
    </div>
  )
}
