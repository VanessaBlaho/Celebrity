import React, { useState, useEffect } from 'react';

import Celebrity from './celebrity';

function App() {
  const [celebrities, setCelebrities] = useState([]);
 //use useEffect to fetch your data from your api endpoint (the php index page)
  useEffect(() => {
    fetch('http://www.cbp-exercises.test/day_29/celebrity/src/api/index.php') 
      .then((response) => response.json())
      .then((data) => setCelebrities(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <h1>Celebrities</h1>
      <div className="celebrities-container">
        //map through the details of your celebrity
        {celebrities.map((celebrity, index) => (
          <Celebrity key={index} celebrity={celebrity} />
        ))}
      </div>
    </div>
  );
}

export default App;