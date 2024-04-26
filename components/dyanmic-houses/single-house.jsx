import Image from "next/image";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {MapPinIcon, HeartIcon, BedIcon, BathIcon, RulerIcon, WalletIcon, CarIcon, BuildingIcon, UtensilsIcon, LockIcon} from "lucide-react";

export default function SingleHouse() {
    return (
        <>
            <div className="flex flex-col min-h-[100dvh]">
                <header className="bg-gray-900 text-white py-6 px-4 md:px-8">
                    <div className="container mx-auto flex items-center justify-between">
                        <Link className="text-xl font-bold" href="/">
                            Rent It
                        </Link>
                        <nav className="hidden md:flex items-center space-x-6">
                            <Link className="hover:underline" href="#">
                                Rent
                            </Link>
                            <Link className="hover:underline" href="#">
                                Buy
                            </Link>
                            <Link className="hover:underline" href="#">
                                Sell
                            </Link>
                            <Link className="hover:underline" href="#">
                                About
                            </Link>
                        </nav>
                        <Button className="hidden md:inline-flex" variant="primary">
                            List Your Property
                        </Button>
                    </div>
                </header>
                <main className="flex-1">
                    <section className="bg-white py-12 px-4 md:px-8">
                        <div className="container mx-auto grid md:grid-cols-2 gap-8">
                            <div className="grid gap-4">
                                <Image
                                    alt="Property Image"
                                    className="rounded-lg shadow-lg"
                                    height={600}
                                    src="/img/dynamic-house.webp"
                                    style={{
                                        aspectRatio: "800/533",
                                        objectFit: "cover",
                                    }}
                                    width={650}
                                />
                                <div className="grid grid-cols-3 gap-4">
                                    <Image
                                        alt="Property Image"
                                        className="rounded-lg shadow-lg"
                                        height={225}
                                        src="/img/dynamic-house-pool.png"
                                        style={{
                                            aspectRatio: "300/225",
                                            objectFit: "cover",
                                        }}
                                        width={300}
                                    />
                                    <Image
                                        alt="Property Image"
                                        className="rounded-lg shadow-lg"
                                        height={225}
                                        src="/img/dynamic-house-bathroom.png"
                                        style={{
                                            aspectRatio: "300/225",
                                            objectFit: "cover",
                                        }}
                                        width={300}
                                    />
                                    <Image
                                        alt="Property Image"
                                        className="rounded-lg shadow-lg"
                                        height={225}
                                        src="/img/dynamic-house-kitchen.png"
                                        style={{
                                            aspectRatio: "300/225",
                                            objectFit: "cover",
                                        }}
                                        width={300}
                                    />
                                </div>
                            </div>
                            <div className="space-y-6">
                                <h1 className="text-3xl font-bold">Luxurious 4-Bedroom House</h1>
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-bold">$3,200/mo</span>
                                    <HeartIcon className="w-6 h-6 text-gray-400 hover:text-red-500"/>
                                </div>
                                <div className="flex items-center space-x-4 text-gray-500">
                                    <BedIcon className="w-5 h-5"/>
                                    <span>4 Beds</span>
                                    <BathIcon className="w-5 h-5"/>
                                    <span>3 Baths</span>
                                    <MapPinIcon className={"w-5 h-5"}/>
                                    <span>Dhaka</span>
                                </div>
                                <div className="leading-7">
                                    <p className={"pb-5"}>
                                        This luxurious 4-bedroom house is the perfect home for your family. With a
                                        spacious layout, high-end
                                        finishes, and a private backyard with a pool, this property offers the ultimate
                                        in comfort and style.
                                    </p>
                                    <p className={"pb-5"}>
                                        The open-concept living area features large windows that flood the space with
                                        natural light, and the
                                        gourmet kitchen is equipped with top-of-the-line appliances. The master suite
                                        boasts a spa-like
                                        bathroom and a private balcony, while the other bedrooms are generously sized
                                        and offer ample storage.
                                    </p>
                                    <p>
                                        Enjoy the convenience of a 2-car garage and the privacy of a fenced-in backyard
                                        with a sparkling pool
                                        and patio area. This home is located in a desirable neighborhood, close to
                                        shopping, dining, and
                                        entertainment options.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-4 sm:flex-row">
                                    <Button className="flex-1 bg-slate-900 text-white" variant="primary" >
                                        Rent Now
                                    </Button>
                                    <Button className="flex-1 text-slate-900" variant="outline">
                                        Contact Agent
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="bg-gray-100 py-12 px-4 md:px-8">
                        <div className="container mx-auto">
                            <h2 className="text-3xl font-bold mb-8">Key Features</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                                <div className="bg-white rounded-lg shadow-lg p-4 space-y-2">
                                    <BedIcon className="w-8 h-8 text-primary"/>
                                    <h3 className="text-lg font-bold">4 Bedrooms</h3>
                                    <p>Spacious and comfortable bedrooms for the whole family.</p>
                                </div>
                                <div className="bg-white rounded-lg shadow-lg p-4 space-y-2">
                                    <BathIcon className="w-8 h-8 text-primary"/>
                                    <h3 className="text-lg font-bold">3 Bathrooms</h3>
                                    <p>Luxurious bathrooms with high-end fixtures and finishes.</p>
                                </div>
                                <div className="bg-white rounded-lg shadow-lg p-4 space-y-2">
                                    <RulerIcon className="w-8 h-8 text-primary"/>
                                    <h3 className="text-lg font-bold">2,000 sq ft</h3>
                                    <p>Ample living space for your family to spread out and relax.</p>
                                </div>
                                <div className="bg-white rounded-lg shadow-lg p-4 space-y-2">
                                    <WalletIcon className="w-8 h-8 text-primary"/>
                                    <h3 className="text-lg font-bold">Private Pool</h3>
                                    <p>Enjoy the luxury of a private pool in your own backyard.</p>
                                </div>
                                <div className="bg-white rounded-lg shadow-lg p-4 space-y-2">
                                    <CarIcon className="w-8 h-8 text-primary"/>
                                    <h3 className="text-lg font-bold">2-Car Garage</h3>
                                    <p>Ample parking space for your vehicles and storage needs.</p>
                                </div>
                                <div className="bg-white rounded-lg shadow-lg p-4 space-y-2">
                                    <BuildingIcon className="w-8 h-8 text-primary"/>
                                    <h3 className="text-lg font-bold">Private Balcony</h3>
                                    <p>Relax and enjoy the views from your own private balcony.</p>
                                </div>
                                <div className="bg-white rounded-lg shadow-lg p-4 space-y-2">
                                    <UtensilsIcon className="w-8 h-8 text-primary"/>
                                    <h3 className="text-lg font-bold">Gourmet Kitchen</h3>
                                    <p>A chef dream kitchen with top-of-the-line appliances and ample counter
                                        space.</p>
                                </div>
                                <div className="bg-white rounded-lg shadow-lg p-4 space-y-2">
                                    <LockIcon className="w-8 h-8 text-primary"/>
                                    <h3 className="text-lg font-bold">Fenced Backyard</h3>
                                    <p>Enjoy the privacy and security of a fully fenced-in backyard.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}

