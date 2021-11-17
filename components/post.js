import React from 'react'



import { 
    
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
    DotsHorizontalIcon,
    ChatIcon,
    BookmarkAltIcon,
    EmojiHappyIcon
 } from '@heroicons/react/outline'


 import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid"


 import myImage from "../assets/1Image.jpg"
import Image from 'next/image'






function Post({id, username, userImg, img, caption}) {


    return (

        <div className="bg-white my-7 border rounded-sm ">

            {/* header */}
            <div className="flex items-center p-5">
                <img className="rounded-full h-12 w-12 object-contain border p-1 mr-3" src={userImg} alt="user icon" />
                <p className="flex-1 font-bold">{username}</p>
                <DotsHorizontalIcon className="h-5"/>
            </div>



            {/* image */}
            {/* <img className="w-full p-2 object-cover" src={img} alt="user image" /> */}
            
            <div className=" relative w-full p-4 pt-0">
                <Image src={myImage} objectFit="contain" alt="user image" />
            </div>


            {/* button */}
            <div className="flex justify-between m-4">

                <div className="flex space-x-4">
                    <HeartIcon className="btn" />
                    <ChatIcon className="btn" />
                    <PaperAirplaneIcon className="btn" />
                </div>

                <BookmarkAltIcon className="btn" />

            </div>
            

            {/* caption */}
            <p className="p-5 truncate">
                <span>{username}</span>
                {caption}
            </p>



            {/* comment */}



            {/* inputbox */}
            <form className="flex items-center p-4 space-x-4">
                <EmojiHappyIcon className="h-7" />
                <input className="form-input flex-1 border-none focus:ring-0 outline-none rounded-3xl bg-gray-50" type="text"placeholder="Add a comment..." />
                <button className=" font-semibold text-blue-400">Post</button>
            </form>
        </div>

    )
}

export default Post
