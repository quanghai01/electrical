import { BatteryCharging, Facebook, Instagram, Twitter, Linkedin, Phone, Mail } from "lucide-react"

export default function Footer() {
    return (
        <footer className="pt-24 pb-12 bg-slate-900 text-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 px-4">
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-blue-600 p-2 rounded-lg">
                                <BatteryCharging className="text-white w-6 h-6" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">Station Hub</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Empowering the world on electric vehicle energy, one charge at a time. Join the revolution.
                        </p>
                        <div className="flex gap-4">
                            <SocialIcon icon={<Facebook size={18} />} />
                            <SocialIcon icon={<Instagram size={18} />} />
                            <SocialIcon icon={<Twitter size={18} />} />
                            <SocialIcon icon={<Linkedin size={18} />} />
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Our services</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li><a href="#" className="hover:text-blue-400 transition-colors">AC Charger service</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">DC Charger service</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">EV Delivery Service</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Charge point Service</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Find charge stations</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Company News</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Contact us</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-blue-500">
                                    <Phone size={16} />
                                </div>
                                <span>+880171xxxxxx</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-blue-500">
                                    <Mail size={16} />
                                </div>
                                <span>hello@stationhub.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
                    <p>© 2024 Station Hub. All rights reserved. Designed by @itscurud</p>
                </div>
            </div>
        </footer>
    )
}

function SocialIcon({ icon }) {
    return (
        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-all text-slate-400 hover:text-white">
            {icon}
        </a>
    )
}
