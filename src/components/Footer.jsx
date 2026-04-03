import React from 'react'

const Footer = () => {
  return (
    <div>
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
  )
}

export default Footer