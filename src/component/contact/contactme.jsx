import React from 'react';
import { icons } from '../../data/contactIcon';
import { useThemeContext } from '../themeSwitcher/themeswitcher';
export default function Contactme() {
  const {theme} = useThemeContext()
  return (
    <div className='w-full grid place-items-center  h-32 z-20' style={{ backgroundColor:theme.footer }}>
      <div className='grid gap-3 place-items-center'>
        <h1 className='text-[40px]'>Contact me</h1>
        <div className='flex gap-2'>
          {icons.map((item, index) => (
            <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" onclick="Javascript: return true;">
              <item.icon.icon size={40} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
