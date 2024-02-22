import { useState } from 'react';

import Resident from './Resident';

const PlanetCard = ({ planet }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="bg-white border rounded-md flex flex-col  p-2 flex-1 shadow-md ">
      <div>
        <h2 className="font-bold text-lg">Name: {planet.name}</h2>
        <p>Climate: {planet.climate}</p>
        <p>Population:{planet.population}</p>
        <p>Terrain:{planet.terrain}</p>
        <hr />
      </div>
      <div className="flex flex-col gap-1 my-2">
        <div className="flex justify-between">
          <p className="text-lg font-bold">Residents List</p>
          <button
            onClick={() => setShow((p) => !p)}
            className={` p-1 rounded text-white  ${
              show ? 'bg-red-500' : 'bg-green-500'
            }`}
          >
            {show ? 'hide list' : 'show list'}
          </button>
        </div>

        {show ? <Resident planet={planet} /> : null}
      </div>
    </div>
  );
};

export default PlanetCard;
//className="p-1 rounded bg-slate-300 mb-4 border"
