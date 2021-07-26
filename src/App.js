import React from 'react';
import Hero from './components/Hero/index';
import { GlobalStyles } from './GlobalElements';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ProductData } from "./data";
import Pizza from './components/Pizzas';
import PizzaOfDay from './components/Pizza';
import Footer from './components/Footer';

function App() {
  return <Router>
    <GlobalStyles/>
    <Route exact path="/">
      <Hero />
    </Route>
    <Pizza data={ProductData} heading= "Our Pizzas."/>
    <PizzaOfDay />
    <Footer/>
  </Router>;
}

export default App;
