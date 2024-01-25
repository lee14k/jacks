import Image from "next/image";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PhotoRow from "@/components/PhotoRow";
import InstaGrid from "@/components/InstaGrid";
import StackedMenu from "@/components/StackedMenu";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
<Navbar/>
<Header/>
<PhotoRow/>
<InstaGrid/>
<StackedMenu/>
<Footer/>
    </div>
  );
}
