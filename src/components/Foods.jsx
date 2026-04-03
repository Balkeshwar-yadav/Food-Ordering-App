import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
const Foods = () => {
  return (
    <>
    <Navbar></Navbar>
    <div id="root">
    <div class="overflow-x-hidden mb-10">
       <section class="h-100  bg-no-repeat  bg-cover  bg-center w-full "
           style={{backgroundImage: "url(/assets/background.png)"}}>

            <div class="text-white text-4xl pt-50 pl-20 font-sans font-bold">
              <h2>All Foods</h2>
            </div>


          </section>
          <div>
            <div class="flex items-center justify-between mx-20 pt-20 p-4">
              <div
                class="h-10 w-2/4 border-1 border-red-200 text-start flex justify-between items-center px-3 cursor-pointer">
                <input type="text" placeholder="I'm looking for...." class="focus:outline-none "/>
                <span><i class="ri-search-line"></i></span>
              </div>
              <div class="w-1/4 h-10 border-1 border-red-200 ">

                <select name="" id="" class="w-full h-10 pl-3 cursor-pointer">
                  <option value=""> Default</option>
                  <option value=""> Alphabetically, A-Z</option>
                  <option value=""> Alphabetically, Z-A</option>
                  <option value=""> High Price</option>
                  <option value=""> Low Price</option>
                </select>

              </div>
            </div>

          <div class="mx-10 pt-20">
            <div class="grid grid-cols-4 gap-8 ">
              <div class="flex flex-col items-center border border-pink-100 ">
                <div class="p-3">
                  <img src="/assets/fastfoods/f1.png" alt=""
                    class="cursor-pointer flex items-center justify-center w-30 h-30 hover:scale-110"/>
                </div>
                <div class="flex flex-col justify-between items-center mb-4">
                  <h5 class="cursor-pointer font-gray-600 font-semibold p-3"><a href="/foods">Chicken Burger</a></h5>
                </div>
                <div class="flex items-center justify-between gap-30 m-6">
                  <div> <span class="text-red-600 text-2xl cursor-pointer">₹24</span></div>
                  <div><button class="py-2 px-3 bg-red-600 text-white rounded-lg cursor-pointer">Add
                      to cart</button></div>
                </div>
              </div>
              <div class="flex flex-col items-center border border-pink-100 ">
                <div class="p-3">
                  <img src="/assets/fastfoods/f2.png" alt=""
                    class="cursor-pointer flex items-center justify-center w-30 h-30 hover:scale-110"/>
                </div>
                <div class="flex flex-col justify-between items-center mb-4">
                  <h5 class="cursor-pointer font-gray-600 font-semibold p-3"><a href="/foods">Vegetarian Pizza</a></h5>
                </div>
                <div class="flex items-center justify-between gap-24 m-6">
                  <div> <span class="text-red-600 text-2xl cursor-pointer">₹115</span></div>
                  <div><button class="py-2  px-3 bg-red-600 text-white rounded-lg cursor-pointer">Add
                      to cart</button></div>
                </div>
              </div>

              <div class="flex flex-col items-center border border-pink-100 ">
                <div class="p-3">
                  <img src="/assets/fastfoods/f3.png" alt=""
                    class="cursor-pointer flex items-center justify-center w-30 h-30 hover:scale-110"/>
                </div>
                <div class="flex flex-col justify-between items-center mb-4">
                  <h5 class="cursor-pointer font-gray-600 font-semibold p-3"><a href="/foods">Double Cheese
                      Margherita</a></h5>
                </div>
                <div class="flex items-center justify-between gap-24 m-6">
                  <div> <span class="text-red-600 text-2xl cursor-pointer">₹110</span></div>
                  <div><button class="py-2 px-3 bg-red-600 text-white rounded-lg cursor-pointer">Add
                      to cart</button></div>
                </div>
              </div>

              <div class="flex flex-col items-center border border-pink-100 ">
                <div class="p-3">
                  <img src="/assets/fastfoods/f4.png" alt=""
                    class="cursor-pointer flex items-center justify-center w-30 h-30 hover:scale-110"/>
                </div>
                <div class="flex flex-col justify-between items-center mb-4">
                  <h5 class="cursor-pointer font-gray-600 font-semibold p-3"><a href="/foods">Maxican Green Wave</a>
                  </h5>
                </div>
                <div class="flex items-center justify-between gap-24 m-6">
                  <div> <span class="text-red-600 text-2xl cursor-pointer">₹110</span></div>
                  <div><button class="py-2 px-3 bg-red-600 text-white rounded-lg cursor-pointer">Add
                      to cart</button></div>
                </div>
              </div>

              <div class="flex flex-col items-center border border-pink-100 pb-2">
                <div class="p-3">
                  <img src="/assets/fastfoods/f5.png" alt=""
                    class="cursor-pointer flex items-center justify-center w-30 h-30 hover:scale-110"/>
                </div>
                <div class="flex flex-col justify-between items-center mb-4">
                  <h5 class="cursor-pointer font-gray-600 font-semibold p-3"><a href="/foods">Cheese Burger</a></h5>
                </div>
                <div class="flex items-center justify-between gap-30 m-6">
                  <div> <span class="text-red-600 text-2xl cursor-pointer">₹24</span></div>
                  <div><button class="py-2 px-3 bg-red-600 text-white rounded-lg cursor-pointer">Add
                      to cart</button></div>
                </div>
              </div>

              <div class="flex flex-col items-center border border-pink-100 ">
                <div class="p-3">
                  <img src="/assets/fastfoods/f6.png" alt=""
                    class="cursor-pointer flex items-center justify-center w-30 h-30 hover:scale-110"/>
                </div>
                <div class="flex flex-col justify-between items-center mb-6">
                  <h5 class="cursor-pointer font-gray-600 font-semibold p-3"><a href="/foods">Royal Cheese Burger</a>
                  </h5>
                </div>
                <div class="flex items-center justify-between gap-30 m-6">
                  <div> <span class="text-red-600 text-2xl cursor-pointer">₹24</span></div>
                  <div><button class="py-2 px-3 bg-red-600 text-white rounded-lg cursor-pointer">Add
                      to cart</button></div>
                </div>
              </div>
              <div class="flex flex-col items-center border border-pink-100 ">
                <div class="p-3">
                  <img src="/assets/fastfoods/f7.png" alt=""
                    class="cursor-pointer flex items-center justify-center w-30 h-30 hover:scale-110"/>
                </div>
                <div class="flex flex-col justify-between items-center mb-6">
                  <h5 class="cursor-pointer font-gray-600 font-semibold p-3"><a href="/foods">Seafood Pizza</a></h5>
                </div>
                <div class="flex items-center justify-between gap-24 m-6">
                  <div> <span class="text-red-600 text-2xl cursor-pointer">₹115</span></div>
                  <div><button class="py-2 px-3 bg-red-600 text-white rounded-lg cursor-pointer">Add
                      to cart</button></div>
                </div>
              </div>

              <div class="flex flex-col items-center border border-pink-100 ">
                <div class="p-3">
                  <img src="/assets/fastfoods/f8.png" alt=""
                    class="cursor-pointer flex items-center justify-center w-30 h-30 hover:scale-110"/>
                </div>
                <div class="flex flex-col justify-between items-center mb-4">
                  <h5 class="cursor-pointer font-gray-600 font-semibold p-3"><a href="/foods">Thin Cheese Pizza</a></h5>
                </div>
                <div class="flex items-center justify-between gap-24 m-6">
                  <div> <span class="text-red-600 text-2xl cursor-pointer">₹110</span></div>
                  <div><button class="py-2 px-3 bg-red-600 text-white rounded-lg cursor-pointer">Add
                      to cart</button></div>
                </div>
              </div>
              <div class="flex flex-col items-center border border-pink-100 ">
                <div class="p-3">
                  <img src="/assets/fastfoods/f9.png" alt=""
                    class="cursor-pointer flex items-center justify-center w-30 h-30 hover:scale-110"/>
                </div>
                <div class="flex flex-col justify-between items-center mb-4">
                  <h5 class="cursor-pointer font-gray-600 font-semibold p-3"><a href="/foods">Pizza With Mushroom</a>
                  </h5>
                </div>
                <div class="flex items-center justify-between gap-24 m-6">
                  <div> <span class="text-red-600 text-2xl cursor-pointer">₹115</span></div>
                  <div><button class="py-2 px-3 bg-red-600 text-white rounded-lg cursor-pointer">Add
                      to cart</button></div>
                </div>
              </div>
              <div class="flex flex-col items-center border border-pink-100 ">
                <div class="p-3">
                  <img src="/assets/fastfoods/f10.png" alt=""
                    class="cursor-pointer flex items-center justify-center w-30 h-30 hover:scale-110"/>
                </div>
                <div class="flex flex-col justify-between items-center mb-4">
                  <h5 class="cursor-pointer font-gray-600 font-semibold p-3"><a href="/foods">Classic Hamburger</a></h5>
                </div>
                <div class="flex items-center justify-between gap-30 m-6">
                  <div> <span class="text-red-600 text-2xl cursor-pointer">₹24</span></div>
                  <div><button class="py-2 px-3 bg-red-600 text-white rounded-lg cursor-pointer">Add
                      to cart</button></div>
                </div>
              </div>
              <div class="flex flex-col items-center border border-pink-100 ">
                <div class="p-3">
                  <img src="/assets/fastfoods/f11.png" alt=""
                    class="cursor-pointer flex items-center justify-center w-30 h-30 hover:scale-110"/>
                </div>
                <div class="flex flex-col justify-between items-center mb-4">
                  <h5 class="cursor-pointer font-gray-600 font-semibold p-3"><a href="/foods">Crunchy Bread</a></h5>
                </div>
                <div class="flex items-center justify-between gap-30 m-6">
                  <div> <span class="text-red-600 text-2xl cursor-pointer">₹35</span></div>
                  <div><button class="py-2 px-3 bg-red-600 text-white rounded-lg cursor-pointer">Add
                      to cart</button></div>
                </div>
              </div>
              <div class="flex flex-col items-center border border-pink-100 ">
                <div class="p-3">
                  <img src="/assets/fastfoods/f12.png" alt=""
                    class="cursor-pointer flex items-center justify-center w-30 h-30 hover:scale-110"/>
                </div>
                <div class="flex flex-col justify-between items-center mb-4">
                  <h5 class="cursor-pointer font-gray-600 font-semibold p-3"><a href="/foods">Delicious Bread</a></h5>
                </div>
                <div class="flex items-center justify-between gap-30 m-6">
                  <div> <span class="text-red-600 text-2xl cursor-pointer">₹35</span></div>
                  <div><button class="py-2 px-3 bg-red-600 text-white rounded-lg cursor-pointer">Add
                      to cart</button></div>
                </div>
              </div>
            </div>
        </div>
            

        </div>
      </div>
    </div>
    
    <Footer></Footer>

    </>
  )
}

export default Foods