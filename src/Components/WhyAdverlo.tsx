import React from 'react';
import secBg from './imgs/sec2-bg.png'
import secGirl from './imgs/sec2-girl.png'
import secWd from './imgs/sec-2-wd.png'
import secMb from './imgs/sec2-group.png'
import smWd from './imgs/secSmWd.png'

const WhyAdverlo = () => {
    return (
        <div className='h-[calc(100vh)] sm:mt-20 ' >
            
      
            <div className='flex justify-center items-center flex-col-reverse sm:flex-row max-w-[90%] sm:max-w-[1000px] mx-auto  sm:h-[calc(100%-100px)]' >

                <div className=' sm:w-[55%] h-[350px] sm:h-[500px] w-full flex justify-center items-center flex-col ' >
                    <div className='relative h-1/2 sm:h-[500px] w-full ' >
                        <div className=' absolute z-10 bottom-[0] sm:bottom-[25%] left-10 sm:right-[calc(50%-25%)]' >
                            <img className='move-y1 w-[250px] sm:w-[565px]' src={secBg} alt="boys" />
                        </div>
                        <div className=' absolute bottom-[0] sm:bottom-[5%] left-[calc(5%)]' >
                            <img className='move-x2 z-10 w-[110px] sm:w-[165px] ' src={secGirl} alt="girl" />
                        </div>
                        <div className=' absolute bottom-[65%] sm:bottom-[70%] right-[60%] sm:right-[60%] ' >
                            <img className='move-xy w-[32px] sm:w-[60px]' src={secMb} alt="sms" />
                        </div>
                        <div className=' absolute bottom-[40%] sm:bottom-[35%] right-[15%]' >
                            <img className='move-x2 w-[90px] sm:w-[200px]' src={secWd} alt="setting" />
                        </div>
                        <div className=' absolute bottom-[50%] sm:bottom-[50%] right-[10%]' >
                            <img className='move-xy w-[50px] sm:w-[100px]' src={smWd} alt="setting" />
                        </div>
                    </div>
                </div>


                <div className='  sm:w-[45%] sm:p-2 flex flex-col justify-center sm:items-start '>
                    
                    <div className='flex flex-col sm:mt-10 sm:justify-start sm:text-start' >
                        <h2 className='text-3xl mb-4 sm:text-5xl' >Why Adverlo?</h2>
                    </div>
                    <div>
                        <p className='mt-3 sm:text-left ' >Adverlo is completely devoted to creating the best experience for our clients by delivering ad campaigns that work. Ads are essential in the current climate. You can't afford NOT to have ads. Good ads make money. We offer good ads.</p>
                    </div>
                    <div>
                        <p className='mt-3 sm:text-left ' >We value return on ad spend. Producing remarkable results puts our clients in the position they want. Scale your business and increase sales with Adverlo.</p>
                    </div>
                    <div>
                        <button className='bg-[#7423C6] p-3 mt-7 text-white rounded-full' >Speak to our team</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WhyAdverlo;