import React from 'react';
import bgWo from './imgs/bg-Wo.png'
import chartWo from './imgs/chart-Wo.png'
import girlWo from './imgs/girl-Wo.png'
import helWo from './imgs/hel-Wo.png'
import rightWo from './imgs/right-Wo.png'
import sms1Wo from './imgs/sms1-Wo.png'
import sms2Wo from './imgs/sms2-Wo.png'
import windoWo from './imgs/windo-Wo.png'
import trxtWo from './imgs/trxt-Wo.png'




const WhatOther = () => {
    return (
        <div className='h-[calc(100vh)] overflow-hidden bg-gradient-to-b from-[#43003F] to-[#003634] text-white' >
     
        {/*Body ----------------------- */}
        <div className='h-full sm:flex max-w-[100%] sm:max-w-[1000px] mx-auto ' >

            <div className=' h-full w-full relative  ' >
                
                    <div className=' flex sm:flex-row flex-col justify-center items-center max-w-[90%] sm:max-w-[1000px] mx-auto h-[calc(100%-00px)] sm:h-[calc(100%-0px)]' >

                        <div className='z-20 sm:w-[50%] sm:p-2 flex flex-col justify-center sm:items-start '>
                            
                            <div className='flex flex-col sm:justify-start sm:text-start' >
                                <h2 className='text-3xl mb-2' >What Other</h2>
                                <h2 className='text-3xl mb-2' >Services do we offer?</h2>
                            </div>
                            <div>
                                <p className='mt-3 sm:text-left ' ><span className='font-bold'>None.</span> We’re good at ads, so we’ll stick with ads. Other agencies will try and hand out an entire menu of services for you to choose from, but we’ll give you a single option that will catapult your business due to the quality of service provided. We believe that focusing on our craft will allow us to provide exceptional results for our clients while not overpromising multiple services that may not meet our standards.</p>
                            </div>
                            <div>
                                <p className='mt-3 sm:text-left ' >If you want good ads, we’re here for you. It’s what we do.</p>
                            </div>
                            <div>
                                <button className='bg-[#7423C6] p-3 mt-5 text-white rounded-full' >Speak to our team</button>
                            </div>
                        </div>


                        <div className=' w-full relative sm:h-full sm:w-[50%] flex justify-center items-center flex-col ' >
                            <div className=' h-[165px] sm:h-[587px] w-full ' >
                                <div className=' absolute z-20 bottom-[5px] sm:bottom-[10%] right-[25%] sm:right-[calc(14%)]' >
                                    <img className='move-y1 w-[80px] sm:w-[170px]' src={girlWo} alt="boys" />
                                </div>
                                <div className=' absolute z-10 bottom-[0] sm:bottom-[10%] right-[25%] sm:right-[calc(10%)]' >
                                    <img className=' w-[200px] sm:w-[783px]' src={bgWo} alt="boys" />
                                </div>
                                <div className=' absolute z-20 bottom-[78%] right-[75%] sm:bottom-[60%] sm:right-[calc(80%)]' >
                                    <img className='move-xy w-[30px] sm:w-[72px]' src={chartWo} alt="boys" />
                                </div>
                                <div className=' absolute z-10 bottom-[50%] right-[50%] sm:bottom-[50%] sm:right-[calc(45%)]' >
                                    <img className=' w-[80px] sm:w-[172px]' src={helWo} alt="boys" />
                                </div>
                                <div className=' absolute z-10 bottom-[60%] right-[50%] sm:bottom-[60%] sm:right-[calc(45%)]' >
                                    <img className=' w-[10px] sm:w-[30px]' src={rightWo} alt="boys" />
                                </div>
                                <div className=' absolute z-10 bottom-[63%] right-[16%] sm:bottom-[58%] sm:right-[calc(8%)]' >
                                    <img className='move-x1 w-[30px] sm:w-[72px]' src={sms1Wo} alt="boys" />
                                </div>
                                <div className=' absolute z-20 bottom-[30%] right-[50%] sm:bottom-[30%] sm:right-[calc(47%)]' >
                                    <img className='move-y1 w-[27px] sm:w-[72px]' src={sms2Wo} alt="boys" />
                                </div>
                                <div className=' absolute z-10 bottom-[30%] right-[60%] sm:bottom-[30%] sm:right-[calc(60%)]' >
                                    <img className=' w-[65px] sm:w-[172px]' src={windoWo} alt="boys" />
                                </div>
                                <div className=' absolute z-10 bottom-[55%] right-[54%] sm:bottom-[55%] sm:right-[calc(54%)]' >
                                    <img className=' w-[28px] sm:w-[72px]' src={trxtWo} alt="boys" />
                                </div>
                               
                            </div>
                        </div>

                    </div>
            



              
                <div className='sm:block hidden w-16 absolute left-[0%] top-[200px] ' >
                    <div id='triangle-l' className='move-xy' ></div>
                </div>
                <div className='sm:block hidden w-16 absolute left-[90%] top-[100px]  ' >
                    <div id='triangle-b2' className='move-xy' ></div>
                </div>
            </div>

        </div>
    </div>
    );
};

export default WhatOther;