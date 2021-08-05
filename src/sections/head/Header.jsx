// importing libraries
// importing components
import React, { useState } from 'react'
// importing styles or resources
// importing actions or operations or function


export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleToggle = () => {
        setToggleMenu(!toggleMenu)
    }

    return (
        <header>
            <div className="m-1 rounded flex justify-between bg-indigo-600">

                {/* Logo Section */}
                <div className="text-white px-4 rounded flex justify-center items-center">
                    <a href="/">
                        <div>MTL Team</div>
                    </a>
                </div>

                {/* Menu Section */}
                <div className={toggleMenu ? "md:flex  md:pt-0 pt-10 w-full md:w-auto" : "hidden md:flex"} id="menu">
                    <ul>
                        <li className="dropdown md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3 relative">
                            <a href="#"
                                className="text-white px-4 rounded flex justify-center items-center">
                                <div>Apps</div>
                            </a>
                        </li>

                        <li className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">
                            <a href="#"
                                className="text-white px-4 rounded flex justify-center items-center">
                                <div>About us</div>
                            </a>
                        </li>

                        <li className="md:inline-block cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">
                            <a href="#"
                                className="text-white px-4 rounded flex justify-center items-center">
                                <div>Contact us</div>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="cursor-pointer md:hidden">
                    <input class="menu-btn hidden" type="checkbox" id="menu-btn" />
                    <label class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" for="menu-btn">
                        <span onClick={handleToggle} class="navicon bg-white-darkest flex items-center relative"></span>
                    </label>
                </div>

            </div>
        </header>
    )
}
