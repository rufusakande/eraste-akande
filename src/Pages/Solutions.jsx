import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import SolutionsPage from "../Sections/SolutionsPage/SolutionsPage";
import { useEffect } from "react";

function Solutions () {

    useEffect(()=>{
            window.scrollTo(0, 0);
        }, [])
    return (
        <>
            <Header/>
            <main>
                <SolutionsPage/>
            </main>
            <Footer/>
        </>
    )
}

export default Solutions;