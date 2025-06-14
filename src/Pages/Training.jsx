import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import CorporateTraining from "../Sections/CorporateTraining/CorporateTraining";
import TrainingBenefits from "../Sections/TrainingBenefits/TrainingBenefits";
import TrainingCTA from "../Sections/TrainingCTA/TrainingCTA";
import TrainingHero from "../Sections/TrainingHero/TrainingHero";
import TrainingList from "../Sections/TrainingList/TrainingList";
import UdemyCourse from "../Sections/UdemyCourse/UdemyCourse";
import { useEffect } from "react";

function Training () {

    useEffect(()=>{
            window.scrollTo(0, 0);
        }, [])

    return (
        <>
            <Header/>
            <main>
                <TrainingHero/>
                <TrainingList/>
                <UdemyCourse/>
                <CorporateTraining/>
                <TrainingBenefits/>
                <TrainingCTA/>
            </main>
            <Footer/>
        </>
    )
}

export default Training;