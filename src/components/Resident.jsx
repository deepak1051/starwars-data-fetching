import { useState, useEffect } from 'react';
import axios from 'axios';

const Resident = ({ planet }) => {
  const [residentList, setResidentList] = useState([]);

  const [loading, setLoading] = useState('false');

  useEffect(() => {
    setLoading(true);
    Promise.all(
      planet.residents.map((r) => axios.get(r).then((res) => res.data))
    )
      .then((result) => {
        console.log(`${planet.name}`, result);
        setResidentList(result);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  if (residentList.length === 0)
    return <p>This planet has no residents yet...</p>;

  return (
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
  );
};

export default Resident;
