import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import AlternativeContacts from "../Sections/AlternativeContacts/AlternativeContacts";
import ContactBanner from "../Sections/ContactBanner/ContactBanner";
import ContactHome from "../Sections/ContactHome/ContactHome";
import { useEffect } from "react";

function Contact () {

    useEffect(()=>{
            window.scrollTo(0, 0);
        }, [])

    return (
        <>
            <Header/>
            <main>
                <ContactBanner/>
                <ContactHome/>
                {/* <AlternativeContacts/> */}
            </main>
            <Footer/>
        </>
    )
}

export default Contact;