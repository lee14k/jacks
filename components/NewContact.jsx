import Navbar from "./Navbar";
import Footer from "./Footer";
import Link from "next/link";
import Image from "next/image";
export default function NewContact() {
  const stats = [
    { label: "Founded", value: "2021" },
    { label: "Employees", value: "37" },
    { label: "Countries", value: "12" },
    { label: "Raised", value: "$25M" },
  ];
  return (
    <div>
      <Navbar />

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-4">
              <Image src="/Bobbi.png" width={500} height={500} />
            </div>
            <div>
              <div className="relative bg-white">
                <div className="lg:absolute lg:inset-0 lg:left-1/2"></div>
                <div className="">
                  <div className="px-6 lg:px-8">
                    <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                      <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                        Let's work together
                      </h2>
                      <p className="mt-2 text-lg leading-8 text-gray-600">
                        We'd love to hear from you. Send us a message and we'll
                        respond as soon as possible.
                      </p>
                      <form action="#" method="POST" className="mt-16">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                          <div>
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-semibold leading-6 text-gray-900"
                            >
                              First name
                            </label>
                            <div className="mt-2.5">
                              <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor="last-name"
                              className="block text-sm font-semibold leading-6 text-gray-900"
                            >
                              Last name
                            </label>
                            <div className="mt-2.5">
                              <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                          <div className="sm:col-span-2">
                            <label
                              htmlFor="email"
                              className="block text-sm font-semibold leading-6 text-gray-900"
                            >
                              Email
                            </label>
                            <div className="mt-2.5">
                              <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                          <div className="sm:col-span-2">
                            <div className="flex justify-between text-sm leading-6">
                              <label
                                htmlFor="phone"
                                className="block font-semibold text-gray-900"
                              >
                                Phone
                              </label>
                              <p
                                id="phone-description"
                                className="text-gray-400"
                              >
                                Optional
                              </p>
                            </div>
                            <div className="mt-2.5">
                              <input
                                type="tel"
                                name="phone"
                                id="phone"
                                autoComplete="tel"
                                aria-describedby="phone-description"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              />
                            </div>
                          </div>
                          <div className="sm:col-span-2">
                            <div className="flex justify-between text-sm leading-6">
                              <label
                                htmlFor="message"
                                className="block text-sm font-semibold leading-6 text-gray-900"
                              >
                                How can we help you?
                              </label>
                            </div>
                            <div className="mt-2.5">
                              <textarea
                                id="message"
                                name="message"
                                rows={4}
                                aria-describedby="message-description"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
                          <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >
                            Send message
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
