import React from 'react'
import Posts from './posts'
import Stories from './stories'

function Feed() {
    return (
        <main className="grid grid-cols-1 md:gird-cols-2 md:max-w-3xl xl:grid-col-2 xl:max-w-6xl mx-auto mt-5 md:mt-5">

            
            {/* Section */}
            <section className=" col-span-2">
 
                {/* Stories */}
                <Stories />


                {/* Posts */}
                <Posts />

            </section>




            {/* Section */}
            <section>

                {/* Mini Profile */}
                Mini Profile



                {/* Suggestions */}
                Suggestions

            </section>

                


            
        </main>
    )
}

export default Feed
