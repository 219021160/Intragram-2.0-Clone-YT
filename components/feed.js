import React from 'react'
import MiniProfile from './miniProfile'
import Posts from './posts'
import Stories from './stories'
import Suggestions from "./suggestions"




function Feed() {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto mt-5 md:mt-5">

            
            {/* Section */}
            <section className=" col-span-2">
 
                {/* Stories */}
                <Stories />


                {/* Posts */}
                <Posts />

            </section>




            {/* Section */}
            <section className="hidden xl:inline-grid md:col-span-1 ">

                <div className="fixed top-20">
                    {/* Mini Profile */}
                    <MiniProfile />

                    {/* Suggestions */}
                    <Suggestions />
                </div>

            </section>

                


            
        </main>
    )
}

export default Feed
