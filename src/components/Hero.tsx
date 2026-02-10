


const Hero = () => {
     return (
         <div className="w-full bg-[url('images/namibia.jpeg')] bg-[center_80%] bg-cover h-90 overflow-hidden">
             {/* <iframe className="w-full h-full" src="https://www.youtube.com/embed/QLDhCOY_spA?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
             <div className="w-full h-full px-15 flex flex-col items-start justify-center gap-7 inset-0 bg-gray-600/80">
                <label className="animate-slide-text font-bold text-4xl text-[var(--color-primary-light)]"><span className="text-[var(--color-primary-light)]">Government Services,</span> Made Accessible</label>
                <label style={{ animationDelay: '3s' }} className="animate-slide-text text-xl font-bold font-serif text-white text-shadow-black">Apply, register, and access essential public services online, anytime, anywhere in Namibia.</label>
             </div>
         </div>
     )
}

export default Hero;

//  bg-[url('images/namibia5.jpg')] bg-center bg-cover 