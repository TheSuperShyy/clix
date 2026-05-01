import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Services } from "@/components/sections/services";
import { Benefits } from "@/components/sections/benefits";
import { Impact } from "@/components/sections/impact";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Nav />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Features />
        <Services />
        <Benefits />
        <Impact />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
