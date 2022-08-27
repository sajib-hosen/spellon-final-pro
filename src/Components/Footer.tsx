import React from 'react';
import footerImg from './imgs/footerImg.png'

const Footer = () => {
    return (
        <div className='h-screen' >
            <div className='sm:footer-red bg-gradient-to-b from-[#2D032A] to-[#02201E] h-full relative' >
                <div className=' text-white flex justify-center items-center flex-col h-full' >
                    <h1 className='text-3xl mb-7'>Have Any Questions?</h1>
                    <div>
                        <img className='w-[700px]' src={footerImg} alt="footerImg" />
                    </div>
                    <p className='mt-10' >If you have any inquiries and would like to speak directly to our team, feel free to contact us via</p>
                    <p>email at: <span className='font-bold' >hello@adverlo.com</span></p>

                    <div className='border-t absolute bottom-0 w-full flex sm:flex-row flex-col justify-around p-3' >
                        <div>
                            <p>Adverlo Digital Marketing</p>
                        </div>
                        <div>
                            <p>All Rights Reserved | Privacy Policy</p>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    );
};

export default Footer;