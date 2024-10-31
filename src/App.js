// App.js
import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer"
import { Helmet } from "react-helmet";
import './app.css'; // Import App.css for styling

const client = new ApolloClient({
  uri: "https://api.example.com/graphql", // Voeg je GraphQL API endpoint toe
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="font-sans text-gray-800 flex justify-center items-center min-h-screen bg-gray-100">
        <div className="container max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
          <Helmet>
            <title>Portret Fotograaf</title>
            <meta name="description" content="Professionele portret fotografie diensten." />
          </Helmet>
          <Header />
          <Body />
          <Footer />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
