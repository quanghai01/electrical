import { Button } from "@/components/ui/button"
import { BatteryCharging, Menu } from "lucide-react"

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-100">
            <div className="container mx-auto px-4 h-24 flex items-center justify-between max-w-7xl">
                <div className="flex items-center gap-2.5 group cursor-pointer">
                    <div className="bg-blue-600 p-2.5 rounded-2xl shadow-lg shadow-blue-100 group-hover:scale-105 transition-transform">
                        <BatteryCharging className="text-white w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black tracking-tight text-slate-900">Station <span className="text-blue-600">Hub</span></span>
                </div>

                <div className="hidden lg:flex items-center gap-10 text-[15px] font-bold text-slate-500">
                    <a href="#" className="text-slate-900 hover:text-blue-600 transition-colors">Home</a>
                    <a href="#" className="hover:text-blue-600 transition-colors">Find charge stations</a>
                    <a href="#" className="hover:text-blue-600 transition-colors">About</a>
                    <a href="#" className="hover:text-blue-600 transition-colors">News</a>
                </div>

                <div className="flex items-center gap-6">
                    <button className="text-[15px] font-bold text-slate-500 hover:text-slate-900 transition-colors hidden sm:block">Log In</button>
                    <Button className="rounded-full px-8 h-12 text-sm font-bold bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-100 transition-all active:scale-95">Contact Us</Button>
                    <button className="lg:hidden p-2 hover:bg-slate-50 rounded-xl transition-colors">
                        <Menu className="w-7 h-7 text-slate-900" />
                    </button>
                </div>
            </div>
        </nav>
    )

}
