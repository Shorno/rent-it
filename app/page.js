import LandingPage from "@/components/landing-page";
import Footer from "@/components/footer";

export default function Home() {
    return (
        <>

            <main className="flex min-h-screen flex-col items-center justify-between ">
                <h1>Test</h1>
                <LandingPage></LandingPage>
            </main>
            <Footer></Footer>
        </>

    );
}
