import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MenuBook from "@/components/MenuBook";
export default function Menu  () {
    return (
        <div>
            <Navbar/>
        <h1>About</h1>
        <p>This is the about page</p>
        <MenuBook/>
        <Footer/>
        </div>
    );
}