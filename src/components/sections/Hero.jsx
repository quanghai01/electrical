import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Percent } from "lucide-react"

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16 px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
                    >
                        Your Ultimate <span className="inline-flex items-center justify-center bg-blue-100 text-blue-600 p-2 rounded-full mx-1"><MapPin className="w-8 h-8 md:w-10 md:h-10" /></span> Electric Car <br />
                        <span className="text-primary italic">Charging</span> Solution
                    </motion.h1>

                    <div className="flex justify-center gap-4">
                        <Button size="lg" className="rounded-full px-8 gap-2">
                            Find a station <ArrowRight className="w-4 h-4" />
                        </Button>
                        <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full border shadow-sm">
                            <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1533733358354-2e97c8c82e3c?auto=format&fit=crop&q=80&w=100&h=100" alt="user" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-sm font-semibold">Track Route</span>
                        </div>
                    </div>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    {/* Main Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="rounded-[2.5rem] overflow-hidden shadow-2xl bg-white p-4 md:p-8"
                    >
                        <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[2rem] overflow-hidden bg-slate-200">
                            <img
                                src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=2000"
                                alt="Electric Car"
                                className="w-full h-full object-cover"
                            />

                            {/* Floating Card 1 */}
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="absolute top-8 left-8 bg-black/60 backdrop-blur-md text-white p-4 rounded-2xl hidden md:block"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="bg-blue-600 p-2 rounded-lg">
                                        <Percent className="w-4 h-4" />
                                    </div>
                                    <span className="font-bold">Get 30% discount!</span>
                                </div>
                                <p className="text-xs text-slate-300">Get 30% discount on first charge</p>
                                <button className="text-xs text-blue-400 font-bold mt-2 underline">Find station near to you</button>
                            </motion.div>

                            {/* Floating Card 2 - Map */}
                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.7 }}
                                className="absolute bottom-8 right-8 bg-white p-2 rounded-2xl shadow-xl hidden lg:block w-48"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1569336415962-a4bd9f67c0f1?auto=format&fit=crop&q=80&w=300"
                                    alt="Map"
                                    className="rounded-xl w-full h-24 object-cover mb-2"
                                />
                                <div className="flex items-center gap-2 px-1">
                                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                                    <span className="text-xs font-bold text-slate-900 uppercase">You are here</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
