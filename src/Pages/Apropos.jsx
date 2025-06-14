import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import AboutBio from "../Sections/AboutBio/AboutBio";
import AboutCTA from "../Sections/AboutCTA/AboutCTA";
import AboutExpertiseTelecom from "../Sections/AboutExpertiseTelecom/AboutExpertiseTelecom";
import AboutHero from "../Sections/AboutHero/AboutHero";
import AboutJourney from "../Sections/AboutJourney/AboutJourney";
import AboutRecognition from "../Sections/AboutRecognition/AboutRecognition";
import AboutValues from "../Sections/AboutValues/AboutValues";
import { useEffect } from "react";

function Apropos () {

    useEffect(()=>{
            window.scrollTo(0, 0);
        }, [])

    return (
        <>
            <Header/>
            <main>
                <AboutHero/>
                {/* <AboutExpertiseTelecom/> */}
                <AboutBio/>
                <AboutJourney/>
                <AboutRecognition/>
                <AboutValues/>
                <AboutCTA/>
            </main>
            <Footer/>
        </>
    )
}

export default Apropos;