import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

export default function Stats() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-sm border overflow-hidden relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-blue-600 font-bold text-sm uppercase mb-4 block">About Station Hub</span>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                                Live Eco-Friendly. <br />
                                <span className="text-blue-600 italic underline decoration-blue-200">Go Green!</span>
                            </h2>
                            <p className="text-slate-500 mb-8 max-w-lg leading-relaxed">
                                Effortlessly find electric vehicle charging stations near you with Station Hub's intuitive and real-time station finder.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Button size="lg" className="rounded-full px-8 bg-slate-900 gap-2">
                                    Contact Us <ArrowUpRight className="w-4 h-4" />
                                </Button>
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                                            <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="avatar" />
                                        </div>
                                    ))}
                                    <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-600">
                                        5k+
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <StatItem value="9+" label="Years of Experience" />
                            <StatItem value="50+" label="Service Stations" />
                            <StatItem value="15K+" label="Positive Reviews" />
                        </div>
                    </div>

                    {/* Abstract background shape */}
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] rounded-full bg-blue-50/50 -z-0"></div>
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
