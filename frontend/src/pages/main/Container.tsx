import React from "react";

const Container = () => {
  return (
    <div className="mx-auto hero pb-10 flex flex-col justify-center">
      <img src={`${process.env.PUBLIC_URL}/image/fac-background.svg`} className=" w-full absolute"/>
      <div className=" flex flex-col px-24 z-10 text-6xl font-extrabold">
        <div className=" p-4 bg-blue-700 text-2xl font-bold inline-block w-fit my-8">
          WELCOME TO
        </div>
        Freak Aliens Club
      </div>
    </div>
  )
}

export default Container;
