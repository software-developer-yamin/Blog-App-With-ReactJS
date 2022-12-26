import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/Hero";
import Card from "./components/Card";
import { cardsData } from "./assets/data";



function App() {
  return (
    <div>
      <Hero />
      <main className="flex flex-wrap items-center justify-center flex-grow gap-8 p-5" >
        {cardsData?.map((card, index)=> <Card key={index} card={card} />)}
      </main>
    </div>
  );
}

export default App;
