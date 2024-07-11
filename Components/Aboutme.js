import React from 'react'

function Aboutme() {
  return (
    <section className="flex items-center h-screen w-full" id="aboutme">
    <div className=" p-10 w-full">
      <h1 className="text-4xl font-bold">HI THERE!</h1>
      <h2 className="text-6xl font-bold text-yellow-500"><span className="text-black">I'M</span> BENJAMIN</h2>
      <p className="text-lg mt-4  font-bold bg-yellow-500 w-fit px-1">
        Graphic Designer / Photographer
      </p>
      <button  className=" mt-2  text-white px-6 py-2 rounded-3xl hover:bg-yellow-600 transition duration-300  bg-yellow-500 sm:text-xl text-2xl">
        <a href="#projects">MY PROJECTS</a> 
      </button>
    </div>

  </section>
  )
}

export default Aboutme