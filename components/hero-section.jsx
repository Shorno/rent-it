import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import Image from "next/image";

export default function HeroSection(){
    return (
        <>
            <section className="bg-gray-900 text-white py-20 px-4 md:px-8">
                <div className="container mx-auto grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold">Find Your Perfect Home</h1>
                        <p className="text-lg">Search through thousands of rental properties to find your dream
                            home.</p>
                        <form className="bg-white rounded-lg shadow-lg p-6 space-y-4 text-gray-900">
                            <div className="flex items-center space-x-4">
                                <Input className="flex-1" placeholder="Search by city, neighborhood, or address"
                                       type="text"/>
                                <Button variant="primary">Search</Button>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Price Range"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="0-1000">৳0 - ৳3,000</SelectItem>
                                        <SelectItem value="1000-2000">৳3,000 - ৳4,000</SelectItem>
                                        <SelectItem value="2000-3000">৳4,000 - ৳5,000</SelectItem>
                                        <SelectItem value="3000-4000">৳6,000 - ৳7,000</SelectItem>
                                        <SelectItem value="4000-5000">৳8,000 - ৳15,000</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Rooms"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1">1 Room</SelectItem>
                                        <SelectItem value="2">2 Rooms</SelectItem>
                                        <SelectItem value="3">3 Rooms</SelectItem>
                                        <SelectItem value="4">4 Rooms</SelectItem>
                                        <SelectItem value="5">5 Rooms</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Features"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="pool">Pool</SelectItem>
                                        <SelectItem value="gym">Gym</SelectItem>
                                        <SelectItem value="parking">Parking</SelectItem>
                                        <SelectItem value="laundry">Laundry</SelectItem>
                                        <SelectItem value="balcony">Balcony</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Location"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="city">City</SelectItem>
                                        <SelectItem value="suburbs">Suburbs</SelectItem>
                                        <SelectItem value="rural">Rural</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </form>
                    </div>
                    <div className="hidden md:block">
                        <Image
                            alt="Rental home"
                            className="rounded-lg shadow-lg"
                            height={700}
                            width={430}
                            src="/img/Cover.jpg"
                            style={{
                                aspectRatio: "600/400",
                                objectFit: "fit",
                            }}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}