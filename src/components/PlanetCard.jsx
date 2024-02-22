import { useEffect, useState } from 'react';
import axios from 'axios';

const PlanetCard = ({ planet }) => {
  const [residentList, setResidentList] = useState([]);
  const [show, setShow] = useState(true);

  useEffect(() => {
    Promise.all(
      planet.residents.map((r) => axios.get(r).then((res) => res.data))
    ).then((result) => setResidentList(result));
  }, []);

  return (
    <div className="bg-white border flex flex-col  p-2 flex-1 shadow-md ">
      <div>
        <h2 className="font-bold text-lg">Name: {planet.name}</h2>
        <p>Climate: {planet.climate}</p>
        <p>Population:{planet.population}</p>
        <p>Terrain:{planet.terrain}</p>
        <hr />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between">
          <p className="text-lg font-bold">Residents List</p>
          <button onClick={() => setShow((p) => !p)} className="underline">
            {show ? 'show list' : 'hide list'}
          </button>
        </div>

        {show
          ? residentList.map((r) => (
              <div
                key={r.name}
                className="flex border items-center justify-between p-1 rounded bg-slate-300"
              >
                <h3 className="border-e-2">Name: {r.name}</h3>
                <p className="border-e-2">Height: {r.height}</p>
                <p className="border-e-2">Mass: {r.mass}</p>
                <p>Gender: {r.gender}</p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default PlanetCard;
