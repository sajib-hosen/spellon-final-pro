import React from 'react';
import Ecommerce from './imgs/Ecommerce.png';
import Services from './imgs/support.png';
import Products from './imgs/Products.png';
import Business from './imgs/Business.png';
import Tech from './imgs/Tech.png';
import healthcare from './imgs/healthcare.png';




const BusinessOpt = () => {
    return (
        <div className='h-[calc(100vh)] overflow-hidden bg-gradient-to-b from-[#43003F] to-[#003634] text-white' >
     
        {/*Body ----------------------- */}
        <div className='h-full sm:flex max-w-[90%] sm:max-w-[1000px] mx-auto ' >

            <div className=' w-full relative  ' >

                <div className='pt-20 sm:pt-2 mt-10' >
                    <p className='text-3xl font-bold' >Ads For Businesses</p>
                    <p className='text-3xl font-bold' >And Brands All Over The World</p>
                </div>

                <div className=' grid grid-cols-3  gap-20 max-w-[800px] mt-20 mx-auto '>
                    <div className='flex flex-col justify-center items-center' >
                        <img className='w-[70px]' src={Ecommerce} alt="Ecommerce" />
                        <h2 className='mt-4'>Ecommerce</h2>
                    </div>
                    <div className='flex flex-col justify-center items-center' >
                        <img className='w-[70px]' src={Products} alt="support" />
                        <h2 className='mt-4'>Info Products</h2>
                    </div>
                    <div className='flex flex-col justify-center items-center' >
                        <img className='w-[70px]' src={Business} alt="Business" />
                        <h2 className='mt-4'>Your Business</h2>
                    </div>
                    <div className='flex flex-col justify-center items-center' >
                        <img className='w-[70px]' src={Tech} alt="Tech" />
                        <h2 className='mt-4'>Tech</h2>
                    </div>
                    <div className='flex flex-col justify-center items-center' >
                        <img className='w-[70px]' src={healthcare} alt="healthcare" />
                        <h2 className='mt-4'>Healthcare</h2>
                    </div>
                    <div className='flex flex-col justify-center items-center' >
                        <img className='w-[70px]' src={Services} alt="Services" />
                        <h2 className='mt-4'>General Services</h2>
                    </div>
            
                </div>

               
                <div className='sm:block hidden w-16 absolute left-[-60px] top-[200px] ' >
                    <div id='triangle-l' className='move-xy' ></div>
                </div>
                <div className='sm:block hidden w-16 absolute left-[90%] top-[100px] ' >
                    <div id='triangle-r' className='move-xy' ></div>
                </div>
            </div>

        </div>
    </div>
    );
};

export default BusinessOpt;