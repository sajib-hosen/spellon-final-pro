import React from 'react';
import julie from './imgs/julie.png'
import ayeesha from './imgs/ayeesha.png'
import yoji from './imgs/yoji.png'

const MeetTheTeam = () => {
    return (
        <div className='h-[calc(100vh)] sm:mt-10 bg-gradient-to-b from-[#43003F] to-[#003634] text-white' >
     
        {/*Body ----------------------- */}
        <div className='h-full sm:flex max-w-[100%] sm:max-w-[1000px] mx-auto ' >

            <div className=' h-full max-w-[680px] mx-auto relative  ' >
                
                    <div className='text-center flex sm:flex-row flex-col justify-center items-center max-w-[90%] sm:max-w-[1000px] mx-auto h-[calc(100%-00px)] sm:h-[calc(100%-0px)]' >
                        <div className='text-center sm:p-2 flex flex-col justify-center '>
                            <h3 className='text-2xl font-bold mb-4' >Meet The A-Team</h3>
                            <p className='mb-4' >Founded by Yoji Selman who’s spent the past five years building social media brands while amassing hundreds of thousands of followers for his clients, Adverlo has assembled a team well-suited for the digital marketing growth of its clients.</p>
                            <p className='mb-4' >Equipped with the skillset to scale brands and businesses, Adverlo’s team is more than capable of fulfilling your marketing needs.</p>

                            <div className='flex justify-between items-center mt-12' >
                                <div className='flex justify-center items-center flex-col' >
                                    <img className='sm:w-[130px] w-[73px]' src={yoji} alt="julie" />
                                    <h3 className='sm:text-2xl text-md mt-2' >Yoji Selman</h3>
                                    <p>Founder</p>
                                </div>
                                <div className='flex justify-center items-center flex-col'>
                                    <img className='sm:w-[130px] w-[73px]' src={ayeesha} alt="ayeesha" />
                                    <h3 className='sm:text-2xl text-md mt-2' >Ayeesha Mae</h3>
                                    <p>Chief Marketing Officer</p>
                                </div>
    
                                <div className='flex justify-center items-center flex-col'>
                                    <img className='sm:w-[130px] w-[73px]' src={julie} alt="yoji" />
                                    <h3 className='sm:text-2xl text-md mt-2' >Julie Ocular</h3>
                                    <p className='text-sm' >Copywriter</p>
                                </div>
                            </div>
                        </div>
                    </div>
              
                <div className='sm:block hidden w-16 absolute left-[-60px] top-[200px] ' >
                    <div id='triangle-l' className='move-xy' ></div>
                </div>
                <div className='sm:block hidden w-16 absolute right-[0px] top-[100px] ' >
                    <div id='triangle-r' className='move-xy' ></div>
                </div>
            </div>

        </div>
    </div>
    );
};

export default MeetTheTeam;