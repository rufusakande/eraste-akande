import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import ConsultingPage from "../Sections/ConsultingPage/ConsultingPage";
import { useEffect } from "react";

function Consulting () {

    useEffect(()=>{
            window.scrollTo(0, 0);
        }, [])
    return (
        <>
            <Header/>
            <main>
                <ConsultingPage/>
            </main>
            <Footer/>
        </>
    )
}

export default Consulting;