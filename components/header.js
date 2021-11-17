import React from 'react'
import Image from "next/image"

import { 
    
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon
 } from '@heroicons/react/outline'


 import { HomeIcon } from "@heroicons/react/solid"


function Header() {
    return (


        <div className=" shadow-sm  border-b bg-white sticky top-0 z-50">

            
            <div className="flex justify-between bg-white max-w-6xl mx-5 lg:mx-auto">
             
                {/* Left - insta logo */}
                {/* relative means that all the components inside that div will be sized relative or with respect to the container with the relative className */}
                <div className="relative hidden md:inline-grid w-24 flex-shrink-0 cursor-pointer">
                    {/* small size image preserves quality and improves performance */}
                    {/* layout="fill" takes all the space available hence image tag is inside a div to restrict it */}
                    {/* using the Image tag, doamins of the image need to be listed before they can be renderd */}
                    <Image src="http://links.papareact.com/ocw" layout="fill" objectFit="contain" />
                </div>


                <div className="relative md:hidden w-10 flex-shrink-0 cursor-pointer">
                    <Image src="http://links.papareact.com/jjm" layout="fill" objectFit="contain" />
                </div>



                <div className=" max-w-xs ">
                    {/* Middle - Search input field */}
                    <div className="relative mt-1 p-3 rounded-md">
                        {/* Search icon */}
                        <div className="absolute mt-2.5 lg:mt-2 insets-y-0 pl-3 flex items-center pointer-events-none ">
                            <SearchIcon className="h-5 w-5 text-gray-500" />
                        </div>
                        <input className="form-input bg-gray-50 focus:border-black focus:ring-black border-gray-300 block w-full pl-10 text-sm rounded-md" text="text" placeholder="Search..." />
                    </div>
                </div>
    
    
                {/* Right */}
                <div className="flex items-center justify-end space-x-4">
                    <HomeIcon className="navBtn" />
                    <MenuIcon className="h-6 md:hidden cursor-pointer " />
                    
                    <div className="relative navBtn">
                        <div className="absolute -top-2 -right-1 bg-red-500 text-xs w-5 h-5 rounded-full flex items-start justify-center text-white animate-pulse">3</div>
                    <PaperAirplaneIcon className="navBtn rotate-45" />
                    </div>
                   
                    <PlusCircleIcon className="navBtn" />
                    <UserGroupIcon className="navBtn" />
                    <HeartIcon className="navBtn" />

                    <img src="https://image.shutterstock.com/image-vector/default-avatar-profile-icon-man-260nw-681058294.jpg" alt="profile pic" className="navBtnProfile " />
                </div>

            </div>
            
  
        </div>
    )
}

export default Header
