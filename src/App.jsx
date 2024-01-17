import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Smo from "./Components/WhatIsSmo/Smo";
import AddAccount from "./Components/AddAccount/AddAccount";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Smo />
      <AddAccount />
    </>
  );
}

export default App;
