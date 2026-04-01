// import React, { use, useState } from 'react';
// import AvailableCard from '../availableCard/AvailableCard';
// import Cart from '../cart/Cart';


// const Tools = ({modelPromise,cart,setCart}) => {
//     const models = use(modelPromise);
//     const [activeTab,setActiveTab]=useState("Products");
//     const count=cart.length;
     
//     return (
//         <div className='max-w-[85%] mx-auto'>
//             <div className='text-center mb-15'>
//                 <h2 className='text-4xl font-bold mb-5'>Premium Digital Tools</h2>
//                 <p className='text-gray-400'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
//             </div>

//            <div className='flex justify-center'>
//             <button onClick={()=>setActiveTab("Products")} className={`px-8 py-2 rounded-full font-bold transition ${activeTab==='Products'?"text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]":"bg-gray-100 text-gray-500"}`}>Products</button>
//             <button onClick={()=>setActiveTab("Cart")} className={`px-8 py-2 rounded-full font-bold transition ${activeTab==='Cart'?"text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]":"bg-gray-100 text-gray-500"}`}>Cart({count})</button>
//            </div>

//           <div className='mt-10'>
//             {activeTab==="Products" ? (<div className='max-w-[85%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5'>
//                 {
//                     models.map(model => (
//                         <AvailableCard key={model.id} model={model} cart={cart} setCart={setCart}></AvailableCard>
                        
//                     ))
//                 }
//             </div>):(<div><Cart cart={cart} setCart={setCart}></Cart></div>)}
//           </div>
//         </div>
//     );
// };

// export default Tools;