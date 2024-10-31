// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";
import './app.css';

const client = new ApolloClient({
  uri: "https://api.example.com/graphql", // Voeg je GraphQL API endpoint toe
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="font-sans text-gray-800 flex flex-col min-h-screen bg-gray-100">
          <Helmet>
            <title>Portret Fotograaf</title>
            <meta name="description" content="Professionele portret fotografie diensten." />
          </Helmet>
          {/* Header altijd bovenaan */}
          <Header />
          {/* Container voor de inhoud, vult de ruimte tussen Header en Footer */}
          <div className="flex-grow container mx-auto p-4 max-w-4xl bg-white shadow-lg rounded-lg">
            <Routes>
              <Route path="/" element={<Portfolio />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          {/* Footer altijd onderaan */}
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
