import React, { useContext } from "react";
import { sidebarContext } from "../App";

const Header = () => {
  const { showSideBar, setShowSideBar } = useContext(sidebarContext);
  return (
    <div className="py-6 px-12 border-b-2 border-primary flex items-center justify-end sm:justify-between w-full">
      <img
        src="./assets/sidebar-arrow.png"
        alt=""
        className={`${
          showSideBar ? "rotate-180" : "rotate-0 hidden"
        } duration-500 cursor-pointer mt-8 fixed top-0 left-0`}
        onClick={() => setShowSideBar((prev) => !prev)}
      />
      <div className="relative hidden sm:block">
        <input
          type="text"
          className="lg:w-[417px] w-60 h-11 rounded-md bg-[#F5F5F5] outline-none py-[10px] pl-[55px] pr-2 placeholder:text-primary text-primary"
          placeholder="Search for anything..."
        />
        <img
          src="./assets/search.png"
          alt=""
          className="absolute left-4 top-3"
        />
      </div>

      <section className="flex">
        <section className="hidden md:flex items-center gap-6">
          <img src="./assets/calendar.png" alt="" className="cursor-pointer"/>
          <img src="./assets/message-question.png" alt="" className="cursor-pointer"/>
          <img src="./assets/notification.png" alt="" className="cursor-pointer"/>
        </section>

        <section className="ml-12 flex">
          <div className="cursor-default hidden md:block">
            <h2 className="text-base">Anima Agrawal</h2>
            <p className="text-sm text-primary">U.P, India</p>
          </div>
          <div className="ml-5 flex items-center gap-2">
            <img src="./assets/profile.png" alt="" className="cursor-pointer"/>
            <img src="./assets/arrow-down.png" alt="" className="cursor-pointer"/>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Header;
