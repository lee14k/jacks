import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutFill from "@/components/AboutFill";
export default function About  () {
    return (
        <div>
            <Navbar/>
        <AboutFill/>
        <div className="mt-8">
        <Footer/>
        </div>
        </div>
    );
}