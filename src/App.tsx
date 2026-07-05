import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { WhyChooseUs } from "./components/WhyChooseUs";
import "./App.css";
import { FinancialService } from "./components/FinancialService";
import { GovernmentService } from "./components/GovernmentService";
import { ContactUs } from "./components/ContactUs";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      {/* <FinancialService />
      <GovernmentService /> */}
      <WhyChooseUs />
      <ContactUs />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />

      <Toaster position="top-right" richColors closeButton />
    </>
  );
}

export default App;
