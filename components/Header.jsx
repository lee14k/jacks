import Image from "next/image";
const Header =()=>{
    return (
        <div className="headercontainer flex flex-col justify-center items-center">
            <Image
src="/jacks.jpeg"
height={200}
width={200}   
            />
            <div>

            </div>
        </div>
    )
}

export default Header;