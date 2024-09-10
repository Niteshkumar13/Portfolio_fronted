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
    <div className='h-full w-full mx-auto  max-w-screen-xl px-2.5 md:px-0 sm:px-10 overflow-hidden  flex items-center justify-center flex-col text-3xl gap-4' >
      <span className='text-4xl'>Technologies I know</span>
      <div className='flex gap-3 flex-wrap items-center justify-center'>
        {isLoading ? <MoonLoader/> : memoizedIcons.map((data, index) => {
          return (
            <>
              <div className=''>
                <data.icon.icon alt={data.header} fontSize={50} fill={data.icon.primaryColor} data-tooltip-id={`my-tooltip-children-multiline${index}`}/>
                <Tooltip id={`my-tooltip-children-multiline${index}`} className='tool-tip  bg-red-400'>
                  <div className='w-[250px]  h-auto bg-red-500'>
                    <h1 className='after-hover-content'>{data.header}</h1>
                    <p className='after-hover-content'>{data.about}</p>
                  </div>
                </Tooltip>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}
