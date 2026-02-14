import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

export default function Stats() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Eco-Friendly Image & Text Block */}
                <div className="bg-slate-50 rounded-[3rem] overflow-hidden border border-slate-100 shadow-sm mb-12">
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-1/2 relative h-[400px] lg:h-auto">
                            <img
                                src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1000"
                                alt="Eco Friendly Charging"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                        <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center">
                            <span className="text-blue-600 font-black text-[12px] uppercase tracking-[0.2em] mb-6 block">About Station Hub</span>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight leading-[1.1]">
                                Live Eco-Friendly. <br />
                                <span className="text-blue-600 italic">Go Green!</span>
                            </h2>
                            <p className="text-slate-500 mb-10 text-lg font-medium leading-relaxed max-w-md">
                                Effortlessly locate electric vehicle charging stations near you with our intuitive and real-time station finder.
                            </p>

                            <div className="flex flex-wrap gap-6 items-center">
                                <Button size="lg" className="rounded-full px-10 h-14 bg-slate-900 hover:bg-slate-800 text-sm font-bold shadow-lg">
                                    Contact Us
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <StatItem value="9+" label="Years of Experience" />
                    <StatItem value="50+" label="Service Stations" />
                    <StatItem value="15K+" label="Positive Reviews" />
                </div>
            </div>
        </section>
    )

}

function StatItem({ value, label }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-slate-50 border flex flex-col items-center justify-center text-center group transition-colors hover:bg-white"
        >
            <span className="text-4xl font-extrabold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{value}</span>
            <span className="text-sm font-medium text-slate-500">{label}</span>
        </motion.div>
    )
}
