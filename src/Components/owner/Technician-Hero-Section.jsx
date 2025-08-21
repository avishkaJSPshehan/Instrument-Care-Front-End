import {
  Instagram,
  Facebook,
  Twitter,
  MessageCircle,
  Mountain,
} from "lucide-react";
import BG from '../../assets/images/technician-hero-bg-4.jpg';
import Technician from '../../assets/images/Technician-image.jpg';

export default function TechnicianHeader() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src= {BG} // Replace with actual path
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Transparent white overlay */}
      <div className="absolute inset-0 bg-white/70 z-10" />

      {/* Main content */}
      <div className="relative z-20 container mx-auto px-4 pt-8 pb-4 lg:pt-10 lg:pb-6">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 items-center min-h-[50vh]">
          {/* Left Content */}
          <div className="space-y-4 lg:space-y-12 order-2 lg:order-1">
            <div className="space-y-4">
              <p className="text-lg md:text-xl font-medium text-gray-700 tracking-wide font-poppins">
                Skilled professionals, passionate about precision and performance.
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 leading-none tracking-tight mt-10 font-poppins">
                Find Your Technicians
              </h1>

              {/* Search Button */}
              <div className="flex flex-wrap w-full max-w-5xl mx-auto p-2 gap-2 font-poppins">
                {/* Input field */}
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search Instrument or Technician"
                    className="w-full border-2 rounded-md px-4 py-2 focus:outline-none"
                  />
                </div>

                {/* Search button */}
                <div>
                  <button
                    className="bg-orange-400 text-white font-bold px-10 py-2 rounded-md hover:bg-orange-600 transition"
                  >
                    SEARCH
                  </button>
                </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="flex items-start gap-4 pt-8 lg:pt-12">
              
              {/* <div className="space-y-1">
                <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide font-poppins">
                  Our technicians play a key role in delivering high-quality modifications and maintenance. Below are some of the most recent experts who joined our team trained, experienced, and ready to serve.
                </p>
              </div> */}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px]">
              <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl">
                <img
                  src= {Technician}
                  alt="Technician"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -inset-4 rounded-full border-2 border-white/30" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function IconButton({ icon, label }) {
  return (
    <button
      className="w-10 h-10 rounded-full border border-gray-300 hover:bg-orange-300 transition-colors bg-transparent flex items-center justify-center cursor-pointer"
      aria-label={label}
    >
      {icon}
    </button>
  );
}
