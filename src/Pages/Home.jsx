import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import AboutExpertiseTelecom from "../Sections/AboutExpertiseTelecom/AboutExpertiseTelecom";
import ContactHome from "../Sections/ContactHome/ContactHome";
import Expertise from "../Sections/Expertise/Expertise";
import Formation from "../Sections/Formation/Formation";
import Hero from "../Sections/Hero/Hero";
import PointsForts from "../Sections/PointsForts/PointsForts";
import Services from "../Sections/Services/Services";
import Temoignages from "../Sections/Temoignages/Temoignages";

function Home () {
    return (
        <>
            <Header/>
            <main>
                <Hero/>
                <PointsForts/>
                <AboutExpertiseTelecom/>
                <Temoignages/>
                <Services/>
                <Expertise/>
                <Formation/>
                <ContactHome/>
            </main>
            <Footer/>
        </>
    )
}

export default Home;