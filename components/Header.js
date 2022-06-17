import { useEffect, useState } from 'react'
import {useTheme} from 'next-themes'

import { FiFacebook } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FiSend } from 'react-icons/fi';

export default function Header() {
  const {theme, setTheme} = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      let header = document.querySelector('#header');
      if (header && window.scrollY > 100) {
        console.log(">100", window.scrollY)
        header?.classList.remove("top-10", "mx-20");
        header?.classList.add("top-0", "mx-0");
      } else {
        console.log("100", window.scrollY)
        header?.classList.remove("top-0", "mx-0");
        header?.classList.add("top-10", "mx-20");
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  return (<>
  <div id="header" className="bg-[#212121] sticky top-10 mx-20 border border-[#97979C] z-50 px-20 py-5 flex justify-between items-center">
    <div className="text-lg" style={{ fontFamily: 'Muli, Arial', fontWeight: '700' }}>CENT</div>
    <ul className="text-base text-[#97979C] flex gap-8" style={{ fontFamily: 'Noto Sans', fontWeight: '500' }}>
      <li className="active">Portfolio</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
    <div className="flex gap-10">
      <FiFacebook />
      <FiTwitter />
      <FiSend />
    </div>
  </div>

    {/* <header className="flex items-center justify-between sticky top-0 drop-shadow shadow-gray-600 px-20 py-5">
      <div style={{ width: 50 }}><h3 className="text-baseColor text-lg font-black">LOGO</h3></div>
      <div className="flex items-center">
        <div className="mr-16">
        </div>
        <div className={`mr-16 relative`}>
          <FaRegCaretSquareDown size="1.3em" />
          <span style={{ position: 'absolute', top: -5, right: -10, fontSize: '.6em', background: 'var(--main-color)', color: 'white', width: 18, height: 18, borderRadius: '50%', display: 'grid', placeItems: 'center' }}>7</span>
        </div>
        <div className={`mr-10 relative`}>
          <BsFillBellFill size="1.3em" />
          <span style={{ position: 'absolute', top: -5, right: -10, fontSize: '.6em', background: 'var(--main-color)', color: 'white', width: 18, height: 18, borderRadius: '50%', display: 'grid', placeItems: 'center' }}>7</span>
        </div>
        <div className={`mr-10 mt-1`}>
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? <MdDarkMode size="1.3em" /> : <MdOutlineDarkMode size="1.3em" />}
          </button>
        </div>
        <div className="default-btn">start selling</div>
      </div>
    </header>
    <div className="flex items-center justify-evenly bg-[#EB004E] text-white p-1 py-2">
      <div className="cursor-pointer">Products</div>
      <div className="cursor-pointer">Businesses</div>
      <div className="cursor-pointer">Job Vacancies</div>
      <div className="cursor-pointer">Articles</div>
    </div> */}

  </>
  )
}
