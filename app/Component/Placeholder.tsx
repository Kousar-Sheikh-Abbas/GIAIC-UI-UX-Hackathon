
import holder from "../images/img.jpg";  

import HeroSection from "./Herosection";

export default function Placeholder() {
  return ( 
    <section className="bg-black relative h-[800px]">
      {/* <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${holder.src})` }}> */}
        <div className="absolute inset-0">
        
        <HeroSection />
        {/* </div> */}
      </div>
    </section>
  );
}
