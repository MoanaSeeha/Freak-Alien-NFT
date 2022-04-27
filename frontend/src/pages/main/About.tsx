import React from "react";

const About = () => {
  return (
    <div className="mx-auto py-10 flex flex-col items-center bg-[#74742a]">
     <div id="about" className=" text-5xl text-[#ff9800] my-6">ABOUT</div>
     <div className="flex flex-row justify-center text-3xl font-extrabold text-[#eb9854] space-x-10">
       <div className="w-[40%] flex flex-col items-center">
        <div><div className="text-[#e46805] inline-block"> FAC</div> is a collection of 20,000K aliens avatars and NFTs, unique and randomly digital collectibles living on the Ethereum blockchain.</div> 
        <img src={`${process.env.PUBLIC_URL}/image/fac-story.jpg`} alt=""  className="w-[450px] my-12"/>
       </div>
       <div className=" w-[40%] inline-block space-y-2" style={{ letterSpacing: '2px'}}>
        <div><div className="text-[#e46805] inline-block"> Each Freak Alien</div> is unique and generated from over 300 possible traits, including expression, hats and headwear, and clothing such as suits, shirts, t-shirts, jackets, etc. All aliens are dope, but some of them are rarer than others.</div>
        <div>The aliens are living as <div className="text-[#e46805] inline-block">ERC-721 tokens</div> on the Ethereum blockchain and hosted on IPFS. You can see the record and proof here.</div> 
        <div>Holding an alien will grant access to members-only benefits. After roadmap activation will activate futures areas and the benefit can be unlocked by our community. To access exclusionary members-only areas such as THE PUB, Aliensholders must be signed into their Metamask wallet. </div> 
       </div>
     </div>
    </div>
  )
}

export default About;
