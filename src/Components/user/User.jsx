import React from 'react';

const User = () => {
    return (
        <div className='text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-15 my-45'>
            <div className='max-w-[80%] mx-auto flex gap-45'>
                <div>
                    <p className='text-4xl font-bold mb-1'>50K+</p>
                    <p className='text-2xl text-gray-400'>Active Users</p>
                </div>
                <div className="hidden md:block h-15 w-[1px] bg-white/30"></div>
                <div>
                    <p className='text-4xl font-bold mb-1'>200+</p>
                    <p className='text-2xl text-gray-400'>Premium Tools</p>
                </div>
                <div className="hidden md:block h-15 w-[1px] bg-white/30"></div>
                <div>
                    <p className='text-4xl font-bold mb-1'>4.9</p>
                    <p className='text-2xl text-gray-400'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default User;