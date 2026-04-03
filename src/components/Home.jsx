import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>

    <div id="root">
        <div className="overflow-x-hidden  overflow-y-hidden">

    <header className="header m-0 p-0 w-full leading-25 h-25 fixed z-50 bg-white">
                <div className="container px-28 h-38 ">
                    <div className="flex items-center justify-between">
                        <div className=" w-37 h-37  text-center flex flex-col items-center   whitespace-nowrap ">
                            <img src={logo} alt="logo" className="h-15 w-15 cursor-pointer" />
                            <h5 className="text-black text-xl font-bold cursor-pointer">Fresh Bites</h5>
                        </div>

                        <div className="navigation">
                            <div className="flex items-center gap-7 justify-center font-bold flex-start cursor-pointer ">
                                       <Link to='/' className="text-red-600">Home</Link>
                                        <Link to='/foods' className="text-gray-600">Foods</Link>
                                        <Link to='/cart' className="text-gray-600">Cart</Link>
                                        <Link to='/contact' className="text-gray-600">Contact</Link>
                            </div>
                        </div>
                        <div className="flex items-center gap-8">
                            <span className="relative cursor-pointer">
                                <i className="fa-solid fa-basket-shopping text-gray-700 text-lg"></i>

                                <span
                                    className="absolute top-6 bg-red-600 text-white rounded-xl -right-2.5 h-4 w-4 flex items-center justify-center ">0</span>
                            </span>
                            <span className="text-black cursor-pointer ">
                                <a href="/login">

                                    <i className="fa-solid fa-user"></i>
                                </a>
                            </span>
                        </div>
                    </div>

                </div>
            </header>
            <div>
                <div className="w-full">
                    <section>
                        <div className="container mx-10 mt-30 mb-auto">
                            <div className="max-w-full max-h-160 flex items-center justify-center">
                                <div className=" max-w-2xl max-h-160 my-0">
                                    <div>
                                        <h5 className="font-medium text-xl leading-tight mb-2">Easy way to make an order
                                        </h5>
                                        <h1 className="text-5xl leading-14 font-bold font-sans mb-7"><span
                                                className="text-red-600">Hungry?</span>{" "}
                                            Just Wait
                                            <br/>
                                            food at {" "}
                                            <span className="text-red-600 ">your door</span>
                                        </h1>
                                        <p className="mb-7 text-lg leading-8 word-spacing-[10px]">Welcome to Fresh Bites,
                                            your ultimate destination for delicious and fresh online food
                                            ordering!
                                        </p>
                                        <div className="mb-10 ">
                                            <button
                                                className="bg-red-600 h-10 w-35 text-white mr-10 font-bold rounded-lg hover:bg-gray-800 cursor-pointer">
                                                Order now
                                                <span className="text-white"></span>
                                            </button>
                                            <button
                                                className="text-red-600 h-10 w-35 font-bold rounded-lg border-red-600 border-1">
                                                <a href="/foods">See all foods</a>
                                            </button>
                                        </div>
                                        <div className="inline-flex gap-10">
                                            <p className="flex items-center gap-2  font-bold text-gray-900 text-sm"> <span
                                                    className="bg-red-600 rounded-xl h-6 w-6 flex items-center justify-center"><i
                                                        className="fa-solid fa-car"></i></span>
                                                No shipping charge
                                            </p>
                                            <p className="flex items-center gap-2 font-bold text-gray-900 text-sm">
                                                <span className="h-6 w-6"><svg width="24" height="24" viewBox="0 0 24 24"
                                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M12 2L4 5V11C4 16 7.5 20.5 12 22C16.5 20.5 20 16 20 11V5L12 2Z"
                                                            fill="#E53935" />
                                                        <path d="M9.5 12.5L11 14L14.5 10.5" stroke="white"
                                                            strokeWidth="2" strokeLinecap="round"
                                                            strokeLinejoin="round" />
                                                    </svg></span> 100% secure checkout
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="max-w-2xl max-h-160">
                                    <div className="my-3 flex items-center justify-center my-15">
                                        <img src="/assets/hero.png" alt="$" className="object-contain"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="container mx-auto my-25">
                            <div className="row flex items-center justify-center gap-10">

                                <div className="div1 col-2 sm:col-3 md:col-4 lg:col-6">
                                    <div className=" category-item flex items-center gap-3 font-bold font-sans text-lg  w-76 h-30 px-4 py-8 rounded-lg
                                    cursor-pointer  transition-transform duration-300 ease-in-out hover:-translate-y-[20%]" style={{backgroundColor:" #fde4e4"}}>
                                        <div>
                                            <img src="/assets/gridImage/food1.png" alt=""/>
                                        </div>
                                        <h5>Fastfood</h5>
                                    </div>

                                </div>
                                <div className="div1 col-2 sm:col-3 md:col-4 lg:col-6">
                                    <div className=" category-item flex items-center gap-3 font-bold font-sans text-lg  w-76 h-30 px-4 py-8 rounded-lg
                                    cursor-pointer  transition-transform duration-300 ease-in-out hover:-translate-y-[20%]" style={{backgroundColor:" #fde4e4"}}>
                                        <div>
                                            <img src="/assets/gridImage/food2.png" alt=""/>
                                        </div>
                                        <h5>Pizza</h5>
                                    </div>

                                </div>
                                <div className="div1 col-2 sm:col-3 md:col-4 lg:col-6">
                                    <div className=" category-item flex items-center gap-3 font-bold font-sans text-lg  w-76 h-30 px-4 py-8 rounded-lg
                                    cursor-pointer  transition-transform duration-300 ease-in-out hover:-translate-y-[20%]" style={{backgroundColor:" #fde4e4"}}>
                                        <div>
                                            <img src="/assets/gridImage/food3.png" alt=""/>
                                        </div>
                                        <h5>Asian Food</h5>
                                    </div>

                                </div>
                                <div className="div1 col-2 sm:col-3 md:col-4 lg:col-6">
                                    <div className=" category-item flex items-center gap-3 font-bold font-sans text-lg  w-76 h-30 px-4 py-8 rounded-lg
                                    cursor-pointer  transition-transform duration-300 ease-in-out hover:-translate-y-[20%]" style={{backgroundColor:" #fde4e4"}}>
                                        <div>
                                            <img src="/assets/gridImage/food4.png" alt=""/>
                                        </div>
                                        <h5>Cold Drink</h5>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="container max-w-full mx-5">
                            <div className="row max-w-[1320px] mx-auto h-130">
                                <div className="flex items-center justify-center flex-col font-sans h-57">
                                    <h5 className="text-red-500 font-bold mb-4 text-xl leading-10">What we serve</h5>
                                    <h2 className="text-gray-900 text-4xl font-bold ">Just sit back at home</h2>
                                    <h2 className="text-gray-900 text-3xl font-bold mt-2">We will {" "}
                                        <span className="text-red-600 text-3xl font-bold ">take care</span>
                                    </h2>
                                    <p className="mt-4 mb-1 text-lg">At Fresh Bites, we serve a delectable array of dishes
                                        crafted with care
                                        and made with the freshest ingredients.
                                    </p>
                                    <p className="text-lg">From wholesome salad to savory entrees and delightful desserts,
                                        there's something to
                                        satisfy every craving.
                                    </p>
                                </div>
                                <div className="flex items-center justify-center gap-5 my-5">
                                    <div className=" mt-8 max-w-110 h-61 grid-cols-3 sm:col-2 md:col-3 lg:col-4 ">
                                        <div className="text-center mx-5 py-3 px-5 flex items-center justify-center flex-col h-61
                                    font-sans ">
                                            <img src="/assets/delivery/d1.png" alt="" className="h-18 w-20 mb-3"/>
                                            <h5 className="font-bold text-2xl font-sans mb-3">Quick Delivery</h5>
                                            <p className="text-lg font-normal text-gray-500">Experience lightning-fast
                                                delievery with Fresh Bites, ensuring your meal arrives swiftly
                                                to your doorstep. </p>
                                        </div>
                                    </div>
                                    <div className=" mt-8 max-w-110 h-61 sm:col-2 md:col-3 lg:col-4">
                                        <div className="text-center mx-5 py-3 px-5 flex items-center justify-center flex-col h-61
                                    font-sans ">
                                            <img src="/assets/delivery/d2.png" alt="" className="h-18 w-20 mb-3"/>
                                            <h5 className="font-bold text-2xl font-sans mb-3">Super Dine In</h5>
                                            <p className="text-lg font-normal text-gray-500">Experience the ultimate dining
                                                convenience with Super Dine In,
                                                where delicious meals are just a click away. </p>
                                        </div>
                                    </div>

                                    <div className=" mt-8 max-w-110 h-61 ">
                                        <div className="text-center mx-5 py-3 px-5 flex items-center justify-center flex-col h-61
                                    font-sans ">
                                            <img src="/assets/delivery/d3.png" alt="" className="h-18 w-20 mb-3"/>
                                            <h5 className="font-bold text-2xl font-sans mb-3">Easy Pick Up</h5>
                                            <p className="text-lg font-normal text-gray-500">Experience the convenience of
                                                easy pick up options making your Fresh Bites experience

                                                even more seamless. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                     <section>
                        <div className="conatiner mx-20 my-25">
                            <div className="row ">
                                <div className="text-center text-3xl mb-10 font-sans font-bold text-gray-800">
                                    <h2>Popular Foods</h2>
                                </div>
                                <div className="lg:col-12 bg-red-600 text-white py-6 rounded-lg flex gap-10 items-center justify-center
                                mb-5">
                                    <button
                                        className="px-4 py-3 bg-white text-center flex items-center cursor-pointer rounded-lg h-8 text-red-500"><span>All</span></button>
                                    <button className="flex items-center cursor-pointer gap-2 text-lg"><img
                                            src="/assets/popularFoods/burger.png" alt=""
                                            className="w-4 h-4" /><span>Burger</span></button>
                                    <button className="flex items-center cursor-pointer gap-2 text-lg"><img
                                            src="/assets//popularFoods/pizza.png" alt=""
                                            className="w-4 h-4"/><span>Pizza</span></button>
                                    <button className="flex items-center cursor-pointer gap-2 text-lg"><img
                                            src="/assets/popularFoods/snacks.png" alt=""
                                            className="w-4 h-4"/><span>Snacks</span></button>
                                    <button className="flex items-center cursor-pointer gap-2 text-lg"><img
                                            src="/assets/popularFoods/cold.png" alt=""
                                            className="w-4 h-4"/><span>Drinks</span></button>
                                </div>



                                <div className="grid grid-cols-4 gap-8 ">
                                    <div className="flex flex-col items-center border border-pink-100 ">
                                        <div className="p-3">
                                            <img src="/assets/fastfoods/f1.png" alt=""
                                                className="cursor-pointer flex items-center justify-center w-30 h-30 hover:scale-110" />
                                        </div>
                                        <div className="flex flex-col justify-between items-center mb-4">
                                            <h5 className="cursor-pointer font-gray-600 font-semibold p-3"><a
                                                    href="/foods">Chicken Burger</a></h5>
                                        </div>
                                        <div className="flex items-center justify-between gap-30 m-6">
                                            <div> <span className="text-red-600 text-2xl cursor-pointer">₹24</span></div>
                                            <div><button
                                                    className="py-2 px-3 bg-red-600 text-white rounded-lg cursor-pointer">Add
                                                    to cart</button></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center border border-pink-100 ">
                                        <div className="p-3">
                                            <img src="/assets/fastfoods/f2.png" alt=""
                                                className="cursor-pointer flex items-center justify-center w-30 h-30 hover:scale-110" />
                                        </div>
                                        <div className="flex flex-col justify-between items-center mb-4">
                                            <h5 className="cursor-pointer font-gray-600 font-semibold p-3"><a
                                                    href="/foods">Vegetarian Pizza</a></h5>
                                        </div>
                                        <div className="flex items-center justify-between gap-24 m-6">
                                            <div> <span className="text-red-600 text-2xl cursor-pointer">₹115</span></div>
                                            <div ><button
                                                    className="py-2  px-3 bg-red-600 text-white rounded-lg cursor-pointer">Add
                                                    to cart</button></div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center border border-pink-100 ">
                                        <div className="p-3">
                                            <img src="/assets/fastfoods/f3.png" alt=""
                                                className="cursor-pointer flex items-center justify-center w-30 h-30 hover:scale-110" />
                                        </div>
                                        <div className="flex flex-col justify-between items-center mb-4">
                                            <h5 className="cursor-pointer font-gray-600 font-semibold p-3"><a
                                                    href="/foods">Double Cheese Margherita</a></h5>
                                        </div>
                                        <div className="flex items-center justify-between gap-24 m-6">
                                            <div> <span className="text-red-600 text-2xl cursor-pointer">₹110</span></div>
                                            <div><button
                                                    className="py-2 px-3 bg-red-600 text-white rounded-lg cursor-pointer">Add
                                                    to cart</button></div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center border border-pink-100 ">
                                        <div className="p-3">
                                            <img src="/assets/fastfoods/f4.png" alt=""
                                                className="cursor-pointer flex items-center justify-center w-30 h-30 hover:scale-110" />
                                        </div>
                                        <div className="flex flex-col justify-between items-center mb-4">
                                            <h5 className="cursor-pointer font-gray-600 font-semibold p-3"><a
                                                    href="/foods">Maxican Green Wave</a></h5>
                                        </div>
                                        <div className="flex items-center justify-between gap-24 m-6">
                                            <div> <span className="text-red-600 text-2xl cursor-pointer">₹110</span></div>
                                            <div><button
                                                    className="py-2 px-3 bg-red-600 text-white rounded-lg cursor-pointer">Add
                                                    to cart</button></div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center border border-pink-100 pb-2">
                                        <div className="p-3">
                                            <img src="/assets/fastfoods/f5.png" alt=""
                                                className="cursor-pointer flex items-center justify-center w-30 h-30 hover:scale-110"/>
                                        </div>
                                        <div className="flex flex-col justify-between items-center mb-4">
                                            <h5 className="cursor-pointer font-gray-600 font-semibold p-3"><a
                                                    href="/foods">Cheese Burger</a></h5>
                                        </div>
                                        <div className="flex items-center justify-between gap-30 m-6">
                                            <div> <span className="text-red-600 text-2xl cursor-pointer">₹24</span></div>
                                            <div><button
                                                    className="py-2 px-3 bg-red-600 text-white rounded-lg cursor-pointer">Add
                                                    to cart</button></div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center border border-pink-100 ">
                                        <div className="p-3">
                                            <img src="/assets/fastfoods/f6.png" alt=""
                                                className="cursor-pointer flex items-center justify-center w-30 h-30 hover:scale-110" />
                                        </div>
                                        <div className="flex flex-col justify-between items-center mb-6">
                                            <h5 className="cursor-pointer font-gray-600 font-semibold p-3"><a
                                                    href="/foods">Royal Cheese Burger</a></h5>
                                        </div>
                                        <div className="flex items-center justify-between gap-30 m-6">
                                            <div> <span className="text-red-600 text-2xl cursor-pointer">₹24</span></div>
                                            <div><button
                                                    className="py-2 px-3 bg-red-600 text-white rounded-lg cursor-pointer">Add
                                                    to cart</button></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center border border-pink-100 ">
                                        <div className="p-3">
                                            <img src="/assets/fastfoods/f7.png" alt=""
                                                className="cursor-pointer flex items-center justify-center w-30 h-30 hover:scale-110"/>
                                        </div>
                                        <div className="flex flex-col justify-between items-center mb-6">
                                            <h5 className="cursor-pointer font-gray-600 font-semibold p-3"><a
                                                    href="/foods">Seafood Pizza</a></h5>
                                        </div>
                                        <div className="flex items-center justify-between gap-24 m-6">
                                            <div> <span className="text-red-600 text-2xl cursor-pointer">₹115</span></div>
                                            <div><button
                                                    className="py-2 px-3 bg-red-600 text-white rounded-lg cursor-pointer">Add
                                                    to cart</button></div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center border border-pink-100 ">
                                        <div className="p-3">
                                            <img src="/assets/fastfoods/f8.png" alt=""
                                                className="cursor-pointer flex items-center justify-center w-30 h-30 hover:scale-110"/>
                                        </div>
                                        <div className="flex flex-col justify-between items-center mb-4">
                                            <h5 className="cursor-pointer font-gray-600 font-semibold p-3"><a
                                                    href="/foods">Thin Cheese Pizza</a></h5>
                                        </div>
                                        <div className="flex items-center justify-between gap-24 m-6">
                                            <div> <span className="text-red-600 text-2xl cursor-pointer">₹110</span></div>
                                            <div><button
                                                    className="py-2 px-3 bg-red-600 text-white rounded-lg cursor-pointer">Add
                                                    to cart</button></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center border border-pink-100 ">
                                        <div className="p-3">
                                            <img src="/assets/fastfoods/f9.png" alt=""
                                                className="cursor-pointer flex items-center justify-center w-30 h-30 hover:scale-110"/>
                                        </div>
                                        <div className="flex flex-col justify-between items-center mb-4">
                                            <h5 className="cursor-pointer font-gray-600 font-semibold p-3"><a
                                                    href="/foods">Pizza With Mushroom</a></h5>
                                        </div>
                                        <div className="flex items-center justify-between gap-24 m-6">
                                            <div> <span className="text-red-600 text-2xl cursor-pointer">₹115</span></div>
                                            <div><button
                                                    className="py-2 px-3 bg-red-600 text-white rounded-lg cursor-pointer">Add
                                                    to cart</button></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center border border-pink-100 ">
                                        <div className="p-3">
                                            <img src="/assets/fastfoods/f10.png" alt=""
                                                className="cursor-pointer flex items-center justify-center w-30 h-30 hover:scale-110"/>
                                        </div>
                                        <div className="flex flex-col justify-between items-center mb-4">
                                            <h5 className="cursor-pointer font-gray-600 font-semibold p-3"><a
                                                    href="/foods">Classic Hamburger</a></h5>
                                        </div>
                                        <div className="flex items-center justify-between gap-30 m-6">
                                            <div> <span className="text-red-600 text-2xl cursor-pointer">₹24</span></div>
                                            <div><button
                                                    className="py-2 px-3 bg-red-600 text-white rounded-lg cursor-pointer">Add
                                                    to cart</button></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center border border-pink-100 ">
                                        <div className="p-3">
                                            <img src="/assets/fastfoods/f11.png" alt=""
                                                className="cursor-pointer flex items-center justify-center w-30 h-30 hover:scale-110"/>
                                        </div>
                                        <div className="flex flex-col justify-between items-center mb-4">
                                            <h5 className="cursor-pointer font-gray-600 font-semibold p-3"><a
                                                    href="/foods">Crunchy Bread</a></h5>
                                        </div>
                                        <div className="flex items-center justify-between gap-30 m-6">
                                            <div> <span className="text-red-600 text-2xl cursor-pointer">₹35</span></div>
                                            <div><button
                                                    className="py-2 px-3 bg-red-600 text-white rounded-lg cursor-pointer">Add
                                                    to cart</button></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center border border-pink-100 ">
                                        <div className="p-3">
                                            <img src="/assets/fastfoods/f12.png" alt=""
                                                className="cursor-pointer flex items-center justify-center w-30 h-30 hover:scale-110"/>
                                        </div>
                                        <div className="flex flex-col justify-between items-center mb-4">
                                            <h5 className="cursor-pointer font-gray-600 font-semibold p-3"><a
                                                    href="/foods">Delicious Bread</a></h5>
                                        </div>
                                        <div className="flex items-center justify-between gap-30 m-6">
                                            <div> <span className="text-red-600 text-2xl cursor-pointer">₹35</span></div>
                                            <div><button
                                                    className="py-2 px-3 bg-red-600 text-white rounded-lg cursor-pointer">Add
                                                    to cart</button></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center border border-pink-100 ">
                                        <div className="p-3">
                                            <img src="/assets/fastfoods/f13.png" alt=""
                                                className="cursor-pointer flex items-center justify-center w-30 h-30 hover:scale-110"/>
                                        </div>
                                        <div className="flex flex-col justify-between items-center">
                                            <h5 className="cursor-pointer font-gray-600 font-semibold p-3"><a
                                                    href="/foods">Loaf Bread</a></h5>
                                        </div>
                                        <div className="flex items-center justify-between gap-30 m-6">
                                            <div> <span className="text-red-600 text-2xl cursor-pointer">₹35</span></div>
                                            <div><button
                                                    className="py-2 px-3 bg-red-600 text-white rounded-lg cursor-pointer">Add
                                                    to cart</button></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center border border-pink-100 ">
                                        <div className="p-3">
                                            <img src="/assets/fastfoods/f14.png" alt=""
                                                className="cursor-pointer flex items-center justify-center w-30 h-30 hover:scale-110"/>
                                        </div>
                                        <div className="flex flex-col justify-between items-center">
                                            <h5 className="cursor-pointer font-gray-600 font-semibold p-3"><a
                                                    href="/foods">Red Bull</a></h5>
                                        </div>
                                        <div className="flex items-center justify-between gap-30 m-6">
                                            <div> <span className="text-red-600 text-2xl cursor-pointer">₹35</span></div>
                                            <div><button
                                                    className="py-2 px-3 bg-red-600 text-white rounded-lg cursor-pointer">Add
                                                    to cart</button></div>
                                        </div>
                                    </div>













                                </div>

                            </div>



                        </div>
               
                </section>

                
                <section>
                    <div className=" px-10">
                        <div className="grid grid-cols-2 px-20 ">
                            <div className="flex items-center justify-center">
                                <img src="/assets/side.png" alt="" />
                            </div>
                            <div>
                                <div >
                                    <h2 className="font-bold text-4xl mb-5">Why <span>Fresh Bites?</span></h2>
                                    <p>At Fresh Bites, we're not just a food service — we're a culinary journey.
                                        Discover the unparalleled freshness and taste that sets us apart. From
                                        farm-fresh ingredients to expertly crafted dishes, every bite is an experience
                                        worth savoring.

                                    </p>
                                    <ul className="font-sans">
                                        <li className="mt-8">
                                            <p className="font-bold">
                                                <i
                                                    className="fa fa-check border-1 rounded-xl p-1 h-4 text-center mr-2  text-[8px] text-red-600"></i>
                                                Fresh and tasty foods


                                            </p>
                                            <p className="mt-4">
                                                Indulge in a world of fresh and tasty foods meticulously prepared by our
                                                talented chefs. Each dish is a masterpiece of flavor, showcasing the
                                                finest ingredients and culinary expertise.
                                            </p>
                                        </li>
                                        <li className="mt-8">
                                            <p className="font-bold">
                                                <i
                                                    className="fa fa-check border-1 rounded-xl p-1 h-4 text-center mr-2  text-[8px] text-red-600"></i>
                                                Quality support
                                            </p>
                                            <p className="mt-4">
                                                At Fresh Bites, we pride ourselves on delivering not only exceptional
                                                food but also outstanding customer support.


                                            </p>
                                        </li>

                                        <li className="mt-8">
                                            <p className="font-bold">
                                                <i
                                                    className="fa fa-check border-1 rounded-xl p-1 h-4 text-center mr-2  text-[8px] text-red-600"></i>
                                                Order from any location


                                            </p>
                                            <p className="mt-4">
                                                With our convenient platform, delicious food is always just a tap away.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div>
                        <div className="mt-10">
                            <div className="text-center font-bold text-4xl text-black-700 ">
                                <h2>
                                    Hot Pizza
                                </h2>
                            </div>
                            <div className="grid grid-cols-4 gap-8  mx-15 py-10">
                                <div className="flex flex-col items-center border border-pink-100 ">
                                    <div className="p-3">
                                        <img src="/assets/fastfoods/f2.png" alt=""
                                            className="cursor-pointer flex items-center justify-center w-30 h-30 hover:scale-110"/>
                                    </div>
                                    <div className="flex flex-col justify-between items-center">
                                        <h5 className="cursor-pointer font-gray-600 font-semibold p-3"><a
                                                href="/foods">Vegetarian Pizza</a></h5>
                                    </div>
                                    <div className="flex items-center justify-between gap-30 m-6">
                                        <div> <span className="text-red-600 text-2xl cursor-pointer">₹115</span></div>
                                        <div><button
                                                className="py-2 px-3 bg-red-600 text-white rounded-lg cursor-pointer">Add
                                                to cart</button></div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center border border-pink-100 ">
                                    <div className="p-3">
                                        <img src="/assets/fastfoods/f3.png" alt=""
                                            className="cursor-pointer flex items-center justify-center w-30 h-30 hover:scale-110"/>
                                    </div>
                                    <div className="flex flex-col justify-between items-center">
                                        <h5 className="cursor-pointer font-gray-600 font-semibold p-3"><a
                                                href="/foods">Double Cheese Margherita</a></h5>
                                    </div>
                                    <div className="flex items-center justify-between gap-30 m-6">
                                        <div> <span className="text-red-600 text-2xl cursor-pointer">₹110</span></div>
                                        <div><button
                                                className="py-2 px-3 bg-red-600 text-white rounded-lg cursor-pointer">Add
                                                to cart</button></div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center border border-pink-100 ">
                                    <div className="p-3">
                                        <img src="/assets/fastfoods/f4.png" alt=""
                                            className="cursor-pointer flex items-center justify-center w-30 h-30 hover:scale-110"/>
                                    </div>
                                    <div className="flex flex-col justify-between items-center">
                                        <h5 className="cursor-pointer font-gray-600 font-semibold p-3"><a
                                                href="/foods">Maxican Green Wave</a></h5>
                                    </div>
                                    <div className="flex items-center justify-between gap-30 m-6">
                                        <div> <span className="text-red-600 text-2xl cursor-pointer">₹110</span></div>
                                        <div><button
                                                className="py-2 px-3 bg-red-600 text-white rounded-lg cursor-pointer">Add
                                                to cart</button></div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center border border-pink-100 ">
                                    <div className="p-3">
                                        <img src="/assets/fastfoods/f7.png" alt=""
                                            className="cursor-pointer flex items-center justify-center w-30 h-30 hover:scale-110"/>
                                    </div>
                                    <div className="flex flex-col justify-between items-center">
                                        <h5 className="cursor-pointer font-gray-600 font-semibold p-3"><a
                                                href="/foods">Seafood Pizza</a></h5>
                                    </div>
                                    <div className="flex items-center justify-between gap-30 m-6">
                                        <div> <span className="text-red-600 text-2xl cursor-pointer">₹115</span></div>
                                        <div><button
                                                className="py-2 px-3 bg-red-600 text-white rounded-lg cursor-pointer">Add
                                                to cart</button></div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div class="mx-20 my-15">
                        <div class="grid grid-cols-2 md:col-1 lg:col-2">
                            <div class="px-5">
                                <h5 class="mb-5 text-xl text-red-500 font-semibold ">Testimonial </h5>
                                <h2 class="text-4xl font-bold pb-6">
                                    What our {" "}
                                    <span class="text-red-600">customers</span>{" "}
                                    are saying
                                </h2>
                                <p class="text-gray-500 pb-20 leading-8 tracking-wide">
                                    Fresh Bites truly lives up to its name! Every bite bursts with freshness and flavor.
                                    From the crisp salads to the hearty sandwiches,
                                    each dish is a delightful journey for the taste buds.
                                </p>
                                <div class="">
                                    <p class="text-gray-500 leading-8 tracking-wide">
                                        "Fresh Bites redefines freshness with every dish.
                                        I couldn't believe the difference in taste until I tried their farm-to-table
                                        ingredients.
                                        It's like they've captured the essence of freshness in every bite."
                                    </p>
                                    <div class="flex items-center gap-5 pt-10 ">
                                        <img src="/assets/smithp.png" alt="" class="h-13 w-13 rounded-lg"/>
                                        <h6 class="font-bold">Smit Patel</h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src="/assets/map.png" alt="" class="h-159 w-159"/>
                            </div>
                        </div>
                    </div>
                </section>


                </div>
            </div>

            <footer>
            <div class="" style={{background: "#fde4e4"}}>
                <div class="px-20 py-10">
                    <div class="grid grid-cols-4 gap-10">

                        <div class="pt-0 ">
                            <img src="/assets/logo.png" alt="logo" class="h-15 w-15 cursor-pointer ml-2 "/>
                            <h5 class="text-black text-xl font-bold cursor-pointer">Fresh Bites</h5>
                            <p class="pt-4 leading-8 tracking-wide">
                                Welcome to Fresh Bites, your ultimate destination for delicious and
                                fresh online food ordering
                            </p>
                        </div>
                        <div class="gap-10">
                            <h5 class="font-bold text-xl text-black ">Delivery Time </h5>
                            <ul class="">
                                <li class="">
                                    <span class="font-bold text-sm pb-2">Monday - Friday</span>
                                    <p>10:00am - 11:00pm</p>
                                </li>
                                <li class="pt-8">
                                    <span class="font-bold text-sm pb-2">Saturday - Sunday</span>
                                    <p>Full Day</p>
                                </li>
                            </ul>
                        </div>
                        <div class="font-bold ">
                            <h5 class="text-xl">Contacts</h5>
                            <ul class="">
                                <li class="pt-4">
                                    <span>Location: Sola, Ahmedabad</span>
                                </li>
                                <li class="pt-4">
                                    <span>Phone: 8511755852</span>
                                </li>
                                <li class="pt-4">
                                    <span>Email: balkeshwar122433@gmail.com</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                              <h5 class="font-bold text-xl text-black" >Newsletter</h5>
                              <p class="pt-1 pb-3">Subscribe our newsletter</p>
                              <div class="border-1 rounded-lg h-13 py-3 px-2 text-lg flex items-center justify-between">
                                <input type="email" placeholder="Enter your email" class="border-none focus:outline-none focus:ring-0 focus:border-transparent"/>
                                <span class="border-1 rounded-lg bg-red-600 text-white px-6 py-1 cursor-pointer"><i class="ri-send-plane-line"></i></span>
                              </div>
                        </div>
                    </div>

                    <div class="mt-12 flex items-center justify-between">
                        <div class="text-red-500 ">
                            <p>Copyright - 2026, website made by Balkeshwar Yadav. All Rights Reserved.</p>
                        </div>
                        <div class="flex items-center justify-center gap-6">
                            <p>Follows:</p>
                            <span class="border-1 rounded-full bg-red-600 text-white  px-2 py-1 text-sm cursor-pointer"><a href="/facebook/balkeshwar"><i class="ri-facebook-line"></i></a></span>
                            <span class="border-1 rounded-full bg-red-600 text-white  px-2 py-1 text-sm cursor-pointer"><a href="/github/balkeshwar"><i class="ri-github-line"></i></a></span>
                            <span class="border-1 rounded-full bg-red-600 text-white  px-2 py-1 text-sm cursor-pointer"><a href="/youtube/balkeshwar"><i class="ri-youtube-line"></i></a></span>
                            <span class="border-1 rounded-full bg-red-600 text-white  px-2 py-1 text-sm cursor-pointer"><a href="/linkedin/balkeshwar"><i class="ri-linkedin-line"></i></a></span>
                        </div>
                    </div>
                </div>
 
            </div>
        </footer>
            
        </div>
    </div>
    </>
  )
}

export default Home