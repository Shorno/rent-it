import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (

        <footer className="bg-gray-100 dark:bg-gray-800 py-8">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Image
                        width={"24"}
                        height={"24"}
                        src={"/favicon.ico"} alt={"favicon"}
                    />
                    <span className="text-lg font-bold text-gray-900]">Rent IT</span>
                </div>
                <nav className="flex items-center space-x-6 mt-4 md:mt-0">
                    <Link className="text-sm font-medium hover:text-[#3319D1] transition-colors" href="#">
                        Terms of Service
                    </Link>
                    <Link className="text-sm font-medium hover:text-[#3319D1] transition-colors" href="#">
                        Privacy Policy
                    </Link>
                    <Link className="text-sm font-medium hover:text-[#3319D1] transition-colors" href="#">
                        Contact Us
                    </Link>
                </nav>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 md:mt-0">© 2024 Rent It. All rights
                    reserved.</p>
            </div>
        </footer>

    )
}


export default Footer;