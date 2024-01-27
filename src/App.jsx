import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Smo from "./Components/WhatIsSmo/Smo";
import AddAccount from "./Components/AddAccount/AddAccount";
import Testimonials from "./Components/Testimonials/Testimonials";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Smo />
      <AddAccount />
      <Testimonials />
    </>
  );
}

export default App;
