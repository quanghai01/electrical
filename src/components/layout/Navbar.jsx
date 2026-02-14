import { Button } from "@/components/ui/button"
import { BatteryCharging, Menu } from "lucide-react"

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="bg-primary p-2 rounded-lg">
                        <BatteryCharging className="text-white w-6 h-6" />
                    </div>
                    <span className="text-xl font-bold tracking-tight">Station <span className="text-primary">Hub</span></span>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <a href="#" className="hover:text-primary transition-colors">Home</a>
                    <a href="#" className="hover:text-primary transition-colors">Find charge stations</a>
                    <a href="#" className="hover:text-primary transition-colors">About</a>
                    <a href="#" className="hover:text-primary transition-colors">News</a>
                </div>

                <div className="flex items-center gap-4">
                    <button className="text-sm font-medium hidden sm:block">Log In</button>
                    <Button className="rounded-full px-6">Contact Us</Button>
                    <button className="md:hidden">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </nav>
    )
}
