import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa6";
import writingImg from '../../assets/products/writing_2327400 1.png'
import { ToastContainer, toast } from 'react-toastify';

const tagStyle={
    "new": "bg-green-100 text-green-700 border-green-200",
    "popular": "bg-purple-100 text-purple-700 border-purple-200",
    "best seller": "bg-amber-100 text-amber-700 border-amber-200",
}

const AvailableCard = ({model,cart,setCart}) => {
    const [buy,setBuy]=useState(false);
    const handleBuy = () =>{
            setCart([...cart,model]);
            setBuy(true);
         toast.success('Cart is added');
    }
    return (
        <div className='shadow-xl rounded-2xl p-5'>
                            <div className='flex justify-between'>
                                <img src={writingImg} alt={model.name} />
                                <p className={` px-3 py-1 rounded-full font-bold text-xs ${tagStyle[model.tagType] || 'bg-gray-100'}`}>{model.tag}</p>
                            </div>
                            <div>
                                <h2 className='text-2xl font-bold m-2'>{model.name}</h2>
                                <p className='text-gray-400 p-3'>{model.description}</p>
                                <p className='p-2'><span className='font-bold text-xl'>${model.price}</span><span className='text-gray-400'>/{model.period}</span></p>
                                   <ul>
                                    {
                                        model.features.map((feature,index) =>(
                                            <li key={index} className='flex gap-2 items-center text-gray-400'><FaCheck className='text-green-500' />{feature}</li>
                                        ))
                                    }
                </ul>
                 <button onClick={handleBuy} className=" text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full p-2 font-bold rounded-full mt-5">{buy ?"Added to cart": "Buy Now"}</button>
            </div>
        </div>
    );
};

export default AvailableCard;