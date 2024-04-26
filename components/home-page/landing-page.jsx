import Navbar from "@/components/home-page/navbar";
import HeroSection from "@/components/home-page/hero-section";
import HouseList from "@/components/home-page/house-list";
import MyPagination from "@/components/home-page/pagination";

export default function LandingPage() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <Navbar></Navbar>
            <main className="flex-1">
                <HeroSection></HeroSection>
                <section className="py-16 px-4 md:px-8">
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-bold mb-8">Featured Houses</h2>
                        <HouseList></HouseList>
                        <MyPagination></MyPagination>
                    </div>
                </section>
            </main>
        </div>
    )
}
