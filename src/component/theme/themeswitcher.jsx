import { themeType } from '../../data/theme';
import Stars from './backgroundAnimation';
import { useThemeContext } from '../themeSwitcher/themeswitcher';
export default function Themeswitcher() {
  const { theme, setTheme } = useThemeContext();
  function changeTheme(index) {
    setTheme({ ...theme, ...themeType[index] })
  }

  return (
    <>
      <div className='absolute z-[10]'>
        <Stars color={theme.particles} />
      </div>
      <div className='top-0 right-0 bg-slate-50 w-12 h-[150px] rounded-bl-2xl fixed z-[21]'>
        <div className='grid gap-[5px] place-items-center my-2'>
          <div className='size-7 rounded-[50%] bg-[#fec7d7] border-2 border-orange-500' key="bg-[#0f0e17]" onClick={e => changeTheme(0)} />
          <div className='size-7 rounded-[50%] bg-[#16161a] border-2 border-orange-500' key="bg-[#fec7d7]" onClick={e => changeTheme(1)} />
          <div className='size-7 rounded-[50%] bg-[#004643] border-2 border-orange-500' key="bg-[#faeee7]" onClick={e => changeTheme(2)} />
          <div className='size-7 rounded-[50%] bg-[#faeee7] border-2 border-orange-500' key="bg-[#004643]" onClick={e => changeTheme(3)} />
        </div>
      </div>
    </>
  )

}


