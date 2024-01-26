import Image from "next/image"
import { Rubik_Doodle_Shadow } from "next/font/google";
const rubik = Rubik_Doodle_Shadow({
    weight: '400',
    subsets: ["latin"]
});

const PhotoRow = () => {
    return (
        <div className="headerbg flex flex-col justify-center items-center gap-4 py-24">
            <div className="grid grid-cols-3 gap-4">
                <div className="text-4xl flex flex-col justify-center items-center font-bold text-white">
                    <Image
                        src="/food1.jpeg"
                        height={400}
                        width={400}
                        className="rounded"
                    />
                    <h4 className={rubik.className}>Hand Smoked BBQ</h4>
                </div>
                <div className="text-4xl flex flex-col justify-center items-center font-bold text-white">
                    <Image
                        src="/food1.jpeg"
                        height={400}
                        width={400}
                        className="rounded"
                    />
                    <h4 className={rubik.className}>All Day Breakfast</h4>    </div>
                <div className="text-4xl flex flex-col justify-center items-center font-bold text-white">
                    <Image
                        src="/food1.jpeg"
                        height={400}
                        width={400}
                        className="rounded"
                    />
                    <h4 className={rubik.className}>Lunch & Other Bites</h4>    </div>
            </div>
            <button className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">View Menu</button>
        </div>
    )
}

export default PhotoRow