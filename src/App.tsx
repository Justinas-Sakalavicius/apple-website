import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Highlights from "./components/Highlights.tsx";
import Model from "./components/Model.tsx";
import Features from "./components/Features.tsx";

const App = () => {

    return (
        <main className="bg-black">
            <Navbar/>
            <Hero/>
            <Highlights/>
            <Model />
            <Features />
        </main>
    )
}

export default App
