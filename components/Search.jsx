import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { useState } from 'react';

const Search = ({ isScrolled }) => {
  return (
    <div>
      <div className="flex items-center ">
        <input
          placeholder="Search..."
          type="text"
          className="hidden focus:border-b md:flex bg-transparent mr-2 outline-none px-2 py-2 placeholder:text-white  focus:border-b-white"
        />
        <BsSearch
          className="text-xl font-bold"
          //   onClick={() => setIsSearchClicked((prev) => !prev)}
        />
      </div>
    </div>
  );
};

export default Search;
