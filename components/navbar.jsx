import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function Navbar(){
    return(
        <>
            <header className="bg-gray-900 text-white py-6 px-4 md:px-8">
                <div className="container mx-auto flex items-center justify-between">
                    <Link className="text-xl font-bold" href="#">
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
        </>
    )
}