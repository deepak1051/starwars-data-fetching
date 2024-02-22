import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import PlanetCard from './components/PlanetCard';
import Loading from './components/Loading';

function App() {
  const [plantes, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [url, setUrl] = useState('https://swapi.dev/api/planets/?format=json');

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const { data } = await axios.get(url);

        setPlanets(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  const handlePrevious = () => {
    console.log(plantes);
    setUrl(plantes.previous);
  };

  const handleNext = () => {
    console.log(plantes);
    setUrl(plantes.next);
  };

  if (isLoading) return <Loading />;
  return (
    <div className="container mx-auto p-4 max-w-2xl ">
      <div className="flex flex-col  gap-4">
        {plantes.results?.map((planet) => (
          <PlanetCard planet={planet} key={planet.name} />
        ))}
      </div>
      <div className="m-2 text-center ">
        <button
          disabled={!plantes.previous}
          className="hover:bg-teal-700 disabled:bg-teal-400 border p-2 bg-teal-600 rounded font-bold text-white w-20 mr-2"
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          disabled={!plantes.next}
          className="hover:bg-teal-700 disabled:bg-teal-400 border p-2 bg-teal-600 rounded font-bold text-white w-20"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
