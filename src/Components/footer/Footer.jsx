import React from 'react';
import instragram from '../../assets/products/Instagram.png'
import facebook from '../../assets/products/Facebook.png'
import twitter from '../../assets/products/Twitter.png'

const Footer = () => {
    return (
        <div className='bg-[#101727] text-white'>
            <div className=' max-w-[85%] mx-auto p-30 flex justify-between'>
                <div>
                    <h2 className='text-4xl font-bold'>Digitools</h2>
                    <p className='mt-5 text-gray-600'>Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
                </div>
                <div>
                    <h2 className='font-bold text-xl'>Product</h2>
                    <ul className='py-2'>
                        <li className='text-gray-500'><a href="">Features</a></li>
                        <li className='text-gray-500'><a href="">Pricing</a></li>
                        <li className='text-gray-500'><a href="">Templates</a></li>
                        <li className='text-gray-500'><a href="">Integrations</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-bold text-xl'>Company</h2>
                    <ul className='py-2 text-gray-500'>
                        <li><a href="">About</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Careers</a></li>
                        <li><a href="">Press</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-bold text-xl'>Resources</h2>
                    <ul className='py-2 text-gray-500'>
                        <li><a href="">Documentation</a></li>
                        <li><a href="">Help Center</a></li>
                        <li><a href="">Community</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-xl font-bold mb-5'>Social Links</h2>
                    <div className='flex gap-3'>
                        <img src={instragram} alt="" />
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                    </div>
                </div>
                </div>
                <hr className='text-gray-600 max-w-[85%] mx-auto mb-2' />
                <div className='text-gray-600 max-w-[85%] mx-auto flex justify-between'>
                    <p>© 2026 Digitools. All rights reserved.</p>
                    <div className='flex gap-7 mb-10'>
                        <p>Privacy Policy</p>
                        <p> Terms of Service</p>
                        <p>Cookies</p>
                    </div>
            </div>
        </div>
    );
};

export default Footer;