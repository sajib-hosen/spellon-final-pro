import React from 'react';
import heal from './imgs/heal.png'

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin( ScrollTrigger );

type pinHeiTy = {
    pinFor: number,
}


const ScaleYourBusiness = ({pinFor}:pinHeiTy) => {

    React.useEffect(()=>{
        gsap.to("#pinEle", {
            scrollTrigger:{
                trigger: "#pinEle",
                start: "top top",
                end: `+=${2000}`,
                pinSpacing: true,
                scrub: true,
                toggleActions:"restart none none none",
                pin: true,
            }
        })
    },[])


    return (
        <div className='h-screen  ' >
            <div id="pinEle" className='flex justify-between items-center flex-col h-screen ' >
                <h3 className='mt-[5%] text-4xl font-bold'>Scale Your Business To New Heights</h3>
                <div className='' >
                    <img className='max-w-[910px] max-h-[302px] sm:max-h-[500px] mx-auto' src={heal} alt="heal" />
                </div>
            </div>
        </div>
    );
};

export default ScaleYourBusiness;