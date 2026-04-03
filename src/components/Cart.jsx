import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
const Cart = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div id="root">
        <div class="overflow-x-hidden">

      
          <section class="h-100  bg-no-repeat  bg-cover  bg-center w-full "
           style={{backgroundImage: "url(/assets/background.png)"}}>

            <div class="text-white text-4xl pt-50 pl-20 font-sans font-bold">
              <h2>Your Cart</h2>
            </div>


          </section>
          
          <section>
            <div className='mb-10'>
                <div class="mx-25" >
                    <div class=" pt-20 w-full flex items-center justify-center" >
                        <table class="table-auto border-collapse border border-gray-300 w-full">
                           <thead>
                            <tr>
                                <th class="px-4 py-2 border border-gray-300">Image</th>
                                <th class="px-4 py-2 border border-gray-300">Product Title</th>
                                <th class="px-4 py-2 border border-gray-300">Price</th>
                                <th class="px-4 py-2 border border-gray-300">Quantity</th>
                                <th class="px-4 py-2 border border-gray-300">Delete</th>

                            </tr>
                           </thead>
                           <tbody>
                            <tr>
                                <td class="flex items-center justify-center p-2 border border-gray-300"><img src="/assets//fastfoods/f8.png" alt="" class="h-16 w-16"/></td>
                                <td class="text-center border border-gray-300">Double Cheese Margherita</td>
                                <td class="text-center border border-gray-300">₹ 110</td>
                                <td class="text-center border border-gray-300">1 px</td>
                                <td class="text-center border border-gray-300"><i class="ri-delete-bin-line"></i></td>
                            </tr>
                             <tr>
                                <td class="flex items-center justify-center p-2 border border-gray-300"><img src="/assets//fastfoods/f4.png" alt="" class="h-16 w-16"/></td>
                                <td class="text-center border border-gray-300">Maxican Green Wave</td>
                                <td class="text-center border border-gray-300">₹ 110</td>
                                <td class="text-center border border-gray-300">1 px</td>
                                <td class="text-center border border-gray-300"><i class="ri-delete-bin-line"></i></td>
                            </tr>
                             <tr>
                                <td class="flex items-center justify-center p-2 border border-gray-300"><img src="/assets//fastfoods/f9.png" alt="" class="h-16 w-16"/></td>
                                <td class="text-center border border-gray-300">Vegetarian Pizza</td>
                                <td class="text-center border border-gray-300">₹ 115</td>
                                <td class="text-center border border-gray-300">2 px</td>
                                <td class="text-center border border-gray-300"><i class="ri-delete-bin-line"></i></td>
                            </tr>
                           </tbody>
                        </table>
                     </div>
                        <div class="pt-10">
                            <h6 class="text-2xl font-sans font-bold text-black">Subtotal: ₹ <span class="text-red-600 text-4xl">450</span></h6>
                            <p class="pt-2 pb-4">Taxes and shipping will calculate at checkout</p>
                            <div>
                                <button class="border rounded-lg bg-red-600 text-white p-2 ">Continue Shopping</button>
                                <button class="border rounded-lg bg-red-600 text-white p-2 ml-4">Proceed to chechout</button>
                            </div>
                        </div>
                    
                </div>
            </div>
          </section>


       

        </div>
    </div>
        <Footer></Footer>
    </div>
  )
}

export default Cart