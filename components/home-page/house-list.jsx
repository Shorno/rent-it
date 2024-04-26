import Link from "next/link";
import {BathIcon, BedIcon, HeartIcon, MapPinIcon} from "lucide-react";
import Image from "next/image";

export default function HouseList(){
    return(
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <Link className="bg-white rounded-lg shadow-lg overflow-hidden" href="https://rent-it-phi.vercel.app/houses">
                    <Image
                        alt="Property 1"
                        className="w-full h-48 object-cover"
                        height={250}
                        src="/img/rent-house-1.jpg"
                        style={{
                            aspectRatio: "400/250",
                            objectFit: "cover",
                        }}
                        width={400}
                    />
                    <div className="p-4 space-y-2">
                        <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold">৳9,500/m</span>
                            <HeartIcon className="w-6 h-6 text-gray-400 hover:text-red-500"/>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-500">
                            <BedIcon className="w-4 h-4"/>
                            <span>3 Beds</span>
                            <BathIcon className="w-4 h-4"/>
                            <span>2 Baths</span>
                            <MapPinIcon className="w-4 h-4"/>
                            <span>Dhaka</span>
                        </div>
                        <p>Spacious 3-bedroom apartment in the heart of the city.</p>
                    </div>
                </Link>
                <Link className="bg-white rounded-lg shadow-lg overflow-hidden" href="/houses">
                    <Image
                        alt="Property 2"
                        className="w-full h-48 object-cover"
                        height={250}
                        src="/img/rent-house-2.jpg"
                        style={{
                            aspectRatio: "400/250",
                            objectFit: "cover",
                        }}
                        width={400}
                    />
                    <div className="p-4 space-y-2">
                        <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold">৳6,200/m</span>
                            <HeartIcon className="w-6 h-6 text-gray-400 hover:text-red-500"/>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-500">
                            <BedIcon className="w-4 h-4"/>
                            <span>4 Beds</span>
                            <BathIcon className="w-4 h-4"/>
                            <span>3 Baths</span>
                            <MapPinIcon className="w-4 h-4"/>
                            <span>Mirpur</span>
                        </div>
                        <p>Luxurious 4-bedroom house with a pool and private backyard.</p>
                    </div>
                </Link>
                <Link className="bg-white rounded-lg shadow-lg overflow-hidden" href="/houses">
                    <Image
                        alt="Property 3"
                        className="w-full h-48 object-cover"
                        height={250}
                        src="/img/rent-house-3.jpg"
                        style={{
                            aspectRatio: "400/250",
                            objectFit: "cover",
                        }}
                        width={400}
                    />
                    <div className="p-4 space-y-2">
                        <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold">৳7,500/m</span>
                            <HeartIcon className="w-6 h-6 text-gray-400 hover:text-red-500"/>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-500">
                            <BedIcon className="w-4 h-4"/>
                            <span>2 Beds</span>
                            <BathIcon className="w-4 h-4"/>
                            <span>1 Bath</span>
                            <MapPinIcon className="w-4 h-4"/>
                            <span>Savar</span>
                        </div>
                        <p>Cozy 2-bedroom apartment with a balcony and city views.</p>
                    </div>
                </Link>
                <Link className="bg-white rounded-lg shadow-lg overflow-hidden" href="/houses">
                    <Image
                        alt="Property 4"
                        className="w-full h-48 object-cover"
                        height={250}
                        src="/img/rent-house-4.jpg"
                        style={{
                            aspectRatio: "400/250",
                            objectFit: "cover",
                        }}
                        width={400}
                    />
                    <div className="p-4 space-y-2">
                        <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold">৳8,500/m</span>
                            <HeartIcon className="w-6 h-6 text-gray-400 hover:text-red-500"/>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-500">
                            <BedIcon className="w-4 h-4"/>
                            <span>3 Beds</span>
                            <BathIcon className="w-4 h-4"/>
                            <span>2 Baths</span>
                            <MapPinIcon className="w-4 h-4"/>
                            <span>Birulia</span>
                        </div>
                        <p>Modern 3-bedroom townhouse with a private garage.</p>
                    </div>
                </Link>
                <Link className="bg-white rounded-lg shadow-lg overflow-hidden" href="/houses">
                    <Image
                        alt="Property 5"
                        className="w-full h-48 object-cover"
                        height={250}
                        src="/img/rent-house-5.jpg"
                        style={{
                            aspectRatio: "400/250",
                            objectFit: "cover",
                        }}
                        width={400}
                    />
                    <div className="p-4 space-y-2">
                        <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold">৳9,200/m</span>
                            <HeartIcon className="w-6 h-6 text-gray-400 hover:text-red-500"/>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-500">
                            <BedIcon className="w-4 h-4"/>
                            <span>2 Beds</span>
                            <BathIcon className="w-4 h-4"/>
                            <span>1 Bath</span>
                            <MapPinIcon className="w-4 h-4"/>
                            <span>Khagan</span>
                        </div>
                        <p>Charming 2-bedroom apartment with a private patio.</p>
                    </div>
                </Link>
                <Link className="bg-white rounded-lg shadow-lg overflow-hidden" href="/houses">
                    <Image
                        alt="Property 6"
                        className="w-full h-48 object-cover"
                        height={250}
                        src="/img/rent-house-6.jpg"
                        style={{
                            aspectRatio: "400/250",
                            objectFit: "cover",
                        }}
                        width={400}
                    />
                    <div className="p-4 space-y-2">
                        <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold">৳10,500/m</span>
                            <HeartIcon className="w-6 h-6 text-gray-400 hover:text-red-500"/>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-500">
                            <BedIcon className="w-4 h-4"/>
                            <span>4 Beds</span>
                            <BathIcon className="w-4 h-4"/>
                            <span>3 Baths</span>
                            <MapPinIcon className="w-4 h-4"/>
                            <span>Dhaka</span>
                        </div>
                        <p>Luxurious 4-bedroom house with a pool and private yard.</p>
                    </div>
                </Link>
                <Link className="bg-white rounded-lg shadow-lg overflow-hidden" href="/houses">
                    <Image
                        alt="Property 7"
                        className="w-full h-48 object-cover"
                        height={250}
                        src="/img/rent-house-7.png"
                        style={{
                            aspectRatio: "400/250",
                            objectFit: "cover",
                        }}
                        width={400}
                    />
                    <div className="p-4 space-y-2">
                        <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold">৳8,000/m</span>
                            <HeartIcon className="w-6 h-6 text-gray-400 hover:text-red-500"/>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-500">
                            <BedIcon className="w-4 h-4"/>
                            <span>2 Beds</span>
                            <BathIcon className="w-4 h-4"/>
                            <span>1 Bath</span>
                            <MapPinIcon className="w-4 h-4"/>
                            <span>Banani</span>

                        </div>
                        <p>Cozy 2-bedroom apartment with a balcony and city views.</p>
                    </div>
                </Link>
                <Link className="bg-white rounded-lg shadow-lg overflow-hidden" href="/houses">
                    <Image
                        alt="Property 7"
                        className="w-full h-48 object-cover"
                        height={250}
                        src="/img/rent-house-8.png"
                        style={{
                            aspectRatio: "400/250",
                            objectFit: "cover",
                        }}
                        width={400}
                    />
                    <div className="p-4 space-y-2">
                        <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold">৳10,000/m</span>
                            <HeartIcon className="w-6 h-6 text-gray-400 hover:text-red-500"/>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-500">
                            <BedIcon className="w-4 h-4"/>
                            <span>2 Beds</span>
                            <BathIcon className="w-4 h-4"/>
                            <span>1 Bath</span>
                            <MapPinIcon className="w-4 h-4"/>
                            <span>Savar</span>

                        </div>
                        <p>Modern house with 2 bedroom with garage and best transport access</p>
                    </div>
                </Link>

            </div>
        </>
    )
}