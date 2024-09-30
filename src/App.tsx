import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Highlights from "./components/Highlights.tsx";
import Model from "./components/Model.tsx";

const App = () => {

    return (
        <main className="bg-black">
            <Navbar/>
            <Hero/>
            <Highlights/>
            <Model />
        </main>
    )
}

export default App
