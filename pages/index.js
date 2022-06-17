import Image from 'next/image';
import Header from "../components/Header";
import { FiFacebook, FiTwitter, FiSend } from 'react-icons/fi';
import { BsGithub } from 'react-icons/bs';

export default function Home() {

  return (
    <div className="max-w-[1400px] bg-[#212121] text-white select-none">
      <Header />
      <section className="flex justify-around items-center pt-20">
        <div>
          <Image src="/images/4848341.png" alt='' width="349px" height="333px" />
        </div>
        <div style={{ fontFamily: 'Noto Sans', maxWidth: '461px' }}>
          <div style={{ fontSize: '18px', marginBottom: -20 }}>HI THERE, I'M</div>
          <div className="text-[80px] font-black" style={{ fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji' }}>cent</div>
          <div style={{ fontSize: '25px', fontWeight: '700' }}>
            <div className="flex gap-5">
              <div>Full Stack Software Engineer</div>
              <Image src="/plus.svg" alt="plus" width="25px" height="25px" />
            </div>
            <div>WordPress Expert</div>
          </div>
          <p style={{ fontSize: 18, marginTop: 10 }}>Astute Full Stack Software Engineer with over 3 years of experience in Web development.</p>
          <div className="flex gap-12 mt-3">
            <div
              style={{ padding: '10px 30px', borderRadius: 1000, background: 'var(--main-color)', color: 'black' }}>
              Hire me</div>
            <div style={{ padding: '10px 30px', borderRadius: 1000, border: '1px solid var(--main-color)', color: 'var(--main-color)' }}>My Resume</div>
          </div>
        </div>
      </section>

      <section className="grid place-items-center text-center mt-28" style={{ padding: '0 15%' }}>
        <h1 className="mb-5" style={{ fontFamily: 'Cooper', fontSize: 45, fontWeight: 900 }}>About me</h1>

        <p style={{ fontFamily: 'Noto Sans', fontSize: 20 }}>I'm Paul Innocent. Astute Full Stack Software Engineer with over 3 years of experience in Web development. offers expansive experience, supporting test case development and verification testing. Works collaboratively to design and build user interfaces. Driven and ambitious technology professional with high-level Software proficiency.</p>

        <div className='mt-10 mb-10'><Image src="/images/IMG_20220329_202933_246.png" alt="" width="184px" height="184px" /></div>

        <div className="flex items-center gap-10">
          <div style={{ padding: '10px 30px', background: 'var(--main-color)', color: 'black' }}>
            Contact me</div>
          <div className="flex gap-10">
            <FiFacebook />
            <FiTwitter />
            <FiSend />
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="text-center text-5xl font-black font-[Cooper] mb-10">My Recent Works</div>

        <div className="flex flex-wrap gap-16 justify-center">
          <div id="workCard" className="" style={{ position: 'relative', overflow: 'hidden' }}>
            <Image src="/images/Group 31.png" alt="" width="315" height="365" />
            <div id="workCardOverlay" className="absolute top-[98%] left-0 w-full h-full bg-[#00261Cbb] flex flex-col items-center justify-center duration-500 ease-in-out">
              <div><Image src="/images/Blue-chip logo 2.png" alt="" width="107" height="123px" /></div>
              <div className="font-[Arial] font-black text-2xl text-center mt-5">
                <div>Full Web</div> Development</div>
            </div>
          </div>

          <div id="workCard" className="" style={{ position: 'relative', overflow: 'hidden' }}>
            <Image src="/images/Group 29.png" alt="" width="315" height="365" />
            <div id="workCardOverlay" className="absolute top-[98%] left-0 w-full h-full bg-[#00261Cbb] flex flex-col items-center justify-center duration-500 ease-in-out">
              <div><Image src="/images/Blue-chip logo 2.png" alt="" width="107" height="123px" /></div>
              <div className="font-[Arial] font-black text-2xl text-center mt-5">
                <div>Full Web</div> Development</div>
            </div>
          </div>
          <div id="workCard" className="" style={{ position: 'relative', overflow: 'hidden' }}>
            <Image src="/images/Group 27.png" alt="" width="315" height="365" />
            <div id="workCardOverlay" className="absolute top-[98%] left-0 w-full h-full bg-[#00261Cbb] flex flex-col items-center justify-center duration-500 ease-in-out">
              <div><Image src="/images/Blue-chip logo 2.png" alt="" width="107" height="123px" /></div>
              <div className="font-[Arial] font-black text-2xl text-center mt-5">
                <div>Full Web</div> Development</div>
            </div>
          </div>
          <div id="workCard" className="" style={{ position: 'relative', overflow: 'hidden' }}>
            <Image src="/images/Group 30.png" alt="" width="315" height="365" />
            <div id="workCardOverlay" className="absolute top-[98%] left-0 w-full h-full bg-[#00261Cbb] flex flex-col items-center justify-center duration-500 ease-in-out">
              <div><Image src="/images/Blue-chip logo 2.png" alt="" width="107" height="123px" /></div>
              <div className="font-[Arial] font-black text-2xl text-center mt-5">
                <div>Full Web</div> Development</div>
            </div>
          </div>
          <div id="workCard" className="" style={{ position: 'relative', overflow: 'hidden' }}>
            <Image src="/images/Group 28.png" alt="" width="315" height="365" />
            <div id="workCardOverlay" className="absolute top-[98%] left-0 w-full h-full bg-[#00261Cbb] flex flex-col items-center justify-center duration-500 ease-in-out">
              <div><Image src="/images/Blue-chip logo 2.png" alt="" width="107" height="123px" /></div>
              <div className="font-[Arial] font-black text-2xl text-center mt-5">
                <div>Full Web</div> Development</div>
            </div>
          </div>
          <div id="workCard" className="" style={{ position: 'relative', overflow: 'hidden' }}>
            <Image src="/images/Group 26.png" alt="" width="315" height="365" />
            <div id="workCardOverlay" className="absolute top-[98%] left-0 w-full h-full bg-[#00261Cbb] flex flex-col items-center justify-center duration-500 ease-in-out">
              <div><Image src="/images/Blue-chip logo 2.png" alt="" width="107" height="123px" /></div>
              <div className="font-[Arial] font-black text-2xl text-center mt-5">
                <div>Full Web</div> Development</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-5 mt-10">
          <div className="hover:bg-transparent"
            style={{ padding: '5px 15px', borderRadius: 1000, background: 'var(--main-color)', color: 'black' }}>
            Hire me</div>
          <BsGithub size="30px" />
        </div>
      </section>

      <section className="grid place-items-center text-center mt-28" style={{ padding: '0 15%' }}>
        <h1 className="mb-5" style={{ fontFamily: 'Cooper', fontSize: 45, fontWeight: 900 }}>My Skillsets</h1>

        <p style={{ fontFamily: 'Noto Sans', fontSize: 20 }}>I started learn programming at a very young age so I learn a lot of thing, did a lot of practicals. I actually focused on both frontend and backend but I also have wide knowledge on programming.</p>

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
      </section>

      <section className="grid place-items-center text-center mt-20" style={{ padding: '0 15%' }}>
        <h1 className="mb-10" style={{ fontFamily: 'Cooper', fontSize: 45, fontWeight: 900 }}>Services</h1>

        <div className="flex justify-center items-center text-center">
          <div className="border px-5 py-3 flex flex-col justify-center">
            <div><Image src="/images/Icon awesome-pencil-ruler.png" alt="" width="50" height="50" /></div>
            <div className="mb-5 font-[Roboto] font-bold text-2xl text-white">Design</div>
            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual</p>

            <fieldset class="border-t border-slate-300 mt-10 mb-2 font-[Roboto] font-semibold text-xl text-white">
              <legend class="mx-auto px-4">Tools</legend>
            </fieldset>

            <div className="">{`Pen & Paper`}</div>
            <div className="">Adobe XD</div>
            <div className="">Figma</div>
            <div className="">Webflow</div>
            <div className="">Scratch</div>
          </div>
          <div className="border px-5 py-3 flex flex-col justify-center">
            <div><Image src="/images/Icon awesome-code.png" alt="" width="50" height="50" /></div>
            <div className="mb-5 font-[Roboto] font-bold text-2xl text-white">Front-end</div>
            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual</p>

            <fieldset class="border-t border-slate-300 mt-10 mb-2 font-[Roboto] font-semibold text-xl text-white">
              <legend class="mx-auto px-4">Tools</legend>
            </fieldset>
            
            <div className="">WordPress</div>
            <div className="">HTML</div>
            <div className="">CSS</div>
            <div className="">JavaScript</div>
            <div className="">React, NextJs, Veu, RedWood... etc</div>
          </div>
          <div className="border px-5 py-3 flex flex-col justify-center">
            <div><Image src="/images/Back-end icon.png" alt="" width="50" height="50" /></div>
            <div className="mb-5 font-[Roboto] font-bold text-2xl text-white">Back-end</div>
            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual</p>

            <fieldset class="border-t border-slate-300 mt-10 mb-2 font-[Roboto] font-semibold text-xl text-white">
              <legend class="mx-auto px-4">Tools</legend>
            </fieldset>
            
            <div className="">Python</div>
            <div className="">PHP</div>
            <div className="">Node Js</div>
            <div className="">Dj, Flask, Laravel, Firebase, Sanity, etc.</div>
            <div className="">MongoDB, MySQL, RestAPI… etc</div>
          </div>
        </div>
      </section>

      <section className="grid place-items-center text-center mt-20" style={{ padding: '0 15%' }}>
        <h1 className="mb-10" style={{ fontFamily: 'Cooper', fontSize: 45, fontWeight: 900 }}>Testimonies</h1>

        <Image src="/images/Icon awesome-quote-left.png" alt="" width="50px" height="50px" />

        <p className="mt-4 px-[15%]">Astute Full Stack Software Engineer with over 3 years of experience in Web development. offers expansive experience, supporting test case development and verification testing. Works collaboratively to design and build user</p>
        
        <div className="mt-10 flex justify-between items-center gap-36">
          <div className="text-4xl">{`<`}</div>
          <div className="flex gap-5">
            <Image src="/images/M.B Mainsara.png" alt="" width="50px" height="50px" />
            <div className="text-center">
              <div className="font-bold">M.B Mainasara</div> The CEO Blue chip universal services
            </div>
          </div>
          <div className="font-black text-4xl">{`>`}</div>
        </div>
      </section>

      <footer className="mt-28 pb-10 flex justify-center items-center gap-32">
        <div className="flex items-center gap-10">
          <div style={{ padding: '10px 30px', background: 'var(--main-color)', color: 'black' }}>
              Contact me</div>
          <ul className="text-base text-[#97979C] flex gap-8" style={{ fontFamily: 'Noto Sans', fontWeight: '500' }}>
            <li className="active">Portfolio</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex gap-10">
          <FiFacebook />
          <FiTwitter />
          <FiSend />
        </div>
      </footer>
    </div>
  )
}
