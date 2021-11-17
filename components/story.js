import React from 'react'

function Story({img, username}) {
    return (

        <div>
            <img className="h-14 w-14 rounded-b-3xl p-[1.5px] border-2 border-red-500 object-contain cursor-pointer hover:scale-110 transition duration-200 ease-out transform" src={img}  alt="profile image"/>
            {/* truncate means if text passes max with it go like 'name...' */}
            <p className="text-xs truncate w-14 text-center ">{username}</p>
        </div>
    )
}

export default Story
