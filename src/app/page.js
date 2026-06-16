import Hero from "@/components/Banner";
import BannerSlider from "@/components/Banner";
import Statistics from "@/components/Statistics";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  const state={
    totalEvents:100,
    totalAttendees:3000,
    totalOrgs:10
  }

  return (
    <div className="space-y-12">
      <section className="w-full">
        <Hero />
        <WhyChoose/>
        <Statistics stats={state}/>
      </section>
    </div>
  );
}