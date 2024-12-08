
import holder from "../images/img.jpg";  
import Header from "./Header";
import HeroSection from "./Herosection";

export default function Placeholder() {
  return ( 
    <section className="relative h-[800px]">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${holder.src})` }}>
        <div className="absolute inset-0">
        <Header />
        <HeroSection />
        </div>
      </div>
    </section>
  );
}
