import React from "react";
import { Link } from "react-router-dom";

const MainCategories = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full px-3 py-4 shadow-lg items-center justify-center gap-8 ">
      {/* All links */}
      <div className="flex-1  flex items-center justify-between flex-wrap ">
        <Link
          to="/posts"
          className="bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-700 shadow-sm "
        >
          All Posts
        </Link>
        <Link
          to="/posts?cat=web-design"
          className="bg-white hover:bg-gray-100 px-4 py-2 rounded-full  "
        >
          Web Design
        </Link>
        <Link
          to="/posts?cat=development"
          className="bg-white hover:bg-gray-100 px-4 py-2 rounded-full  "
        >
          Development
        </Link>
        <Link
          to="/posts?cat=databases"
          className="bg-white hover:bg-gray-100 px-4 py-2 rounded-full  "
        >
          Databases
        </Link>
        <Link
          to="/posts?cat=seo"
          className="bg-white hover:bg-gray-100 px-4 py-2 rounded-full  "
        >
          Search Engine
        </Link>
        <Link
          to="/posts?cat=markating"
          className="bg-white hover:bg-gray-100 px-4 py-2 rounded-full  "
        >
          Markating
        </Link>
      </div>
      <span className="font-bold ">|</span>
      {/* search */}
      <div className="flex items-center bg-gray-100 rounded-full gap-1 hover:scale-105 px-2 py-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="gray"
          
        >
          <circle cx="10.5" cy="10.5" r="7.5" />
          <line x1="16.5" y1="16.5" x2="22" y2="22" />
        </svg>
        <input
          type="text"
          placeholder="Search"
          className="text-black text-center rounded-full bg-transparent ring-0 placeholder:text-gray-400   "
        />
      </div>
    </div>
  );
};

export default MainCategories;
