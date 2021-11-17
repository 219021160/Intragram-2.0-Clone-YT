import React from 'react'
import Post from './post'

function Posts() {


    const posts = [
        {
            id: "123",
            username: "username",
            userImg: "https://links.papareact.com/3ke",
            img: "https://links.papareact.com/3ke",
            caption: "This is dope!"
        },
        {
            id: "123",
            username: "username",
            userImg: "https://links.papareact.com/3ke",
            img: "https://links.papareact.com/3ke",
            caption: "This is dope!"
        },
    ]


    return (
        <div>
            

            {
                posts.map((post)=>
                {
                    return <Post key={post.id}
                        username={post.username}
                        userImg={post.userImg}
                        img={post.img}
                        caption={post.caption} />
                })
            }
        </div>
    )
}

export default Posts
