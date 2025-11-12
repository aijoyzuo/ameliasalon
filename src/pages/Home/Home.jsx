import Hero from "./sections/Hero";
import About from "./sections/About";
import Bookingcontact from "./sections/Bookingcontact";
import Services from "./sections/Services";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import Portfolio from "./sections/Portfolio";

export default function Home() {
  return (
    <main>
      <ScrollToTopButton />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Bookingcontact />
      
    </main>
  );
}
