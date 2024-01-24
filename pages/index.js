import Image from "next/image";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PhotoRow from "@/components/PhotoRow";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
<Navbar/>
<Header/>
<PhotoRow/>
<Footer/>
    </div>
  );
}
