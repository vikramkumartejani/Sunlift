import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <h1>Font Lexend</h1>
      <h1 className="font-workSpace">Font Work Space</h1>
      <Hero/>
      <Footer/>
    </div>
  );
}
