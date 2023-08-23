import React, { useEffect, useState } from 'react';
import './StarShips.css';

function StarWars() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/starships/')
      .then(response => response.json())
      //.then(data=>console.log(data.results))
      .then(data => {
        const filteredStarships = data.results.filter(starship => starship.crew <= 10);
        const sortedStarships = filteredStarships.sort((a, b) => a.crew - b.crew);
        setStarships(sortedStarships);
      });
  }, []);

  return (
    <div className='main-bg'>
      <div className="container">
        <div className="row justify-content-center">
        <h1 className='text-center m-2 text-info'>Starships Statistics</h1>
          {starships.map((starship, index) => (
            <div key={index} className="col-lg-6">
              <div className="card bg-light m-2 text-center" style={{ width: "100%" }}>
                <div className='card-body'>
                  <h2 className='card-title'>{starship.name}</h2>
                  <p className='card-text'>Model: {starship.model}</p>
                  <p className='card-text'>Number of Films: {starship.films.length}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StarWars;
