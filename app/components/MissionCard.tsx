

import { Target, ShieldCheck, Users, Globe, FileText } from 'lucide-react'

export default function VisionMissionCards() {
  return (
    <>
      {/* Glassmorphism Cards Floating Above Orange Section */}
      <div className="relative z-10 -mb-16 flex flex-col md:flex-row justify-center items-stretch gap-8 px-4">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 text-white shadow-lg rounded-xl p-8 md:w-1/2  ">
          <div className="flex flex-col items-center text-center">
            <Target className="text-orange-500 w-12 h-12 mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
          <p className="text-gray-300">
            To provide high-quality polybags that exceed expectations,
            building long-term relationships through unmatched customer service.
          </p>
          </div>
        </div>

        <div className="backdrop-blur-md bg-white/10 border border-white/20 text-white shadow-lg rounded-xl p-8 md:w-1/2 ">
          <div className="flex flex-col items-center text-center">
            <ShieldCheck className="text-orange-500 w-12 h-12 mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-300">
            To lead the polybag industry with innovation, consistent improvement,
            and unwavering honesty and integrity in all operations.
          </p>
          </div>
        </div>
      </div>

      {/* Orange Background Section Below */}
      <div className="bg-orange-600 text-white py-24 px-4 mt-0 rounded-md">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
           
            <FileText className="mx-auto mb-2 w-10 h-10 text-black" />
            <p className="text-2xl font-bold text-black">3000+</p>
            <p className="text-sm text-gray-900">Projects Completed</p>
            
          </div>
          <div>
            <Users className="mx-auto mb-2 w-10 h-10 text-black" />
            <p className="text-2xl text-black font-bold">400+</p>
            <p className="text-sm text-gray-900">Happy Customers</p>
          </div>
          <div>
            <Globe className="mx-auto mb-2 w-10 h-10 text-black" />
            <p className="text-2xl text-black font-bold">50+</p>
            <p className="text-sm text-gray-900">Years of Experience</p>
          </div>
          <div>
            <Users className="mx-auto mb-2 w-10 h-10 text-black" />
            <p className="text-2xl text-black font-bold">100+</p>
            <p className="text-sm text-gray-900">Team Members</p>
          </div>
        </div>
      </div>
    </>
  )
}
