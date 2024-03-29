import Navbar from "../components/Navbar";
import Hero from "../components/LandingHero";
import OrgActions from "../components/OrgActions";
import UpcomingEvents from "../components/UpEvents";
import Footer from "../components/Footer";
import { useEffect } from "react";
interface HomeProps {
  event?: boolean;
}

function scrollToBottom() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  console.log("scrolling");
}

function Home({ event }: HomeProps) {
  useEffect(() => {
    if (event !== undefined && event) {
      scrollToBottom();
    }
  }, [event]);

  return (
    <>
      <div className="mx-full my-full overflow-hidden bg-white font-poppins text-black">
        <Navbar />
        <Hero />
        <OrgActions />
        <UpcomingEvents />
        <Footer />
      </div>
    </>
  );
}

export default Home;
