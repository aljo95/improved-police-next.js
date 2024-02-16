'use client';

import React from 'react'
import { MdModeStandby } from 'react-icons/md';

const Navloginbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 w-1/2 flex justify-center m-auto h-10">
        <div className="w-1/2 flex flex-row justify-evenly items-center">
            <button id="test" onClick={() => console.log("yaya")}>login</button>
            <button>settings</button>
        </div>
  </nav>
  )
}

export default Navloginbar