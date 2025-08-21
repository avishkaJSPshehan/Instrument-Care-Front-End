import { CheckCircle, Plus, Info,Award, Home, ArrowUpRight,SquareArrowOutUpRight} from "lucide-react";
import ProfileImage from '../../assets/images/profile-image.jpeg';

const technicians = [
  {
    name: "Nuwan Perera",
    position: "Electrical Technician",
    title: "With over 12 years in automotive electrical systems, I specialize in creating flawless lighting solutions and wiring layouts for custom builds.",
    followers: 312,
    institute: "NSF",
    img: `${ProfileImage}`,
  },
  {
    name: "Malsha Fernando",
    position: "Mechanical Technician",
    title: "Passionate about improving ride comfort, I design and install custom suspension systems that balance performance with durability.",
    followers: 420,
    institute: "NRC",
    img: `${ProfileImage}`,
  },
  {
    name: "Dilan Gunasekara",
    position: "Mechanical Technician",
    title: "From leather stitching to ambient lighting, I transform vehicle interiors into luxurious, personalized spaces for every driver.",
    followers: 287,
    institute: "IIT",
    img: `${ProfileImage}`,
  },
  {
    name: "Thilina Jayawardena",
    position: "Electrical Technician",
    title: "Bringing colors to life with custom paints and flawless restoration work that turn ordinary vehicles into head-turning masterpieces.",
    followers: 368,
    institute: "UOC",
    img: `${ProfileImage}`,
  },
  {
    name: "Pramod Abeywickrama",
    position: "Electrical Technician",
    title: "Equipped with the latest diagnostic tools, I pinpoint engine and ECU issues to ensure optimal vehicle performance and reliability.",
    followers: 241,
    institute: "USJP",
    img: `${ProfileImage}`,
  },
  {
    name: "Pubudu Shehan",
    position: "Electrical Technician",
    title: "From leather stitching to ambient lighting, I transform vehicle interiors into luxurious, personalized spaces for every driver.",
    followers: 395,
    institute: "NSF",
    img: `${ProfileImage}`,
  },
];

export default function RecentTechniciansSection() {
  return (
    <section className="bg-[#1a1a1a] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-3xl font-semibold mb-8 text-center">
          <span className="text-sm font-semibold font-poppins uppercase text-amber-600 bg-orange-200 rounded-full px-4 py-1 inline-block mb-4 tracking-wide">
                ── Recent Available Technicians ──
        </span>
        </h2>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {technicians.map((tech, index) => (
            <div
              key={index}
              className="bg-[#494949] rounded-3xl p-5 text-white w-full max-w-sm mx-auto shadow-md flex flex-col justify-between min-h-[500px]"
            >
              <div>
                {/* Image */}
                <div className="rounded-2xl overflow-hidden mb-4">
                  <img
                    src={tech.img}
                    alt={tech.name}
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                </div>

                {/* Name */}
                <div className="flex items-center justify-between mt-4 text-sm text-white">
                  <div className="text-lg font-semibold flex items-center gap-1">
                    {tech.name}
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                  <div className="text-xs font-semibold flex items-center gap-1">
                    {tech.position}
                  </div>
                </div>
                
                

                {/* Title */}
                <p className="text-gray-400 text-sm mt-1">{tech.title}</p>

                {/* Stats */}
                <div className="flex items-center justify-between mt-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Award className="w-4 h-4" />
                    {tech.followers}
                  </div>
                  <div className="flex items-center gap-1">
                    <Home className="w-4 h-4" />
                    {tech.institute}
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-5 flex gap-2">
                <button className="flex-1 bg-orange-300 text-black font-semibold text-sm py-2 rounded-full flex items-center justify-center gap-1 hover:bg-gray-100 transition">
                  Viwe Profile <SquareArrowOutUpRight className="w-3 h-3" />
                </button>
                <button className="flex-1 bg-gray-800 text-white font-semibold text-sm py-2 rounded-full flex items-center justify-center gap-1 hover:bg-gray-700 transition">
                  Service Request <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
