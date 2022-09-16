import Image from 'next/image';
import Link from 'next/link';
import Modal from 'react-modal'

import Header from "../components/Header";
import ContactUsModal from "../components/ContactUsModal";

import { FiFacebook, FiTwitter, FiSend } from 'react-icons/fi';
import { BsGithub } from 'react-icons/bs';
import { MdOutlineMailOutline } from 'react-icons/md';

import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter()
  const currentPage = router.pathname

  const user = {
    name: 'Paul Innocent',
    facebookUrl: 'https://web.facebook.com/david.godwin.1044',
    twitterUrl: 'https://twitter.com/paulinnocent04',
    githubUrl: 'https://github.com/innocentdavid',
    email: 'innocentpaul2918@gmail.com'
  }

  const projects = [
    { technologies: 'Adobe XD (Design) + HTML + SCSS + Bootstrap + JavaScript', role: 'Full development', bgImgUrl: '/images/Group 27.png', logoUrl: '/images/Blue-chip logo 2.png', link: 'https://bluichip.com.ng' },
    { technologies: 'Laravel + MailChimp + SendInBlue + PayStack', role: 'Back-end developer', bgImgUrl: '/images/msk-bg-img.png', logoUrl: '/images/mystudentkit-logo.png', link: 'https://mystudentkit.com' },
    { technologies: "WordPress + Adobe XD (Design).", role: 'Full web developement', bgImgUrl: '/images/modemedia-bg-img.png', logoUrl: '/images/modemedia-logo.png', link: 'https://modemedia.ng' },
    { technologies: "HTML + CSS + Bootstrap + JavaScript + Node Js", role: 'Back-end developer', bgImgUrl: '/images/PickupBeta-bg-img.png', logoUrl: '/images/pick.png', link: 'https://pickupbeta.com' },
    { technologies: "Python + Django + Jinja2 + SCSS + JavaScript + SQL + db.sqlite3 + Dj Database", role: 'Full web developement', bgImgUrl: '/images/Royal-hotel-bg-img.png', logoUrl: '/images/royalLogo.png', link: 'https://centroyalhotel.herokuapp.com' },
  ];

  return (<>
    <Modal
      isOpen={router.query.modal === 'contact'}
      onRequestClose={() => router.push(`${currentPage}`)}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.75)',
          zIndex: 50,
        },
        content: {
          position: 'absolute',
          top: '50px',
          left: '50px',
          right: '50px',
          bottom: '50px',
          border: '1px solid #ccc',
          borderRadius: '30px',
          background: '#212121',
          color: '#fff',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '4px',
          outline: 'none',
          // padding: '20px',
          // width: 300
        }
      }}
    >
      <ContactUsModal user={user} />
    </Modal>

    <div className="max-w-[1400px]">
      <Header user={user} />
      <section id="hero" className="flex justify-around items-center pt-24 md:pt-32">
        <div className="hidden md:block">
          <Image src="/images/4848341.png" alt='' width="349px" height="333px" />
        </div>
        <div className="px-5" style={{ fontFamily: 'Noto Sans', maxWidth: '461px' }}>
          <div style={{ fontSize: '18px', marginBottom: -20 }}>HI THERE, I'M</div>
          <div className="text-[80px] font-black" style={{ fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji', marginLeft: -2 }}>cent</div>
          <div className="font-bold text-xl md:text-2xl">
            <div className="flex gap-5">
              <div>Full Stack Software Engineer</div>
              <Image src="/plus.svg" alt="plus" width="25px" height="25px" />
            </div>
            <div>WordPress Expert</div>
          </div>
          <p style={{ fontSize: 18, marginTop: 10 }}>Astute Full Stack Software Engineer with over 3 years of experience in Web development.</p>
          <div className="flex gap-8 md:gap-12 mt-10">
            <div className="hover:animate-bounce"><Link href="/?modal=contact"><a className="py-2 px-7 rounded-full text-black" style={{ background: 'var(--main-color)' }}>Hire me</a></Link></div>
            <div className="hover:animate-bounce"><Link href="https://docs.google.com/document/d/1AkwYp-FLBdWGZ0mFu8dLDa4QRtRu8t5i9XmSk6c-Qrk/edit?usp=sharing"><a className="py-2 px-7 rounded-full" style={{ border: '1px solid var(--main-color)' }} target="_blank" download>My Resume</a></Link></div>
          </div>
        </div>
      </section>

      <section id="about" className="grid place-items-center text-center m-auto mt-28 px-8 md:px-32">
        <h1 className="mb-5" style={{ fontFamily: 'Cooper', fontSize: 45, fontWeight: 900 }}>About me</h1>

        <p style={{ fontFamily: 'Noto Sans', fontSize: 20 }}>I'm Paul Innocent. Astute Full Stack Software Engineer with over 3 years of experience in Web development. I offer extensive experience in supporting test case development and verification testing. works collaboratively to design and build user interfaces. I am a driven and ambitious technology professional with high-level software proficiency.</p>

        <div className='mt-10 mb-10'><Image src="/images/IMG_20220329_202933_246.png" alt="" width="184px" height="184px" /></div>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <div style={{ padding: '10px 30px', background: 'var(--main-color)', color: 'black' }}><Link href="/?modal=contact"><a className="hover:animate-bounce">Contact</a></Link></div>
          <div className="flex gap-10">
            <Link href={user.facebookUrl}><a target="_blank"><FiFacebook /></a></Link>
            <Link href={user.twitterUrl}><a target="_blank"><FiTwitter /></a></Link>
            <Link href={`mailto:${user.email}`}><a target="_blank"><FiSend /></a></Link>
          </div>
        </div>
      </section>

      <section id="recentWork" className="mt-20">
        <div className="text-center text-5xl font-black font-[Cooper] mb-10">My Recent Works</div>

        <div className="flex flex-wrap gap-16 justify-center text-white">
          {projects?.map((project, index) => (
            <div key={index} id="workCard" className="" style={{ position: 'relative', overflow: 'hidden' }}>
              <Image src={project?.bgImgUrl} alt="" width="315" height="365" />
              <div id="workCardOverlay" className="absolute top-0 lg:top-[98%] left-0 w-full h-full bg-[#00261Cbb] flex flex-col items-center justify-center duration-500 ease-in-out">
                <div><Link href={project.link}><a><Image src={project?.logoUrl} alt="" width="107" height="90px" /></a></Link></div>
                <div className="text-center mt-5 px-3">
                  <p className="text-sm">{project?.technologies}</p>
                  <div className="font-[Arial] font-black text-base mt-3"><span style={{ color: 'var(--main-color)' }}>Role: </span>{project.role}</div></div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-5 mt-10">
          <div className="hover:bg-transparent"
            style={{ padding: '5px 15px', borderRadius: 1000, background: 'var(--main-color)', color: 'black' }}>
            <Link href="/?modal=contact"><a className="hover:animate-bounce">Hire me</a></Link></div>
          <Link href={user.githubUrl}><a className="flex gap-3 items-center" target="_blank">see more: <BsGithub size="30px" /></a></Link>
        </div>
      </section>

      <section id="skillsets" className="grid place-items-center text-center m-auto mt-28 px-8 md:px-32">
        <h1 className="mb-5" style={{ fontFamily: 'Cooper', fontSize: 45, fontWeight: 900 }}>My Skillsets</h1>

        <p style={{ fontFamily: 'Noto Sans', fontSize: 20 }}>I began learning programming at a very young age, so I learned a lot and practised a lot. I genuinely concentrated on both frontend and backend, and I also have extensive programming experience.</p>

        <div className="flex flex-wrap justify-center gap-10 mt-16">
          <Image src="/images/Icon awesome-css3-alt.png" alt="" width="70px" height="70px" title="CSS3" />
          <Image src="/images/Icon awesome-html5.png" alt="" width="70px" height="70px" title="HTML5" />
          <Image src="/images/Icon awesome-js.png" alt="" width="70px" height="70px" title="Js" />
          <Image src="/images/Icon awesome-node-js.png" alt="" width="70px" height="70px" title="Node js" />
          <Image src="/images/Icon awesome-react.png" alt="" width="70px" height="70px" title="React" />
          <Image src="/images/Icon awesome-fire-alt.png" alt="" width="70px" height="70px" title="Firebase" />
          <Image src="/images/Icon awesome-wordpress.png" alt="" width="70px" height="70px" title="Wordpress" />
          <Image src="/images/Icon awesome-python.png" alt="" width="70px" height="70px" title="Python" />
          <Image src="/images/Icon awesome-flask.png" alt="" width="70px" height="70px" title="Flask" />
          <Image src="/images/Icon simple-django.png" alt="" width="70px" height="70px" title="Django" />
          <Image src="/images/Icon material-payment.png" alt="" width="70px" height="70px" title="Payment Integration" />
          <Image src="/images/Icon awesome-php.png" alt="" width="70px" height="70px" title="PHP" />
          <Image src="/images/Icon awesome-laravel.png" alt="" width="70px" height="70px" title="Laravel" />
          <Image src="/images/Icon ionic-ios-settings.png" alt="" width="70px" height="70px" title="" />
          <Image src="/images/Icon metro-bitcoin.png" alt="" width="70px" height="70px" title="Blockchain" />
          <Image src="/images/Icon zocial-cloudapp.png" alt="" width="70px" height="70px" title="AWS" />
          <Image src="/images/web3.png" alt="" width="70px" height="50px" title="web3" />
        </div>

        <div className="flex items-center justify-center gap-5 mt-10">
          <div className="hover:bg-transparent"
            style={{ padding: '5px 15px', borderRadius: 1000, background: 'var(--main-color)', color: 'black' }}>
            <Link href="/?modal=contact"><a className="hover:animate-bounce">Hire me</a></Link></div>
          <Link href={user.githubUrl}><a target="_blank"><BsGithub size="30px" /></a></Link>
        </div>
      </section>

      <section id="services" className="grid place-items-center text-center m-auto mt-20 px-8 md:px-2 lg:px-32">
        <h1 className="mb-10" style={{ fontFamily: 'Cooper', fontSize: 45, fontWeight: 900 }}>Services</h1>

        <div className="flex justify-center items-center flex-wrap md:flex-nowrap text-center">
          <div className="border px-5 md:px-0 lg:px-5 py-3 flex flex-col justify-center">
            <div><Image src="/images/Icon awesome-pencil-ruler.png" alt="" width="50" height="50" /></div>
            <div className="mb-5 font-[Roboto] font-bold text-2xl text-white">Design</div>
            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual</p>

            <fieldset class="border-t border-slate-300 mt-10 mb-2 font-[Roboto] font-semibold text-xl">
              <legend class="mx-auto px-4">Tools</legend>
            </fieldset>
            <div className="text-base md:text-sm lg:text-base">
              <div>{`Pen & Paper`}</div>
              <div>Adobe XD</div>
              <div>Figma</div>
              <div>Webflow</div>
              <div>Scratch</div>
            </div>
          </div>
          <div className="border px-5 md:px-0 lg:px-5 py-3 flex flex-col justify-center">
            <div><Image src="/images/Icon awesome-code.png" alt="" width="50" height="50" /></div>
            <div className="mb-5 font-[Roboto] font-bold text-2xl text-white">Front-end</div>
            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual</p>

            <fieldset class="border-t border-slate-300 mt-10 mb-2 font-[Roboto] font-semibold text-xl">
              <legend class="mx-auto px-4">Tools</legend>
            </fieldset>
            <div className="text-base md:text-sm lg:text-base">
              <div>WordPress</div>
              <div>HTML</div>
              <div>CSS</div>
              <div>JavaScript</div>
              <div>React, NextJs, Veu, RedWood... etc</div>
            </div>
          </div>
          <div className="border px-5 md:px-0 lg:px-5 py-3 flex flex-col justify-center">
            <div><Image src="/images/Back-end icon.png" alt="" width="50" height="50" /></div>
            <div className="mb-5 font-[Roboto] font-bold text-2xl text-white">Back-end</div>
            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual</p>

            <fieldset class="border-t border-slate-300 mt-10 mb-2 font-[Roboto] font-semibold text-xl">
              <legend class="mx-auto px-4">Tools</legend>
            </fieldset>
            <div className="text-base md:text-sm lg:text-base">
              <div>Python</div>
              <div>PHP</div>
              <div>Node Js</div>
              <div>Dj, Flask, Laravel, Firebase, Sanity, etc.</div>
              <div>MongoDB, MySQL, RestAPI… etc</div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonies" className="grid place-items-center text-center mt-20 px-8 md:px-32">
        <h1 className="mb-10" style={{ fontFamily: 'Cooper', fontSize: 45, fontWeight: 900 }}>Testimonies</h1>

        <Image src="/images/Icon awesome-quote-left.png" alt="" width="50px" height="50px" />

        <p className="mt-4 px-[15%]">Without doubt one of the most talented programmers out there. I always go back to 'cent when I'm out of my depth and he's never failed to deliver what I ask for. He's Smart, trustworthy and professional. You won't be disappointed.</p>

        <div className="mt-10 flex justify-between items-center gap-20 md:gap-20 lg:gap-36">
          {/* <div className="text-4xl">{`<`}</div> */}
          <div className="flex flex-col md:flex-row justify-center gap-5">
            <div><Image src="/images/M.B Mainsara.png" alt="" width="50px" height="50px" /></div>
            <div className="text-center">
              <div className="font-bold flex items-center justify-center gap-4">Bamshak Ibrahim <Link href={`mailto:bamshakibrahim@gmail.com`}><a target="_blank"><MdOutlineMailOutline /></a></Link></div> 
              <div>Blue chip universal services</div>
            </div>
          </div>
          {/* <div className="font-black text-4xl">{`>`}</div> */}
        </div>
      </section>

      <footer className="mt-28 pb-10 flex flex-col md:flex-row justify-center items-center gap-5 md:gap-20 lg:gap-32">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          <div style={{ padding: '10px 30px', background: 'var(--main-color)', color: 'black' }}><Link href="/?modal=contact"><a className="hover:animate-bounce">Contact</a></Link></div>
        </div>
        <div className="flex gap-10">
          <Link href={user.facebookUrl}><a target="_blank"><FiFacebook /></a></Link>
          <Link href={user.twitterUrl}><a target="_blank"><FiTwitter /></a></Link>
          <Link href={`mailto:${user.email}`}><a target="_blank"><FiSend /></a></Link>
        </div>
      </footer>
    </div>
  </>)
}
