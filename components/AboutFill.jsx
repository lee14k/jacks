import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({ weight: "400", subsets: ["latin"] });
const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Resources", href: "#" },
  { name: "Company", href: "#" },
];
const stats = [
  { label: "Population", value: "1,194" },
  { label: "Nature destinations within 15 miles", value: "10" },
  { label: "Jack's", value: "1" },
];
const values = [
  {
    name: "Scratch Kitchen",
    description:
      "Every meal at Jack’s starts in our from-scratch kitchen, where the magic of fresh ingredients meets culinary passion. Our menu features dishes that are not only flavorful but also heartwarming, embodying our dedication to quality and excellence.",
  },
  {
    name: "Community",
    description:
      "At the heart of Jack’s is a deep-seated commitment to caring for our community, recognizing that our restaurant is more than a place to eat; it’s a place where people come together, forming bonds that strengthen and enrich our shared lives.",
  },
  {
    name: "Young Adults",
    description:
      "We believe in the power of mentorship and support for young adults, offering them a platform to learn, grow, and thrive within our walls, reflecting our commitment to fostering the next generation of leaders and innovators.",
  },
  {
    name: "Unique Flavors",
    description:
      "Jack’s is a culinary adventure with daily specials and unique dishes where unique flavors from around the globe are celebrated and shared, showcasing our passion for bringing diverse and exciting tastes to our patrons, because variety is the spice of life.",
  },
  {
    name: "Innovation",
    description:
      "Innovation is at the core of Jack’s ethos, encouraging both our team and our guests to always be open to trying new things, fostering a culture of creativity and exploration that keeps us moving forward and keeps our offerings dynamic and engaging",
  },
  {
    name: "History",
    description:
      "We are proud to be part of the vibrant community of Rapid River, Michigan - a place we call home. Nestled at the crossroads of the Upper Peninsula, Rapid River stands as a welcoming beacon to travelers navigating the intersection of the region’s major highways.",
  },
];




export default function AboutFill() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className={merriweather.className}>
    <div className="bg-white">
      {/* Header */}

      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10">
         
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] opacity-30"
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Homecooking in the heart of rural Michigan
                  </h1>
                  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    At Jack's Restaurant we are proud to be part of the vibrant
                    community of Rapid River, Michigan - a place we call home.
                    Nestled at the crossroads of the Upper Peninsula, Rapid
                    River stands as a welcoming beacon to travelers navigating
                    the intersection of the region's major highways. It's a
                    unique spot where adventurers heading to any corner of the
                    U.P., inevitably pass by. Whether you're traveling from
                    Menominee to Marquette or Fayette to Copper Harbor our town
                    serves as a gathering point for stories, laughter, and, of
                    course, great food. Here at Jack's, we cherish the
                    opportunity to serve both our local community and the myriad
                    of visitors embarking on their northern journeys. Rapid
                    River is more than just a waypoint; it's a place where
                    connections are made, and memories are shared, truly
                    embodying the spirit of the Upper Peninsula.
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        src="/mainst.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        src="/about-2-2722.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="/about-4-2749.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        src="/about-5-5237.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="/about-6-5215.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our mission
            </h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl leading-8 text-gray-600">
                  Jack's Restaurant isn't just a place to grab a bite to eat;
                  it's a slice of the vibrant spirit that makes Rapid River and
                  the entire Upper Peninsula so special. Located at the
                  crossroads of adventure, Rapid River welcomes locals, weekend
                  wanderers, avid explorers, and everyone in between. Whether
                  you're from down the road or across the country, seasoned
                  Yooper or a first-time visitor, we invite you to make Jack's
                  your home base.
                </p>
                <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                  <p>
                    With hearty meals made with the freshest ingredients and
                    served with warm hospitality, we aim to fuel your journeys
                    and nourish your soul. Share stories around a steaming cup
                    of coffee, savor laughter over a delicious meal, and find a
                    moment of connection in the heart of the U.P. Let Jack's be
                    your waypoint, your gathering place, a space where you
                    create lasting memories filled with the warmth and
                    camaraderie of our beautiful region.
                  </p>
                </div>
              </div>
              <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="w-64 space-y-8 xl:w-80">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col-reverse gap-y-4"
                    >
                      <dt className="text-base leading-7 text-gray-600">
                        {stat.label}
                      </dt>
                      <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
          <img
            src="/header.png"
            alt=""
            className="w-full object-cover xl:rounded-3xl"
          />
        </div>

        {/* Values section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our values
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              At Jack's we do things the old fashioned way, and our values show
              it:
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name}>
                <dt className="font-semibold text-gray-900">{value.name}</dt>
                <dd className="mt-1 text-gray-600">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Logo cloud */}
        <div className="relative isolate -z-10 mt-32 sm:mt-48">
          <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
            <svg
              className="h-[40rem] w-[80rem] flex-none stroke-gray-200"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                  width={200}
                  height={200}
                  x="50%"
                  y="50%"
                  patternUnits="userSpaceOnUse"
                  patternTransform="translate(-100 0)"
                >
                  <path d="M.5 200V.5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y="50%" className="overflow-visible fill-gray-50">
                <path
                  d="M-300 0h201v201h-201Z M300 200h201v201h-201Z"
                  strokeWidth={0}
                />
              </svg>
              <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"
              />
            </svg>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
              We support the following local organizations (and so many more!){" "}
            </h2>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <img
                className="col-span-2 max-h-32 w-full object-contain lg:col-span-1"
                src="/honorlogo.png"
                alt="Transistor"
                width={458}
                height={128}
              />
              <img
                className="col-span-2 max-h-32 w-full object-contain lg:col-span-1"
                src="/rrlogo.png"
                alt="Reform"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-32 w-full object-contain lg:col-span-1"
                src="/fisherman.jpeg"
                alt="Tuple"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-32 w-full object-contain sm:col-start-2 lg:col-span-1"
                src="/safeharbor.jpeg"
                alt="SavvyCal"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 col-start-2 max-h-32 w-full object-contain sm:col-start-auto lg:col-span-1"
                src="/bclogo.jpeg"
                alt="Statamic"
                width={158}
                height={48}
              />
            </div>
          </div>
        </div>

        {/* Team section */}

        {/* Blog section */}
      </main>

      {/* Footer */}
    </div>
    </div>
  );
}
