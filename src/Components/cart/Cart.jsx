import React from 'react';
import writingImg from '../../assets/products/writing_2327400 1.png'
import { ToastContainer, toast } from 'react-toastify';

const Cart = ({cart,setCart}) => {

    const handleRomve=(id) =>{
        toast.success("Itmes reomve successfully!")
        const updateCart = cart.filter (item => item.id !== id);
        setCart(updateCart);
    }

    const handleCheckout= () =>{
        if (cart.length>0){
            toast.error("All item clear");
            setCart([]);
        }
    }
    const totalPrice=cart.reduce((total,item)=>total+item.price,0)
    return (
        <div>
            <h2 className='text-2xl font-bold mb-5'>Your Cart</h2>

            {
                cart.length === 0 ? (
                    <p className='text-2xl font-bold text-center'>Your cart is empty</p>
                ) : (
                    <>
                {
                cart.map(item=>(
                    <div key={item.id}>
                        <div className='flex justify-between bg-gray-100 p-5 rounded-2xl mb-3'>
                            <div className='flex gap-3 items-center'>
                         <img src={writingImg} alt={item.name} className='h-10 w-auto' />
                        <div>
                            <h2 className='font-bold my-2'>{item.name}</h2>
                            <p className='text-gray-400'>${item.price}</p>
                        </div>
                       </div>
                       <button onClick={() => handleRomve(item.id)} className='text-red-500'>Remove</button>
                        </div>
                    </div>
                ))
            }
            <div className='flex justify-between'>
            <p>Total:</p>
            <p className='text-xl font-bold'>${totalPrice.toFixed(2)}</p>
        </div>
        <button onClick={()=>handleCheckout()} className='text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full rounded-full mt-2 py-3'>Proceed to Checkout</button>
        </>
                )
            }
            </div>
    );
};

export default Cart;