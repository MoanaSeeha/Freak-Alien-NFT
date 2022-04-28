import React from "react";
import Marquee from "react-fast-marquee";

const Gallery = () => {
  return (
    <div id="gallery" className="mx-auto flex flex-col justify-center items-center my-10">
      <div className="w-2/3 flex flex-col">
        <div className="flex flex-row justify-between">
          <div className=" text-cyan-400 text-5xl capitalize w-1/2 gradiented-border">
            THE <br /> CHARACTERISTICS
          </div>
          <div className="w-5/12 text-lg">
            Each Freak Alien is unique and generated from over 300 possible traits, including expression, hats and headwear, and clothing such as suits, shirts, t-shirts, jackets, etc. All aliens are dope, but some of them are rarer than others.
          </div>
        </div>
        <Marquee className=" flex flex-col w-full overflow-hidden py-10" gradient={false} speed={40}>
          <img src={`${process.env.PUBLIC_URL}/image/02.jpg`} className=" rounded-lg w-60 mx-2 collection"/>
          <img src={`${process.env.PUBLIC_URL}/image/05.jpg`} className=" rounded-lg w-60 mx-2 collection"/>
          <img src={`${process.env.PUBLIC_URL}/image/09.jpg`} className=" rounded-lg w-60 mx-2 collection"/>
          <img src={`${process.env.PUBLIC_URL}/image/10.jpg`} className=" rounded-lg w-60 mx-2 collection"/>
          <img src={`${process.env.PUBLIC_URL}/image/11.jpg`} className=" rounded-lg w-60 mx-2 collection"/>
          <img src={`${process.env.PUBLIC_URL}/image/12.jpg`} className=" rounded-lg w-60 mx-2 collection"/>
        </Marquee>
      </div>
      
    </div>
  )
}

export default Gallery;
