import { motion } from "framer-motion"
import { MapPin } from "lucide-react"

const stations = [
    { img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=400" },
    { img: "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?auto=format&fit=crop&q=80&w=400" },
    { img: "https://images.unsplash.com/photo-1558444479-c8a02e6244ad?auto=format&fit=crop&q=80&w=400" },
    { img: "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?auto=format&fit=crop&q=80&w=400" }
]

export default function Stations() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Best stations near to you</h2>
                    <p className="text-slate-500 max-w-lg mx-auto">
                        Discover the highest-rated charging stations in your area, rated by our community of EV drivers.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stations.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="relative group cursor-pointer overflow-hidden rounded-[2rem]"
                        >
                            <img
                                src={s.img}
                                alt="Station"
                                className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                <div className="bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg">
                                    <MapPin className="w-5 h-5 text-blue-600" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
