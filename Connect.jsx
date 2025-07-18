import React from "react";

const ConnectHeroSection = () => {
  return (
    <section className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden" style={{ backgroundColor: '#f3ecdc' }}>
      {/* Overlayed Text */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-start pt-20 pointer-events-none select-none">
        <p className="text-2xl md:text-4xl  tracking-widest mb-2" style={{ color: '#999' }}>
          Cowboy Connect
        </p>
        <h1 className="text-6xl md:text-8xl font-bold leading-tight" style={{ color: '#111' }}>
          Level up your ride
        </h1>
      </div>
      <video
        playsInline
        autoPlay
        muted
        loop
        disablePictureInPicture
        controlsList="nodownload noplaybackrate nofullscreen noremoteplayback"
        className="w-full h-full max-w-7xl mx-auto object-cover"
        loading="eager"
        fetchpriority="high"
      >
        <source
          src="https://cdn.shopify.com/videos/c/o/v/54e064a872664e2d90bdf8ac1caac8d7.webm"
          type="video/webm"
        />
      </video>
    </section>
  );
};

export default ConnectHeroSection;
