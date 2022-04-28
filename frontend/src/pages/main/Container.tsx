import React from "react";

const Container = () => {
  return (
    <div id="" className="mx-auto flex flex-col justify-center">
      <img src={`${process.env.PUBLIC_URL}/image/fac-background.svg`} className=" w-full top-0"/>
      <div className=" absolute flex flex-col px-24 z-10 text-6xl font-extrabold justify-center">
        <div className=" p-4 bg-blue-700 text-2xl font-bold inline-block w-fit my-8">
          WELCOME TO
        </div>
        Freak Aliens Club
      </div>
    </div>
  )
}

export default Container;
