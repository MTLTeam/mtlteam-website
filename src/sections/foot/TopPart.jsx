import React from 'react'
import { Link } from 'react-router-dom'
import { constants } from '../../config/constants'

export default function TopPart() {
    return (
        <div className="grid sm:grid-cols-5 pb-6">
            <div className="sm:col-span-1">
                {/* Empty */}
            </div>

            {/* Our portfolio */}
            <div className="sm:col-span-1">

                <h5 className="my-4 text-white text-xl font-bold text-center" >
                    Our portfolio
                </h5>

                <ul className="mx-2 py-4 shadow-lg rounded bg-indigo-700">
                    <li className="mb-2">
                        <Link to="/apps?list=quizs"
                            className="border-b border-solid border-transparent ">
                            <div className="text-white text-center hover:text-red-300" >
                                Quiz Games
                            </div>
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link to="/apps?list=puzzles"
                            className="border-b border-solid border-transparent ">
                            <div className="text-white text-center hover:text-red-300" >
                                Puzzle Games
                            </div>
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link to="/apps?list=all"
                            className="border-b border-solid border-transparent ">
                            <div className="text-white text-center hover:text-red-300" >
                                All Games
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Quick links */}
            <div className="sm:col-span-1">
                <h5 className="my-4 text-white text-xl font-bold text-center">Quick Links</h5>
                <ul className="mx-2 py-4 shadow-lg rounded bg-indigo-700">
                    <li className="mb-2">
                        <Link to="/"
                            className="border-b border-solid border-transparent ">
                            <div className="text-white text-center hover:text-red-300" >
                                Home
                            </div>
                        </Link>
                    </li>
                    {/* <li className="mb-2">
                        <Link to="/publish"
                            className="border-b border-solid border-transparent ">
                            <div className="text-white text-center hover:text-red-300" >
                                App Publishing
                            </div>
                        </Link>
                    </li> */}
                    <li className="mb-2">
                        <Link to="/about"
                            className="border-b border-solid border-transparent ">
                            <div className="text-white text-center hover:text-red-300" >
                                About us
                            </div>
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link to="/privacy-policy"
                            className="border-b border-solid border-transparent ">
                            <div className="text-white text-center hover:text-red-300" >
                                Privacy Policy
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Social */}
            <div className="sm:col-span-1">
                <h5 className="my-4 text-white text-xl font-bold text-center">Social</h5>
                <div className="flex justify-center mx-2 py-4 shadow-lg rounded bg-indigo-700">
                    <a href={constants.socials.facebook}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            // xmlns:xlink="http://www.w3.org/1999/xlink"
                            version="1.0"
                            x="0px"
                            y="0px"
                            width="50"
                            height="50"
                            viewBox="0 0 50 50"
                            // style="null"
                            className="icon icons8-Facebook-Filled" >
                            <path d="M40,0H10C4.486,0,0,4.486,0,10v30c0,5.514,4.486,10,10,10h30c5.514,0,10-4.486,10-10V10C50,4.486,45.514,0,40,0z M39,17h-3 c-2.145,0-3,0.504-3,2v3h6l-1,6h-5v20h-7V28h-3v-6h3v-3c0-4.677,1.581-8,7-8c2.902,0,6,1,6,1V17z">
                            </path>
                        </svg>
                    </a>
                </div>
            </div>

            <div className="sm:col-span-1">
                {/* Empty */}
            </div>

        </div>
    )
}
