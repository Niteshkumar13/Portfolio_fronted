
import Contactme from './component/contact/contactme';
import Form from './component/contact/form';
import { Showprofile } from './component/profile/header';
import Project from './component/project/project';
import Tech from './component/technology/tech';
import Themeswitcher from './component/theme/themeswitcher';
import About from './component/about/about';
import { Analytics } from '@vercel/analytics/react';
import { useThemeContext } from './component/themeSwitcher/themeswitcher';


function App() {
const {theme} = useThemeContext();
  return (
    <div className="grid place-items-center" style={{backgroundColor:theme.background}}>
      <Themeswitcher />
      <div className='max-w-[1246px] max-xl:px-7 max-sm:px-2 w-full z-[20]' style={{color:theme.text}}>
        <Showprofile />
        <Tech />
        <About />
        <Project />
        <Analytics />
        <Form />

      </div>
      <Contactme />
    </div>
  );
}

export default App;
