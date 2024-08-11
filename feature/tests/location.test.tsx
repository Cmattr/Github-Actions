import React, { useEffect, useState } from 'react';

interface Location {
  name: string;
}

const LocationComponent: React.FC = () => {
  const [location, setLocation] = useState<Location | null>(null);

  useEffect(() => {
    const fetchLocation = async () => {
      const response = await fetch('https://api.example.com/location');
      const data: Location = await response.json();
      setLocation(data);
    };

    fetchLocation();
  }, []);

  return (
    <div>
      {location ? <h1>{location.name}</h1> : <p>Loading...</p>}
    </div>
  );
};

export default LocationComponent;