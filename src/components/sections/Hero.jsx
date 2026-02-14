import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Percent } from "lucide-react"

export default function Hero() {
    return (
        <section className="relative pt-32 pb-24 overflow-hidden bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center max-w-4xl mx-auto mb-20 px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-8 text-slate-900"
                    >
                        Your Ultimate <span className="inline-flex items-center justify-center bg-blue-50 p-3 rounded-full mx-1 align-middle translate-y-[-4px] border border-blue-100 shadow-sm"><MapPin className="w-8 h-8 text-blue-600" /></span> Electric Car <br />
                        <span className="text-blue-600 italic font-extrabold tracking-tight">Charging</span> Solution
                    </motion.h1>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Button size="lg" className="rounded-full px-10 h-16 text-lg font-bold bg-slate-900 hover:bg-slate-800 gap-3 shadow-xl">
                            Find a station <ArrowRight className="w-5 h-5" />
                        </Button>

                        <div className="flex items-center gap-3 p-2 px-5 rounded-full bg-slate-50 border border-slate-200">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map(i => (
                                    <img key={i} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="avatar" />
                                ))}
                            </div>
                            <div className="w-[1px] h-8 bg-slate-200 mx-2"></div>
                            <button className="flex items-center gap-2 group">
                                <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <MapPin className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-sm font-bold text-slate-900">Track Route</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="relative mx-auto max-w-6xl px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="rounded-[3rem] overflow-hidden shadow-2xl bg-white p-3 md:p-6"
                    >
                        <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[2.5rem] overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=2000"
                                alt="White Tesla"
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute inset-0 p-6 md:p-12 pointer-events-none">
                                <motion.div
                                    initial={{ x: -40, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="bg-white/95 backdrop-blur-xl border border-white/20 p-6 rounded-[2rem] shadow-2xl max-w-[240px] pointer-events-auto"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="bg-blue-600 p-2 rounded-xl">
                                            <Percent className="w-5 h-5 text-white" />
                                        </div>
                                        <span className="font-black text-slate-900 tracking-tight">Get 30% discount!</span>
                                    </div>
                                    <p className="text-[12px] text-slate-500 font-medium leading-relaxed">
                                        Exclusive offer for new EV drivers at any Station Hub point.
                                    </p>
                                    <button className="text-[11px] text-blue-600 font-black mt-4 underline decoration-blue-600/30 tracking-widest block uppercase">
                                        Find station near to you
                                    </button>
                                </motion.div>

                                <motion.div
                                    initial={{ y: 40, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                    className="absolute bottom-12 right-12 bg-white p-3 rounded-2xl shadow-2xl border border-slate-100 hidden md:block w-[200px] pointer-events-auto"
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1569336415962-a4bd9f67c0f1?auto=format&fit=crop&q=80&w=300"
                                        alt="Map"
                                        className="rounded-xl w-full h-28 object-cover mb-3"
                                    />
                                    <div className="flex items-center gap-3 px-1">
                                        <div className="relative flex">
                                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                            <div className="absolute inset-0 w-3 h-3 rounded-full bg-red-500 animate-ping opacity-75"></div>
                                        </div>
                                        <span className="text-[11px] font-black text-slate-900 uppercase tracking-widest">You are here</span>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Floating Avatar 3 */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 }}
                        className="absolute top-1/4 -right-8 bg-white p-2 rounded-2xl shadow-xl hidden xl:flex items-center gap-3"
                    >
                        <img src="https://i.pravatar.cc/100?img=33" className="w-10 h-10 rounded-full object-cover" />
                        <div className="pr-4">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Charging</p>
                            <p className="text-xs font-bold text-slate-900">Tesla Model 3</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )

}
