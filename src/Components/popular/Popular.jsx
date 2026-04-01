import React from 'react';
import { FaCheck } from "react-icons/fa6";

const Popular = () => {
    return (
        <div className='shadow-2xl rounded-2xl p-16'>
            <div className='max-w-[85%] mx-auto'>
                <div>
                <div className='text-center mb-10'>
                    <h2 className='font-bold text-2xl mb-4'>Simple, Transparent Pricing</h2>
                    <p className='text-gray-400'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>
                <div className='flex flex-col md:flex-row flex-wrap md:flex-nowrap justify-between '>
                    <div className='bg-gray-100 p-5 rounded-2xl'>
                    
                        <div>
                            <h2 className='font-bold'>Stater</h2>
                        <p className='text-gray-400'>Perfect for getting started</p>
                        </div>
                    
                    
                        <div><p className='py-5'><span className='text-3xl font-bold'>$0</span><span className='text-gray-400'>/Month</span></p></div>
                    
                    
                    <div>
                            <ul className='text-gray-400 mb-10'>
                            <li className='flex'><FaCheck className='text-green-500' /> Access to 10 free tools</li>
                            <li className='flex'><FaCheck className='text-green-500' /> Basic templates</li>
                            <li className='flex'><FaCheck className='text-green-500'/> Community supportCommunity support</li>
                            <li className='flex'><FaCheck className='text-green-500'/> 1 project per month</li>
                        </ul>
                    </div>
                    
                       <div>
                         <button className=" text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full py-2 font-bold rounded-full">Get Started Free</button>
                       </div>
                  </div>
                <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-5 rounded-2xl'>
                    <div className='flex justify-center  -mt-8'>
                        <p className='bg-amber-100 text-amber-700 border-amber-200 text-center px-3 py-1 rounded-full'>most popular</p>
                    </div>
                    <div>
                        <h2 className='font-bold text-white'>Pro</h2>
                        <p className='text-white'>Best for professionals</p>
                    </div>
                    <div>
                        <p className='py-5'><span className='text-3xl font-bold text-white'>$29</span><span className='text-white'>/Month</span></p>
                    </div>
                    <div>
                        <ul className='text-white mb-10'>
                            <li className='flex'><FaCheck className='text-green-500' /> Access to all premium tools</li>
                            <li className='flex'><FaCheck className='text-green-500' /> Unlimited templates</li>
                            <li className='flex'><FaCheck className='text-green-500'/> Priority support</li>
                            <li className='flex'><FaCheck className='text-green-500'/> Unlimited projects</li>
                            <li className='flex'><FaCheck className='text-green-500'/> Cloud sync</li>
                            <li className='flex'><FaCheck className='text-green-500'/> Advanced analytics</li>
                        </ul>
                    </div>
                    <div>
                        <button className=" text-[#4F39F6] bg-linear-to-r from-[#FFFFFF] to-[#FFFFFF] w-full py-2 font-bold rounded-full">Start Pro Trial</button>
                    </div>
                </div>
                <div className='bg-gray-100 p-5 rounded-2xl'>
                    <div>
                        <h2 className='font-bold'>Enterprise</h2>
                        <p className='text-gray-400'>For teams and businesses</p>
                    </div>
                    <div>
                        <p className='py-5'><span className='text-3xl font-bold'>$99</span><span className='text-gray-400'>/Month</span></p>
                    </div>
                    <div>
                        <ul className='text-gray-400 mb-10'>
                            <li className='flex'><FaCheck className='text-green-500' /> Everything in Pro</li>
                            <li className='flex'><FaCheck className='text-green-500' /> Team collaboration</li>
                            <li className='flex'><FaCheck className='text-green-500'/> Custom integrations</li>
                            <li className='flex'><FaCheck className='text-green-500'/> Dedicated support</li>
                            <li className='flex'><FaCheck className='text-green-500'/> SLA guarantee</li>
                            <li className='flex'><FaCheck className='text-green-500'/> Custom branding</li>
                        </ul>
                    </div>
                    <div>
                        <button className=" text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full py-2 font-bold rounded-full">Contact Sales</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Popular;