import React, { useState } from "react";
import { Headset, SatelliteDish, ShieldCheck, PlusCircle } from "lucide-react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const WhyCowboy = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="bg-zinc-900 text-white py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header and Navigation */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-gray-400 text-sm mb-2">Why Cowboy?</p>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              We've got your back
            </h2>
          </div>
          <div className="flex space-x-4">
            <button
              className="text-white"
              onClick={() => setShowMore(false)}
              disabled={!showMore}
              aria-label="Previous"
            >
              <ArrowBackIcon />
            </button>
            <button
              className="text-white"
              onClick={() => setShowMore(true)}
              disabled={showMore}
              aria-label="Next"
            >
              <ArrowForwardIcon />
            </button>
          </div>
        </div>

        {/* Cards container */}
        {!showMore ? (
          // Show cards 1-3 in grid
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Card icon={<Headset size={32} />} title="200+ service locations" description="Expert repairs nearby. Or right at your door." />
            {/* Card 2 */}
            <Card icon={<SatelliteDish size={32} />} title="Pioneering theft detection" description="Outsmart thieves with GPS tracking & theft alerts." />
            {/* Card 3 */}
            <Card icon={<ShieldCheck size={32} />} title="2-year warranty" description="Covered where it counts. Complete peace of mind." />
          </div>
        ) : (
          // Show cards 4 & 5 horizontally with overflow-x scroll
          <div className="flex space-x-6 overflow-x-auto scrollbar-hide py-4">
            <Card icon={<WalletIcon />} title="2-year warranty" description="Covered where it counts. Complete peace of mind." />
            <Card icon={<LeafIcon />} title="2-year warranty" description="Covered where it counts. Complete peace of mind." />
          </div>
        )}
      </div>
    </section>
  );
};

const Card = ({ icon, title, description }) => (
  <div className="bg-zinc-800 p-8 rounded-lg flex flex-col justify-between relative group hover:scale-105 transition-transform duration-300 ease-in-out min-w-[300px]">
    <div className="absolute top-8 left-8 text-white">{icon}</div>
    <div className="mt-16 mb-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
    <div className="self-end mt-auto">
      <PlusCircle
        size={28}
        className="text-white transition-all duration-500 group-hover:rotate-[360deg] group-hover:text-black"
      />
    </div>
  </div>
);

// WalletIcon with the SVG symbol usage you shared
const WalletIcon = () => (
  <svg
    width="32"
    height="32"
    className="inline-block"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <use xlinkHref="#wallet" />
  </svg>
);

const LeafIcon = () => (
  <svg
    width="32"
    height="32"
    className="inline-block"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <use xlinkHref="#leaf" />
  </svg>
);




export default WhyCowboy;
