/*import Hero from "@/components/Hero";
import Comparison from "@/components/Comparison";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";*/
import Navbar from "@/app/components/generic/navigation/navbar";
import Hero from "@/app/components/header/hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar/>
      <Hero/>
      <Hero/>
     {/* <Comparison/>
      <Testimonials/>
      <Newsletter/>*/}
    </main>
  );
}
