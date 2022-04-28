import React from "react";

const Welcome = () => {
  return (
    <div className="mx-auto py-10 flex flex-col items-center bg-[#026881]">
     <div id="provenance" className=" text-5xl text-[#49fabf] my-6">WELCOME TO THE PUB CLUB</div>
     <div className="flex flex-row justify-center text-3xl font-extrabold text-[#b7cc58] space-x-10">
       <div className=" w-[40%] inline-block space-y-2" style={{ letterSpacing: '2px'}}>
        <div>
          <div className="text-[#748624] inline-block mr-5 -ml-4">-COMMUNITY</div>
          We are going to make this community the first alien truly population in the blockchain outer space. We are The Freakaliens and together we stand.
        </div>
        <div>
          <div className="text-[#748624] inline-block mr-5 -ml-4">-INCLUSIVITY</div>
          We believe that people value the groups they belong to, so we want you to make decisions in Freak Aliens Club. We love to encourage our amazing community to share their ideas on our Discord server.
        </div>
        <div>
          <div className="text-[#748624] inline-block mr-5 -ml-4">-OWNERSHIP</div>
          It is yours alien, you own it. Rights of property and commercial use are granted to the consumer on their NFT. We are not responsible for your misbehavior. So keep it safe and secure.
        </div>
        <div>
          <div className="text-[#748624] inline-block mr-5 -ml-4">-FOR THE LONG HAUL</div>
          You have the opportunity to be part of our growing community. The Freak Aliens Club project will evolve and expand over the long term. We believe in individuals who share common goals and share similar successes.
        </div>
       </div>
       <div className="w-[40%] flex flex-col items-center">
        <img src={`${process.env.PUBLIC_URL}/image/fac-mission.jpg`} alt=""  className="w-[700px] my-12"/>
       </div>
     </div>
    </div>
  )
}

export default Welcome;
