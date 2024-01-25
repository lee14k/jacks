import Image from "next/image"
const PhotoRow =()=>{
    return (
<div className="headerbg flex flex-col justify-center items-center gap-2 py-24">
    <div className="grid grid-cols-3 gap-2">
        <div className="text-xl">
            <Image
            src="/food1.jpeg"
            height={200}
            width={200}
            className="rounded"
            />
            Hand Smoked BBQ
            </div>
        <div className="text-xl">
        <Image
            src="/food1.jpeg"
            height={200}
            width={200}
            className="rounded"
            />
            All Day Breakfast</div>
        <div className="text-xl">
        <Image
            src="/food1.jpeg"
            height={200}
            width={200}
            className="rounded"
            />
            Lunch & Other Bites</div>
        </div>
        <button className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">View Menu</button>
</div>
    )
}

export default PhotoRow