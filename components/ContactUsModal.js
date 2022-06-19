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
    <div className="font-black text-lg animate-bounce flex gap-2 items-center justify-center" style={{ fontFamily: 'Muli, Arial' }}>
      <FaUserTie /> <div className="">CENT <span className="text-main">Portfolio</span></div>
    </div>
    <div className="flex flex-col md:flex-row justify-around mt-24">
      <div className="">
        <div className="text-lg text-main">Have an offer to make?</div>
        <p>Let's connect, I'll reply your mail as soon as possible</p>

        <form className="mt-5">
          <div className="flex gap-5">
            <input type="name" placeholder="Name" required class="px-4 py-3 rounded-full" />
            <input type="email" placeholder="Email" required class="px-4 py-3 rounded-full" />
          </div>

          <div className="mt-5"><textarea name="body" id="body" rows="5" className="rounded-lg p-3 resize-none w-full" placeholder="Message"></textarea></div>

          <button type="submit" class="mt-3 rounded-lg px-3 py-1 bg-main">submit</button>
        </form>
      </div>
      <div className="">
        <div className="text-lg text-main">Contact information</div>
        
      </div>
    </div>
  </>
  )
}
