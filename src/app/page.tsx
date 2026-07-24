import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import About from "./components/About"
import Project from "./components/Project"
import Service from "./components/Services"
import Contact from "./components/Contact"
export default function Home() {
  return (
    <>
      <Navbar />
<Hero/>
   <About/>   
      <Project/>
      <Service/>
      <Contact/>
    </>
  );
}