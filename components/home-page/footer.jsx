import React from 'react';
import Link from "next/link";
9
const Footer = () => {
    return (

        <footer className="bg-gray-900 text-white py-8 px-4 md:px-8">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                    <Link className="text-xl font-bold" href="#">
                        Rent It
                    </Link>
                    <p className="text-gray-400 mt-2">© 2024 Rent It. All rights reserved by Shorno</p>
                </div>
                <nav className="flex space-x-6">
                    <Link className="hover:underline :text-sm sm:text-blue-700" href="#">
                        Terms of Service
                    </Link>
                    <Link className="hover:underline" href="#">
                        Privacy Policy
                    </Link>
                    <Link className="hover:underline" href="#">
                        Contact Us
                    </Link>
                </nav>
            </div>
        </footer>

    )
}


export default Footer;