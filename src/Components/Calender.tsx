import React from 'react';
import helpLine from './imgs/helpLine.png';

const Calender = () => {
    return (
        <div className='h-screen ' >
            <div className='border h-full flex justify-center items-center' >
                <div className=' w-[90%] sm:w-[1000px] h-[80%] rounded-lg shadow-xl flex justify-center items-center ' >
                    <div className=' w-5/12 flex flex-col justify-center items-center p-2' >
                        <img className='mb-2' src={helpLine} alt="helpLine" />
                        <p className='text-sm mb-2' >Esther Howard</p>
                        <h2 className='text-2xl font-bold mb-3' >1-On-1 Meeting</h2>
                        <h3 className='text-xl font-semibold mb-2' >Schedule your 30-Minute Call with Yoji</h3>
                        <p className='text-left mb-3' >Everything you need to know about working with Adverlo will be explained in this call with our founder. We will be able to have a clear understanding of the goals you want to be accomplished for your ad campaigns. During this call, you will be shown case studies of the different successes Adverlo has created for its clients.</p>
                        <p className='text-left mb-3' >Find a time on the calendar that works for you, so you’ll be able to start your adventure with Adverlo.</p>
                    </div>
                    <div className='border w-5/12'>Calender</div>
                </div>
            </div>
        </div>
    );
};

export default Calender;