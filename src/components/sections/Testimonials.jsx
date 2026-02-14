import { motion } from "framer-motion"
import { Quote } from "lucide-react"

export default function Testimonials() {
    return (
        <section className="py-24 bg-slate-50 relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Hear from Our Drivers</h2>
                    <p className="text-slate-500 max-w-lg mx-auto">
                        Discover real stories and experiences from our dedicated community of electric vehicle drivers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
            whileHover={{ y: -5 }}
            className={`p-10 rounded-[2.5rem] ${bgColor} ${textColor} shadow-xl border relative overflow-hidden group`}
        >
            <Quote className={`absolute top-8 right-8 w-12 h-12 opacity-10`} />
            <div className="flex items-center gap-4 mb-6">
                <img src={img} alt={author} className="w-14 h-14 rounded-full border-2 border-blue-500 p-0.5" />
                <div>
                    <h4 className="font-bold">{author}</h4>
                    <p className="text-sm opacity-60">{role}</p>
                </div>
            </div>
            <p className="text-lg leading-relaxed">{text}</p>
        </motion.div>
    )
}
