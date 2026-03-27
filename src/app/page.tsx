import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PriceTable from "@/components/PriceTable";
import WhyUs from "@/components/WhyUs";
import InfoSection from "@/components/InfoSection";
import CallbackForm from "@/components/CallbackForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Navigation />
      <Hero />
      <Services />
      <PriceTable />
      <WhyUs />
      <InfoSection />
      <CallbackForm />
      <Footer />
    </>
  );
}
