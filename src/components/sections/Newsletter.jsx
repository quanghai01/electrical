import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto rounded-[3rem] bg-slate-50 border p-8 md:p-16 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Let's Stay In Touch</h2>
                        <p className="text-slate-500 mb-8">
                            Subscribe to our newsletter for updates on latest charging stations, EV news, and special offers.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto bg-white p-2 rounded-2xl shadow-sm border">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-2 outline-none rounded-xl"
                            />
                            <Button className="rounded-xl px-8 bg-blue-600 hover:bg-blue-700">Subscribe</Button>
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
