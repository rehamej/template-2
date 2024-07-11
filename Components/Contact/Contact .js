export default function Contact() {
  return (
    <section id="contact" className="h-screen flex justify-center flex-col items-start p-10 w-full">
      <h1 className="text-5xl md:text-4xl font-bold text-black">Let's connect!</h1>
      
      
      <p className="text-3xl sm:text-lg my-4 px-1 whitespace-normal">I am dedicated to helping others achieve their goals with personalized strategies.
         With a commitment to excellence and for delivering impactful results.
         </p>

      <button  className=" mt-2  text-white px-6 py-2 rounded-3xl hover:bg-yellow-600 transition duration-300  bg-yellow-500 sm:text-xl text-2xl whitespace-nowrap uppercase">
      Get in touch with me
      </button>
    </section>
  );
}