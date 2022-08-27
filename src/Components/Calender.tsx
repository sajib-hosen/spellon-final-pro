import React from 'react';
import helpLine from './imgs/helpLine.png';

const Calender = () => {
    return (
        <div className='sm:h-screen ' >
            <div className=' h-full flex justify-center items-center' >
                <div className=' sm:w-[1000px] h-[90%] rounded-lg shadow-xl flex sm:flex-row flex-col justify-center items-center ' >

                    <div className=' sm:w-5/12 flex flex-col justify-center items-center p-3 pr-5' >
                        <img className='mb-2' src={helpLine} alt="helpLine" />
                        <p className='text-sm mb-2' >Esther Howard</p>
                        <h2 className='text-2xl font-bold mb-3' >1-On-1 Meeting</h2>
                        <h3 className='text-xl font-semibold mb-2' >Schedule your 30-Minute Call with Yoji</h3>
                        <p className='sm:text-left mb-3' >Everything you need to know about working with Adverlo will be explained in this call with our founder. We will be able to have a clear understanding of the goals you want to be accomplished for your ad campaigns. During this call, you will be shown case studies of the different successes Adverlo has created for its clients.</p>
                        <p className='sm:text-left mb-3' >Find a time on the calendar that works for you, so you’ll be able to start your adventure with Adverlo.</p>
                    </div>

                    <div className='mb-2 border-indigo-600 sm:w-5/12 shadow-xl rounded-lg p-2'>
                        <p className='border-b font-semibold p-3' >SELECT A DAY</p>
                            <div className='flex justify-around items-center p-3' >
                            <p>&lt;</p>
                            <p>December 2022</p>
                            <p>&gt;</p>
                        </div>

                        <div className='flex justify-around items-center mt-2 p-3'>
                            <p className='text-red-500' >Sun</p>
                            <p>Mon</p>
                            <p>Tue</p>
                            <p>Wed</p>
                            <p>Thu</p>
                            <p>Fri</p>
                            <p className='text-red-500' >Sat</p>
                        </div>

                        <div className='grid grid-cols-7 gap-1 pb-10 p-2' >
                            <div className='p-2 rounded-md text-[#858585]' ></div>
                            <div className='p-2 rounded-md text-[#858585]' ></div>
                            <div className='p-2 rounded-md text-[#858585]' ></div>
                            <div className='p-2 rounded-md text-[#858585]' ></div>
                            <div className='p-2 rounded-md text-[#858585]' >1</div>
                            <div className='p-2 rounded-md text-[#858585]' >2</div>
                            <div className='p-2 rounded-md text-[#858585]' >3</div>
                            <div className='p-2 rounded-md text-red-500' >4</div>
                            <div className='p-2 rounded-md text-[#858585]' >5</div>
                            <div className='p-2 rounded-md text-[#858585]' >6</div>
                            <div className='p-2 rounded-md text-[#858585]' >7</div>
                            <div className='p-2 rounded-md text-[#858585]' >8</div>
                            <div className='p-2 rounded-md text-[#858585]' >9</div>
                            <div className='p-2 rounded-md text-red-500' >10</div>
                            <div className='p-2 rounded-md text-red-500' >11</div>
                            <div className='p-2 rounded-md text-[#858585]' >12</div>
                            <div className='p-2 rounded-md text-[#858585]' >13</div>
                            <div className='p-2 rounded-md text-[#858585]' >14</div>
                            <div className='p-2 rounded-md text-[#858585]' >15</div>
                            <div className='p-2 rounded-md text-[#858585]' >16</div>
                            <div className='p-2 rounded-md text-[#858585]' >17</div>
                            <div className='p-2 rounded-md text-[#858585]' >18</div>
                            <div className='p-2 rounded-md text-[#858585]' >19</div>
                            <div className='p-2 rounded-md text-[#858585]' >20</div>
                            <div className='p-2 rounded-md text-[#858585]' >21</div>
                            <div className='bg-[#5865F2] p-3 rounded-md text-white' >22</div>
                            <div className='p-2 rounded-md text-[#858585]' >23</div>
                            <div className='p-2 rounded-md text-[#858585]' >24</div>
                            <div className='p-2 rounded-md text-red-500' >25</div>
                            <div className='p-2 rounded-md text-[#858585]' >26</div>
                            <div className='p-2 rounded-md text-[#858585]' >27</div>
                            <div className='p-2 rounded-md text-[#858585]' >28</div>
                            <div className='p-2 rounded-md text-[#858585]' >29</div>
                            <div className='p-2 rounded-md text-[#858585]' >30</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Calender;