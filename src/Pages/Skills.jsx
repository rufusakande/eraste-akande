import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import ExpertisePage from "../Sections/ExpertisePage/ExpertisePage";
import { useEffect } from "react";

function Skills () {

    useEffect(()=>{
            window.scrollTo(0, 0);
        }, [])

    return (
        <>
            <Header/>
            <main>
                <ExpertisePage/>
            </main>
            <Footer/>
        </>
    )
}

export default Skills;