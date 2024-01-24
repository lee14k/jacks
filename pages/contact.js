import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
export default function Contact  () {
    return (
        <div>
            <Navbar/>
        <h1>About</h1>
        <p>This is the about page</p>
        <ContactForm/>
        <Footer/>
        </div>
    );
}