import Navigation from "./components/Navigation"
import Banner from './components/Banner'
import About from './components/About'
import InformativeVideo from './components/InformativeVideo'
import Features from "./components/Features"
import OurTeam from './components/OurTeam'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import ContactUs from "./components/ContactUs"
import DownloadApp from "./components/DownloadApp"
import Footer from "./components/Footer"

function App() {
    return (
        <>
            <Navigation />
            <Banner />
            <About />            
            <InformativeVideo />
            <Features />
            <OurTeam />
            <Testimonials />
            <FAQ />
            <ContactUs />
            <DownloadApp />
            <Footer />
        </>
    )
}

// function App() {
//     return React.createElement(
//         'div',
//         {},
//         React.createElement(
//             Navigation,
//             null
//         ),
//         React.createElement(
//             Banner,
//             null
//         ),
//         React.createElement(
//             About,
//             null
//         ),
//         React.createElement(
//             InformativeVideo,
//             null
//         ),
//         React.createElement(
//             Features,
//             null
//         ),
//         React.createElement(
//             OurTeam,
//             null
//         ),
//         React.createElement(
//             Testimonials,
//             null
//         ),
//         React.createElement(
//             FAQ,
//             null
//         ),
//         React.createElement(
//             ContactUs,
//             null
//         ),
//         React.createElement(
//             DownloadApp,
//             null
//         ),
//         React.createElement(
//             Footer,
//             null
//         ),
//     );
// }

export default App
