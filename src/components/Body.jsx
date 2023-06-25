import React from "react";
import { TbFilter } from "react-icons/tb";
import { BsChevronDown, BsCalendarEvent } from "react-icons/bs";
import { GoPeople } from "react-icons/go";
import Kanban from "./Kanban";

const Body = () => {
  return (
    <div className="px-3 sm:px-12 pt-10">
      <section className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          <h1 className="font-semibold text-[46px]">Mobile App</h1>
          <img
            src="./assets/body-header.png"
            alt=""
            className="cursor-pointer"
          />
        </div>
        <img src="./assets/invite.png" alt="" className="hidden md:block"/>
      </section>
      <section className="flex items-center justify-between my-10">
        <section className="">
          <section className="flex flex-col sm:flex-row gap-3">
            <button className="flex items-center text-primary px-4 py-3 rounded-md border-[1.5px] border-[#787486] hover:bg-[#787486] hover:text-black">
              <TbFilter />
              <p className="pl-1 pr-3">Filter</p>
              <BsChevronDown />
            </button>
            <button className="flex items-center text-primary px-4 py-3 rounded-md border-[1.5px] border-[#787486] hover:bg-[#787486] hover:text-black">
              <BsCalendarEvent />
              <p className="pl-1 pr-3">Today</p>
              <BsChevronDown />
            </button>
          </section>
        </section>
        <section className="flex items-center gap-10">
          <button className="flex items-center text-primary px-4 py-3 rounded-md border-[1.5px] border-[#787486] hover:bg-[#787486] hover:text-black">
            <GoPeople />
            <p className="pl-1">Share</p>
          </button>
          <img src="./assets/filters.png" alt="" className="hidden md:block"/>
        </section>
      </section>
      <Kanban />
      <div></div>
    </div>
  );
};

export default Body;
