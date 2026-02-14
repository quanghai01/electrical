import { motion } from "framer-motion"
import { Search, Info, Map, Zap } from "lucide-react"

const services = [
    {
        icon: <Search className="w-6 h-6 text-blue-600" />,
        title: "Search for Charging Stations",
        desc: "Effortlessly find electric vehicle charging stations near you with our intuitive search feature."
    },
    {
        icon: <Info className="w-6 h-6 text-blue-600" />,
        title: "Stay Informed with Latest EV News",
        desc: "Stay updated with latest news and trends in the electric vehicle industry."
    },
    {
        icon: <Map className="w-6 h-6 text-blue-600" />,
        title: "Plan Trips with Ease",
        desc: "Seamlessly plan your EV trips with our integrated map and station finder."
    },
    {
        icon: <Zap className="w-6 h-6 text-blue-600" />,
        title: "Fast Charging Capabilities",
        desc: "Discover high-speed charging stations that get you back on the road in minutes."
    }
]

export default function Services() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Map Decoration */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 100h800v800h-800z" fill="currentColor" />
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-4">
                        <div className="bg-slate-100 p-2 px-4 rounded-full flex items-center gap-2">
                            <Zap className="w-4 h-4 text-blue-600 fill-blue-600" />
                            <span className="text-sm font-bold uppercase tracking-wider">Best Services</span>
                        </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Unlocking the Power of EV Charging</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        Our platform provides comprehensive solutions for all your electric vehicle charging needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-12">
                    {/* Left Cards */}
                    <div className="space-y-8">
                        {services.slice(0, 2).map((s, i) => (
                            <ServiceCard key={i} {...s} align="right" />
                        ))}
                    </div>

                    {/* Central Image */}
                    <div className="flex justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="bg-gradient-to-b from-blue-50 to-transparent p-4 rounded-full">
                                <img
                                    src="https://images.unsplash.com/photo-1695653422715-991ec3a0db7a?auto=format&fit=crop&q=80&w=400"
                                    alt="Charger"
                                    className="w-full max-w-[300px] mx-auto rounded-3xl shadow-xl"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Cards */}
                    <div className="space-y-8">
                        {services.slice(2, 4).map((s, i) => (
                            <ServiceCard key={i} {...s} align="left" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

function ServiceCard({ icon, title, desc, align }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: align === 'right' ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`p-6 rounded-3xl bg-slate-50 border hover:shadow-lg transition-all group ${align === 'right' ? 'lg:text-right' : 'lg:text-left'}`}
        >
            <div className={`flex flex-col ${align === 'right' ? 'lg:items-end' : 'lg:items-start'} gap-4`}>
                <div className="p-3 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                    {icon}
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-2">{title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
            </div>
        </motion.div>
    )
}
