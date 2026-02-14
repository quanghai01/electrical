import { motion } from "framer-motion"
import { Search, Info, Map, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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
        <section className="py-32 bg-white relative overflow-hidden">
            {/* World Map Background */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none select-none">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg"
                    className="w-full h-full object-contain scale-150"
                    alt="map"
                />
            </div>

            <div className="container mx-auto px-4 relative z-10 max-w-7xl">
                <div className="text-center mb-24">
                    <div className="flex justify-center mb-6">
                        <Badge variant="outline" className="bg-blue-50 border-blue-100 p-2 px-6 rounded-full flex items-center gap-2 shadow-sm pointer-events-none">
                            <Zap className="w-4 h-4 text-blue-600 fill-blue-600" />
                            <span className="text-[12px] font-black uppercase tracking-[0.2em] text-blue-700">Best Services</span>
                        </Badge>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                        Unlocking the Power of EV Charging
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
                        Effortlessly locate electric vehicle charging stations near you <br className="hidden md:block" />
                        with our intuitive search and real-time news updates.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-16 xl:gap-24">
                    {/* Left Cards */}
                    <div className="space-y-12">
                        {services.slice(0, 2).map((s, i) => (
                            <ServiceCard key={i} {...s} align="right" />
                        ))}
                    </div>

                    {/* Central Image - Charging Station */}
                    <div className="flex justify-center order-first lg:order-none mb-12 lg:mb-0">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="bg-gradient-to-b from-blue-50/50 to-transparent p-6 rounded-full">
                                <img
                                    src="https://images.unsplash.com/photo-1695653422715-991ec3a0db7a?auto=format&fit=crop&q=80&w=600"
                                    alt="EV Charger"
                                    className="w-full max-w-[340px] mx-auto rounded-[2rem] shadow-2xl border-4 border-white"
                                />
                            </div>

                            {/* Decorative Button below central image as seen in mockup */}
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
                                <Button className="rounded-full bg-blue-600 hover:bg-blue-700 px-8 h-12 shadow-xl shadow-blue-200 font-bold whitespace-nowrap">
                                    Find a station
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Cards */}
                    <div className="space-y-12">
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
            className="group"
        >
            <Card className={`bg-slate-50 border-slate-100 hover:shadow-lg transition-all rounded-3xl overflow-hidden ${align === 'right' ? 'lg:text-right' : 'lg:text-left'}`}>
                <CardContent className={`p-6 flex flex-col ${align === 'right' ? 'lg:items-end' : 'lg:items-start'} gap-4`}>
                    <div className="p-3 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                        {icon}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2 text-slate-900">{title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}

