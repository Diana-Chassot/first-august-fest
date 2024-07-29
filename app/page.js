"use client";
import Banner from "./components/Banner";
import GoogleMap from "./components/Map";
import ImagesTable from "./components/ImagesTable";
import Programme from "./components/Programme";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
export default function Home() {
  return (
    <div className="relative">
      <Banner />
      <div className="relative isolate overflow-hidden  ">
        <Hero />
        <Programme />
        <ImagesTable />
        <GoogleMap />
        <Footer />
      </div>
    </div>
  );
}
