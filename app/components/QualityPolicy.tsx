

import { ShieldCheck, RefreshCcw, Award } from "lucide-react"


export default function QualityPolicy() {
  return (
    <section className="relative bg-black text-white py-20 px-6 md:px-12 lg:px-24 overflow-hidden" id="quality-policy">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-2">
          <span className="text-orange-600 font-extralight">Our </span>
          <span className="text-orange-600">Quality Policy</span>

        </h2>
        <div className="w-20 h-1 bg-orange-600 mx-auto rounded-full"></div>
       

        <p
          className="text-lg md:text-xl text-gray-500 md:text-[18px] text-[11px] mb-12 max-w-3xl mx-auto mt-4"
         >
          At MSE, we are dedicated to delivering excellence through innovative packaging
          solutions, skilled human resources, and environmental responsibility.
        </p>

        <div
          className="grid md:grid-cols-3 gap-8 text-left"
          
        >
          <PolicyCard
            icon={<ShieldCheck className="text-orange-600 w-8 h-8" />}
            title="Quality Commitment"
            desc="Adhering to strict quality standards that meet customer needs and build trust."
          />
          <PolicyCard
            icon={<Award className="text-orange-600 w-8 h-8" />}
            title="Human Skills & Innovation"
            desc="Utilizing skilled professionals and creative solutions to drive results."
          />
          <PolicyCard
            icon={<RefreshCcw className="text-orange-600 w-8 h-8" />}
            title="Continuous Improvement"
            desc="Improving operations at all stages – from safety to sustainability."
          />
        </div>
      </div>
    </section>
  )
}

function PolicyCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl shadow-xl hover:shadow-orange-600/20 transition-all duration-300">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-white/70">{desc}</p>
    </div>
  )
}
