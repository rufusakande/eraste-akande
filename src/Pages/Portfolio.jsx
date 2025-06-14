import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import ProjectFilters from "../Components/ProjectFilters/ProjectFilters";
import ProjectFocus from "../Components/ProjectFocus/ProjectFocus";
import ProjectGrid from "../Components/ProjectGrid/ProjectGrid";
import HeroPortfolio from "../Sections/HeroPortfolio/HeroPortfolio";
import PortfolioCTA from "../Sections/PortfolioCTA/PortfolioCTA";
import PortfolioProjects from "../Sections/PortfolioProjects/PortfolioProjects";
import ProfileLinks from "../Sections/ProfileLinks/ProfileLinks";
import StatisticsImpact from "../Sections/StatisticsImpact/StatisticsImpact";
import { useEffect } from "react";

function Portfolio () {

    useEffect(()=>{
            window.scrollTo(0, 0);
        }, [])

    return (
        <>
            <Header/>
            <main>
                <HeroPortfolio/>
                <PortfolioProjects/>
                <ProfileLinks/>
                {/* <ProjectFocus/> */}
                <StatisticsImpact/>
                <PortfolioCTA/>
            </main>
            <Footer/>
        </>
    )
}

export default Portfolio;