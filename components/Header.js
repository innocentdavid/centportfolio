import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { FiFacebook, FiSend, FiTwitter } from 'react-icons/fi';
import { MdDarkMode } from 'react-icons/md';
import { RiWhatsappFill } from 'react-icons/ri';
import { FaUserTie } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header({ user }) {
  const { theme, setTheme } = useTheme()
  const router = useRouter()
  const currentPage = router.pathname

  useEffect(() => {
    const handleScroll = () => {
      let header = document.querySelector('#header');
      if (header && window.scrollY > 100) {
        header?.classList.remove("top-10", "mx-10");
        header?.classList.add("top-0", "mx-0");
      } else {
        header?.classList.remove("top-0", "mx-0");
        header?.classList.add("top-10", "mx-10");
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [showMenu, setShowMenu] = useState(false);

  return (<>
    <div id="header" className="sticky top-10 mx-10 border border-[#212121] z-50 px-4 md:px-20 py-5 flex justify-between items-center dark:bg-[#121212] dark:text-white bg-black text-white">
      <div className="font-black text-lg animate-bounce flex gap-2 items-center" style={{ fontFamily: 'Muli, Arial' }}>
        <FaUserTie /> <div className="">CENT</div>
      </div>
      <button onClick={() => setShowMenu(!showMenu)} data-collapse-toggle="mobile-menu" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </button>

      <ul className="hidden text-base md:flex gap-8" style={{ fontFamily: 'Noto Sans', fontWeight: '500' }}>
        <li className="text-[#34ffc8]">Portfolio</li>
        <li><Link href="#about"><a className="hover:text-[#34ffc8]">About</a></Link></li>
        <li><Link href="/?modal=contact" as={`${router.pathname}/contact`}><a className="hover:text-[#34ffc8]">Contact</a></Link></li>
      </ul>
      <div className="hidden md:flex gap-10">
        <Link href={user.facebookUrl}><a className="hover:text-[#34ffc8]" target="_blank"><FiFacebook /></a></Link>
        <Link href={user.twitterUrl}><a className="hover:text-[#34ffc8]" target="_blank"><FiTwitter /></a></Link>
        <Link href={`mailto:${user.email}`}><a className="hover:text-[#34ffc8]" target="_blank"><FiSend /></a></Link>
      </div>

      {showMenu && <div className="lg:hidden absolute top-[80px] left-0 p-4 w-full min-h-[200px] bg-black dark:bg-[#949494]">
        <div className="flex flex-col">
          <ul className="text-base flex flex-col gap-4" style={{ fontFamily: 'Noto Sans', fontWeight: '500' }}>
            <li className="text-[#34ffc8] font-black">Portfolio</li>
            <li><Link href="#about"><a className="hover:text-[#34ffc8]">About</a></Link></li>
            <li><Link href="/?modal=contact" as={`${router.pathname}/contact`}><a className="hover:text-[#34ffc8]">Contact</a></Link></li>
          </ul>
          <div className="flex gap-10 mt-12">
            <Link href={user.facebookUrl}><a className="hover:text-[#34ffc8]" target="_blank"><FiFacebook /></a></Link>
            <Link href={user.twitterUrl}><a className="hover:text-[#34ffc8]" target="_blank"><FiTwitter /></a></Link>
            <Link href={`mailto:${user.email}`}><a className="hover:text-[#34ffc8]" target="_blank"><FiSend /></a></Link>
          </div>
        </div>
      </div>}
    </div>

    <div className="fixed bottom-10 right-10 z-50">
      <div className="" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        <MdDarkMode size="1.7em" />
      </div>
      <div className="mt-5">
        <Link href="https://wa.me/2348112659304?text=Hi cent, I'm mesmerized by your skills. My name is "><a className="text-main" target="_blank"><RiWhatsappFill size="1.7em" /></a></Link>
      </div>
    </div>
  </>
  )
}
