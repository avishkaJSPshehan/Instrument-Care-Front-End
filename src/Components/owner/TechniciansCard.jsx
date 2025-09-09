import { CheckCircle, Award, Home, ArrowUpRight, SquareArrowOutUpRight } from "lucide-react";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProfileImage from '../../assets/images/profile-image.jpeg'; // fallback image if needed

export default function TechniciansCard() {
  const [technicians, setTechnicians] = useState([]);

  useEffect(() => {
    // Fetch technicians data from backend
    const fetchTechnicians = async () => {
      try {
        const response = await fetch('http://localhost/instrument-care-back-end/public/user/dashboard', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}` // or any auth method
          }
        });
        if (!response.ok) throw new Error('Failed to fetch technicians');
        const data = await response.json();
        console.log(data);
        setTechnicians(data);
      } catch (error) {
        console.error('Error fetching technicians:', error);
      }
    };

    fetchTechnicians();
  }, []);

  return (
    <section className="bg-[#ffffff] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-3xl font-semibold mb-8 text-center"></h2>
        
        <div className="grid gap-4 sm:grid-cols-4 lg:grid-cols-4">
          {technicians.map((tech, index) => (
            <div
              key={index}
              className="bg-[#494949] rounded-3xl p-5 text-white w-full max-w-sm mx-auto shadow-md flex flex-col justify-between min-h-[500px]"
            >
              <div>
                {/* Image */}
                <div className="rounded-2xl overflow-hidden mb-4">
                  <img
                    src={ProfileImage} // fallback since API doesn’t provide an image
                    alt={tech.full_name}
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                </div>

                {/* Name & Position */}
                <div className="flex items-center justify-between mt-4 text-sm text-white">
                  <div className="text-lg font-semibold flex items-center gap-1">
                    {tech.full_name}
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="text-xs font-semibold flex items-center gap-1">
                    {tech.company_designation}
                  </div>
                </div>

                {/* Title (bio) */}
                <p className="text-gray-400 text-sm mt-1">{tech.bio}</p>

                {/* Stats */}
                <div className="flex flex-col mt-4 text-sm text-gray-400 gap-2">
                  <div className="flex items-center gap-1">
                    <Award className="w-4 h-4" />
                    {tech.certificate_name}
                  </div>
                  <div className="flex items-center gap-1">
                    <Home className="w-4 h-4" />
                    {tech.institute_name}
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-5 flex gap-2">
                <Link to={`/user/view-profile/${tech.id}`}>
                  <button className="flex-1 bg-orange-300 text-black font-semibold text-sm py-2 p-3 rounded-full flex items-center justify-center gap-1 hover:bg-gray-100 transition hover:cursor-pointer">
                    View Profile <SquareArrowOutUpRight className="w-3 h-3" />
                  </button>
                </Link>

                <Link to={`/user/service-request/${tech.id}`}>
                  <button className="flex-1 bg-gray-800 text-white font-semibold text-sm py-2 p-2 rounded-full flex items-center justify-center gap-1 hover:bg-gray-700 transition hover:cursor-pointer">
                    Service Request <ArrowUpRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
