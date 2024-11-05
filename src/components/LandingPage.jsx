//background image for landing page
import BackgroundLandingImg from "../components/BackgroundLandingImg";

//Importing components
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import About from "../components/About"
import Testimonials from "../components/Testimonials";
import GallerySection from "../components/GallerySection";
import Footer from "./Footer";

const LandingPage = () => {
    return (
        <>
            <BackgroundLandingImg>
                <div className="h-screen fadeIn">
                    <Header />
                    <HeroSection />
                </div>
            </BackgroundLandingImg>
                <About />
                <Testimonials />
                <GallerySection />
                <Footer />
        </>
    )
}

export default LandingPage
