import { useEffect } from 'react'
import { useTheme } from 'next-themes'

import { FiFacebook, FiSend, FiTwitter } from 'react-icons/fi';
import { MdDarkMode } from 'react-icons/md';
import { RiWhatsappFill } from 'react-icons/ri';
import { FaUserTie } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ContactUsModal({ user }) {
  return (<>
    <div className="font-black text-lg animate-bounce flex gap-2 items-center justify-center p-2 md:p-5" style={{ fontFamily: 'Muli, Arial' }}>
      <FaUserTie /> <div className="">CENT <span className="text-main">Portfolio</span></div>
    </div>
    <div className="flex flex-col md:flex-row justify-center gap-10 lg:gap-32 mt-16">
      <div className="">
        <div className="text-lg text-main">Have an offer to make?</div>
        <p>Let's connect, I'll reply your mail as soon as possible</p>

        <form className="mt-5">
          <div className="flex flex-col md:flex-row gap-5">
            <input type="name" placeholder="Name" required class="w-full px-4 py-3 rounded-full" />
            <input type="email" placeholder="Email" required class="w-full px-4 py-3 rounded-full" />
          </div>

          <div className="mt-5"><textarea name="body" id="body" rows="5" className="rounded-lg p-3 resize-none w-full" placeholder="Message"></textarea></div>

          <button type="submit" class="mt-3 rounded-lg px-3 py-1 bg-main">submit</button>
        </form>
      </div>
      
      <div className="w-56">
        <div className="text-lg text-main">Contact information</div>
        <p className="mt-3">5, Rebbeka close camp close to beulah home of school. Camp. Abeokuta</p>
        <p className="mt-3">Call me: <Link href="tel:+2348112659304"><a className="text-main" target="_blank">+2348112659304</a></Link></p>
        <p className="mt-3">I'm available anytime, anyday. The above number is my hotline and my WhatsApp number</p>
      </div>
    </div>
  </>
  )
}
