import { motion } from "framer-motion"
import { Quote } from "lucide-react"

export default function Testimonials() {
    return (
        <section className="py-24 bg-slate-50 relative">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16 px-4">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Hear from Our Drivers</h2>
                    <p className="text-slate-500 max-w-lg mx-auto text-lg font-medium leading-relaxed">
                        Discover real stories and experiences from our dedicated community of electric vehicle drivers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <TestimonialCard
                        author="Sarah J."
                        role="Tesla Model 3 Owner"
                        text="Station Hub has made my weekend road trips so much less stressful. I can always find a fast charger when I need one."
                        img="https://i.pravatar.cc/150?u=sarah"
                        bgColor="bg-slate-900"
                        textColor="text-white"
                    />
                    <TestimonialCard
                        author="David L."
                        role="Rivian R1T Owner"
                        text="The interface is clean and the real-time availability feature is a game changer for me as a frequent traveler."
                        img="https://i.pravatar.cc/150?u=david"
                        bgColor="bg-white"
                        textColor="text-slate-900"
                    />
                </div>

                <div className="flex justify-center mt-12 gap-2">
                    <div className="w-12 h-1.5 rounded-full bg-blue-600"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                </div>
            </div>
        </section>
    )
}

function TestimonialCard({ author, role, text, img, bgColor, textColor }) {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            className={`p-10 md:p-12 rounded-[3rem] ${bgColor} ${textColor} shadow-2xl border border-slate-100 relative overflow-hidden group transition-all duration-300`}
        >
            <Quote className={`absolute top-10 right-10 w-24 h-24 opacity-5 -rotate-12 group-hover:rotate-0 transition-transform duration-500`} />
            <div className="flex items-center gap-5 mb-8">
                <div className="relative">
                    <img src={img} alt={author} className="w-16 h-16 rounded-full border-4 border-blue-500/20 object-cover" />
                    <div className="absolute -bottom-1 -right-1 bg-blue-600 rounded-full p-1.5 border-2 border-white">
                        <Quote className="w-2 h-2 text-white fill-white" />
                    </div>
                </div>
                <div>
                    <h4 className="font-black text-xl tracking-tight">{author}</h4>
                    <p className="text-[12px] font-bold opacity-50 uppercase tracking-[0.2em]">{role}</p>
                </div>
            </div>
            <p className="text-xl font-medium leading-relaxed italic opacity-90">"{text}"</p>
        </motion.div>
    )
}
