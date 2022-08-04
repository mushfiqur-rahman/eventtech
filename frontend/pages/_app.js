import {ThemeProvider} from "next-themes";
import Navbar from '../components/Navbar.jsx'
import '../styles/globals.css'
import Footer from "../components/Footer";

function MyApp({Component, pageProps}) {
    return (
        <ThemeProvider enableSystem={true} attribute='class'>
                <Navbar/>
                <Component {...pageProps} />
                <Footer/>
        </ThemeProvider>
    );
}

export default MyApp