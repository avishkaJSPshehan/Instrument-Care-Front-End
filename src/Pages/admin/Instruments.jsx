import React from 'react'
import Navbar from '../../Components/Technician/Navbar'
import Admin_Sidebar from '../../Components/admin/Sidebar'
import AllInstrument from '../../Components/admin/AdminAllInstrument';
import Footer from '../../Components/Common/Footer'
import BG from '../../assets/images/technician-dashboard-bg-4.jpg';

export default function All_Instruments() {

  const sampleInstruments = [
  {
    id: 1,
    name: "Microscope",
    category: "Optical",
    serialNo: "MIC12345",
    active: true,
    acquiredOn: "2023-02-15",
    notes: "Used for cellular studies",
  },
  {
    id: 2,
    name: "Centrifuge",
    category: "Mechanical",
    serialNo: "CEN67890",
    active: true,
    acquiredOn: "2022-11-10",
    notes: "Maximum speed 15000 RPM",
  },
  {
    id: 3,
    name: "Spectrophotometer",
    category: "Analytical",
    serialNo: "SPEC54321",
    active: false,
    acquiredOn: "2021-06-05",
    notes: "UV-Vis range 200-800 nm",
  },
  {
    id: 4,
    name: "pH Meter",
    category: "Electrochemical",
    serialNo: "PHM98765",
    active: true,
    acquiredOn: "2023-01-20",
    notes: "Calibration needed weekly",
  },
  {
    id: 5,
    name: "Autoclave",
    category: "Sterilization",
    serialNo: "AUTO11223",
    active: true,
    acquiredOn: "2022-08-12",
    notes: "Capacity 50L, check pressure valves",
  },
  {
    id: 6,
    name: "Incubator",
    category: "Biological",
    serialNo: "INC33445",
    active: false,
    acquiredOn: "2021-09-30",
    notes: "Temperature range 20-60°C",
  },
];


  return (
    <>
      <Navbar />

      {/* Background Image Wrapper */}
      <div
        className="flex flex-col md:flex-row h-full w-full p-2 md:p-4 gap-4 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${BG})`,
        }}
      >
        {/* Sidebar */}
        <Admin_Sidebar />

        {/* Main Content */}
        <main className="flex-1 bg-[#ffffff80] rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">All Instruments</h2>
          <AllInstrument instrumentsData={sampleInstruments} />
          
        </main>
      </div>

      <Footer />
    </>
  )
}