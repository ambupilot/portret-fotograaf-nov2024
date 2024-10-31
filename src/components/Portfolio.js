// src/components/Portfolio.js
import React from "react";
import LazyLoad from "react-lazyload";
import { useQuery, gql } from "@apollo/client";

const GET_PORTFOLIO_PHOTOS = gql`
  query GetPortfolioPhotos {
    photos {
      id
      url
      title
    }
  }
`;

function Portfolio() {
  const { loading, error, data } = useQuery(GET_PORTFOLIO_PHOTOS);

  if (loading) return <p className="text-center py-8">Loading...</p>;
  if (error) return <p className="text-center py-8">Error loading portfolio</p>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-4 text-center">Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.photos.map((photo) => (
          <LazyLoad key={photo.id} height={200} offset={100} once>
            <div className="bg-gray-200 p-2 rounded shadow-lg hover:shadow-xl transition-shadow">
              <img src={photo.url} alt={photo.title} className="w-full h-48 object-cover rounded" />
              <h3 className="text-lg mt-2 text-center font-medium">{photo.title}</h3>
            </div>
          </LazyLoad>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
