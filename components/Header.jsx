import Image from "next/image";
const Header = () => {
    return (
        <div className="">
            <div className="headercontainer flex flex-col justify-center items-center">
                <Image
                    src="/jacks.jpeg"
                    height={200}
                    width={200}
                />
                <button className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >Order Now!</button>

            </div>
            <div className="flex flex-col justify-center items-center ">
                    <div>
                        <h2>Hometown cooking</h2>
                        <h3>At the crossroads of the UP</h3>
                        <p>Welcome to Jack's, where family and flavor come together in the heart of Rapid River! Our cozy diner-style restaurant has been serving up delicious meals and warm smiles for generations. From mouthwatering breakfasts to hearty lunches and hand-smoked BBQ and dinners, we take pride in offering  dishes made with love.</p>
                    </div>
                   
                </div>
            </div>
       
    )
}

export default Header;