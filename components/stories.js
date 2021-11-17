import React, {useEffect, useState} from 'react'

import faker from "faker";
import Story from './story';



function Stories() {

    //Temporary storage

    const [suggestions, setSuggestions] = useState([]);


    //Populate a fake list of user

    //runs at a certain point of a life cycle of a component
    useEffect(()=>
    {
        //[...Array(20)] creates an empy array of size 20
        // the '_ '@(_, index) means we dont care about the that value/parameter
        // () @=> ({}) means return an object specified {}
        const suggestionsArr = [...Array(20)].map((_, index)=> (
            {
                //generates bunch of fake users and their info
                //the ... basically spread the data, breaking it down
                //into name: "", username: "", avater: "", email: "", dob: "" etc.
                ...faker.helpers.contextualCard(),
                id:index
            }
        ));


        // console.log("suggestions")
        // console.log(suggestionsArr)
        setSuggestions(suggestionsArr);

    },[]); // [] mean it will run once since no dependencies are included/specified



    return (

        <div className="flex space-x-2 p-6 bg-white border border-gray-200 rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-300" >

            {suggestions.map((profile)=>
                {
                   return  <Story key={profile.id} img={profile.avatar} username={profile.username} />
                })
            }
            
        </div>
    )
}

export default Stories
