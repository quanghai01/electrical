import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto rounded-[3.5rem] bg-slate-900 p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Let's Stay In Touch</h2>
                        <p className="text-slate-400 mb-12 text-lg max-w-xl mx-auto font-medium leading-relaxed">
                            Subscribe to our newsletter for updates on latest charging stations, EV news, and special offers.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto bg-white/10 backdrop-blur-md p-3 rounded-3xl border border-white/10">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-4 outline-none rounded-2xl bg-transparent text-white placeholder:text-slate-400 font-bold"
                            />
                            <Button className="rounded-2xl px-10 h-14 bg-blue-600 hover:bg-blue-700 text-sm font-black uppercase tracking-widest shadow-xl shadow-blue-900/40 transition-all active:scale-95">
                                Subscribe
                            </Button>
                        </div>
                    </div>


                    {/* Floating decorative images as seen in the mockup */}
                    <img
                        src="https://images.unsplash.com/photo-1695653422715-991ec3a0db7a?auto=format&fit=crop&q=80&w=200"
                        alt="decor"
                        className="absolute -left-10 top-1/2 -translate-y-1/2 w-32 h-32 rounded-3xl opacity-20 -rotate-12 hidden lg:block"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1620228303043-42e569996d93?auto=format&fit=crop&q=80&w=200"
                        alt="decor"
                        className="absolute -right-10 top-1/2 -translate-y-1/2 w-32 h-32 rounded-3xl opacity-20 rotate-12 hidden lg:block"
                    />
                </div>
            </div>
        </section>
    )
}
