import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
    <Navbar></Navbar>
    <div id="root">
      <div class="overflow-x-hidden">
        <section
          class="h-100  bg-no-repeat  bg-cover  bg-center w-full "
          style={{backgroundImage: "url(/assets/background.png)"}}
        >
          <div class="text-white text-4xl pt-50 pl-20 font-sans font-bold">
            <h2>Contacts</h2>
          </div>
        </section>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default Contact;
