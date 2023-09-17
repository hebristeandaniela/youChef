import React from 'react'
import CommunityElement from './CommunityElement'

export default function EnterTheCommunity() {
    const communityPath= "/community_"
  return (
    <section className="bg-gray-200 py-8  ">
        <div className="container mx-auto">
        <h2 className=" text-3xl w-full text-center pb-8 mb-10">Enter The Community</h2>
        <div className="flex gap-4 justify-center w-full text-center"> 
       
       
        <CommunityElement src={`${communityPath}1.png`} title="Find recipes" text="Explore the recipes selected by our stuff uploaded by our community"/>
        <CommunityElement src={`${communityPath}2.png`} title="Review recipes" text="Evaluate and comment on the dishes proposed by others"/>
        <CommunityElement src={`${communityPath}3.png`} title="Add recipes" text="Pass on your know-how by proposing your recipes"/>
          
          
          
        </div>
       
      </div></section>
  )
}
