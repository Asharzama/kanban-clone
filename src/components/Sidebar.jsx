import React, { useContext } from "react";
import { sidebarContext } from "../App";

const Sidebar = () => {
  const {showSideBar, setShowSideBar} = useContext(sidebarContext);
  return (
    <aside className={`absolute z-10 bg-white xl:static left-0 top-0 border-r-2 border-primary ${showSideBar ? "-translate-x-[250px] w-0" : "translate-x-0 w-[300px]"} duration-500`}>
      <section className="py-8 pl-[22px] pr-6 flex items-center justify-between border-b-2 border-primary">
        <div className="flex items-center">
        <img src="./assets/logo.png" alt="" />
        <h1 className="font-semibold text-xl ml-2">Project M.</h1>
        </div>
        <img
          src="./assets/sidebar-arrow.png"
          alt=""
          className={`${
            showSideBar ? "rotate-180 translate-x-[70px]" : "rotate-0 translate-x-0"
          } duration-500 cursor-pointer`}
          onClick={() => setShowSideBar((prev) => !prev)}
        />
      </section>
      <section className="py-8 pl-[9px] mx-[13px] text-primary grid gap-6 border-b-2 border-primary">
        <div className="sidebar">
          <img src="./assets/home.png" alt="" />
          <h3>Home</h3>
        </div>
        <div className="sidebar">
          <img src="./assets/message.png" alt="" />
          <h3>Messages</h3>
        </div>
        <div className="sidebar">
          <img src="./assets/task.png" alt="" />
          <h3>Tasks</h3>
        </div>
        <div className="sidebar">
          <img src="./assets/member.png" alt="" />
          <h3>Members</h3>
        </div>
        <div className="sidebar">
          <img src="./assets/setting.png" alt="" />
          <h3>Settings</h3>
        </div>
      </section>
      <section className="py-8 pl-[6px] pr-4">
        <div className="flex justify-between items-center pb-3">
          <h2 className="uppercase text-primary font-bold text-xs">
            my projects
          </h2>
          <img src="./assets/add.png" alt="" className="cursor-pointer" />
        </div>
        <div>
          <div className="projects group">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-[#7AC555]"></div>
              <p className="group-hover:font-semibold text-base text-primary group-hover:text-black pl-4">
                Mobile App
              </p>
            </div>
            <img
              src="./assets/options.png"
              alt=""
              className="opacity-0 group-hover:opacity-100"
            />
          </div>
          <div className="projects group">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-[#FFA500]"></div>
              <p className="group-hover:font-semibold text-base text-primary group-hover:text-black pl-4">
                Website Redesign
              </p>
            </div>
            <img
              src="./assets/options.png"
              alt=""
              className="opacity-0 group-hover:opacity-100"
            />
          </div>
          <div className="projects group">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-[#E4CCFD]"></div>
              <p className="group-hover:font-semibold text-base text-primary  group-hover:text-black pl-4">
                Design System
              </p>
            </div>
            <img
              src="./assets/options.png"
              alt=""
              className="opacity-0 group-hover:opacity-100"
            />
          </div>
          <div className="projects group">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-[#76A5EA]"></div>
              <p className="group-hover:font-semibold text-base text-primary  group-hover:text-black pl-4">
                Wireframes
              </p>
            </div>
            <img
              src="./assets/options.png"
              alt=""
              className="opacity-0 group-hover:opacity-100"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="relative mt-6 mb-7">
        <img src="./assets/sidebar-bg.png" alt="" className="mx-auto" />
        <img src="./assets/yellow-spread.png" alt="" className="absolute top-[-20px] left-1/2 -translate-x-1/2"/>
        <img src="./assets/lamp.png" alt="" className="absolute top-[17px] left-1/2 -translate-x-1/2"/>
        <p className="text-sm font-medium absolute top-1/3 w-full text-center">Thoughts Time</p>
        <p className="text-xs absolute top-1/2 w-full text-center px-9">We don't have any notice for you, till then you can share your thoughts with your peers.</p>
        <button className="bg-white py-3 px-7 text-sm font-medium rounded outline-none mx-9 absolute top-3/4">Write a message</button>
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
