import React from 'react';
import groupMens from './imgs/group-mans.png';
import paidAds from './imgs/paid-ads.png';
import mensSec from './imgs/mens-group2.png';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin( ScrollTrigger );


const WhatDoWeOffer = () => {


    React.useEffect(()=>{
        const tl = gsap.timeline();
        gsap.to("#add-img", {
            scale:1,
            opacity:1,
            duration: 1,
            scrollTrigger:{
                trigger:"#add-img",
                start: 'bottom 85%',
                end:'top 15%',
                toggleActions: "restart reverse restart reverse "
                // markers: true,
            }
        })
       
    

    },[])


    return (
        <div className='h-[calc(100vh)] ' >
     
        {/*Body ----------------------- */}
        <div className='h-full sm:flex justify-center items-center max-w-[90%] sm:max-w-[1000px] mx-auto ' >

            <div className=' w-full relative  ' >

                <div className='pt-20 sm:pt-2 mt-10' >
                    <p id='hd-txt' className='text-4xl font-bold ' >What Do We Offer?</p>
                </div>

                <div className='mt-[30px]'>
                    <div className='flex flex-col justify-center items-center' >
                        <img id='add-img' className='w-[217px] opacity-0 scale-0 ' src={ paidAds } alt="paid Ads" />
                        <img className='hidden sm:block w-[900px] mt-45' src={ groupMens } alt="paid Ads" />
                        <img className='sm:hidden block w-[900px] mt-45' src={ mensSec } alt="paid Ads" />
                    </div>
                </div>
            </div>

        </div>
    </div>
    );
};

export default WhatDoWeOffer;