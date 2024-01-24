import Image from "next/image";
const Header =()=>{
    return (
        <div>
        <div className="headercontainer flex flex-col justify-center items-center">
            <Image
src="/jacks.jpeg"
height={200}
width={200}   
            />
            <button className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
>Order Now!</button>
            
        </div>
        <div className="flex flex-col justify-center items-center">
        <h2>Hometown cooking</h2>
        <h3></h3>
            </div>
        </div>
    )
}

export default Header;