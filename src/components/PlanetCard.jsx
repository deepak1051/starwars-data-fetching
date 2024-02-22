import { useEffect, useState } from 'react';
import axios from 'axios';

const PlanetCard = ({ planet }) => {
  const [residentList, setResidentList] = useState([]);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState('false');

  useEffect(() => {
    setLoading(true);
    Promise.all(
      planet.residents.map((r) => axios.get(r).then((res) => res.data))
    )
      .then((result) => {
        setResidentList(result);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

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

        {show ? (
          loading ? (
            <p>Loading...</p>
          ) : residentList.length > 0 ? (
            <table className="table-auto border-collapse">
              <thead>
                <tr className="">
                  <th className=" text-left">Name</th>
                  <th className=" text-left">Height</th>
                  <th className=" text-left">Mass</th>
                  <th className=" text-left">Gender</th>
                </tr>
              </thead>
              <tbody>
                {residentList.map((r) => (
                  <tr key={r.name}>
                    <td>{r.name}</td>
                    <td>{r.height}</td>
                    <td>{r.mass}</td>
                    <td>{r.gender}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>This planet has no residents...</p>
          )
        ) : null}
      </div>
    </div>
  );
};

export default PlanetCard;
//className="p-1 rounded bg-slate-300 mb-4 border"
