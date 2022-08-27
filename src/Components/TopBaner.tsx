import React, { useEffect } from 'react';
import tobBanerMan from './imgs/boy.png'
import tobGirl from './imgs/girl.png'
import sms from './imgs/sms.png'
import setting from './imgs/setting.png'
import chart from './imgs/chart.png'
import logo from './imgs/Adverlo-C1.png'
import vector from './imgs/Vector-sv.png'
import Intersect from './imgs/Intersect.png'


import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin( ScrollTrigger );

const TopBaner = () => {




    return (
        <div className='h-[calc(100vh)] bg-gradient-to-b from-[#43003F] to-[#003634] text-white' >

            {/* Navigation section----------------- */}
            <nav className='max-w-[90%] sm:max-w-[1000px] mx-auto p-3 flex justify-between items-center ' >
                <div>
                    <img className='' width="180px" src={logo} alt="logo" />
                </div>
                <div className='flex justify-center items-center ' >
                    <button className='mr-5' >Why Adverlo?</button>
                    <button className='mr-5' >Services</button>
                    <button className=' bg-[#F13A9E] p-3 hidden sm:block px-4 rounded-full ' >Speak to our team</button>
                </div>
            </nav>
            
            {/* Banner Body ----------------------- */}
            <div className=' sm:flex max-w-[90%] sm:max-w-[1000px] mx-auto h-[calc(100%-00px)] sm:h-[calc(100%-100px)]' >

                <div className='  sm:w-[45%] sm:p-2 flex flex-col justify-center sm:items-start '>
                    
                    <div className='flex flex-col sm:justify-start sm:text-start' >
                        <h2 className='text-3xl sm:text-5xl' >We Convert Clicks</h2>
                        <h2 className='text-3xl sm:text-5xl' >Into Customers</h2>
                    </div>
                    <div>
                        <p className='mt-3 text-center' >Ads cost money. Good ads make money.</p>
                    </div>
                    <div>
                        <p className='mt-3 sm:text-left text-center' >It’s time to maximize results and sales to make the most of your ad budget.</p>
                    </div>
                    <div>
                        <button className='bg-[#7423C6] p-3 mt-4 sm:block hidden rounded-full' >Speak to our team</button>
                        <button className=' bg-[#F13A9E] p-3 px-4 block sm:hidden mx-auto mt-5 rounded-full ' >Speak to our team</button>
                    </div>
                </div>

                <div className='relative h-1/2 sm:h-full sm:w-[55%] flex justify-center items-center flex-col ' >
                    <div className=' h-[687px] w-full ' >
                        <div className=' absolute z-10 bottom-[0] sm:bottom-[5%] left-0 sm:right-[calc(50%-5%)]' >
                            <img className='move-x1 w-[98px] sm:w-[165px]' src={tobBanerMan} alt="boys" />
                        </div>
                        <div className=' absolute bottom-[0] sm:bottom-[5%] right-[calc(5%)]' >
                            <img className='move-x2 z-10 w-[110px] sm:w-[165px] ' src={tobGirl} alt="girl" />
                        </div>
                        <div className=' absolute bottom-[35%] sm:bottom-[40%] right-[35%] sm:right-[30%] ' >
                            <img className='move-xy w-[32px] sm:w-[60px]' src={sms} alt="sms" />
                        </div>
                        <div className=' absolute bottom-[20%] sm:bottom-[25%] right-[55%]' >
                            <img className='move-y1 w-[50px] sm:w-[80px]' src={setting} alt="setting" />
                        </div>
                        <div className=' absolute bottom-[50%] sm:bottom-[280px]  left-[100px]' >
                            <img className='sm:w-[300px] w-[130px]' src={chart} alt="chart" />
                        </div>
                    </div>
                </div>

            </div>
            <div className='' >
                <img className=' absolute bottom-0 sm:bottom-[00px] z-20 ' src={vector} alt="wave" />
                <img className=' absolute bottom-0 sm:bottom-[00px] z-20' src={Intersect} alt="wave" />
            </div>
        </div>
    );
};

export default TopBaner;