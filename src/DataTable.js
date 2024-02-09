import React, { useState, useEffect } from 'react';

function DataTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('./data.json') // Assuming data.json is in public folder
      .then((response) => {
        console.log(response.json());
        response.json()
    })
      .then(data => setData(data));
  }, []);
  console.log(data);

  const handleDelete = (id) => {
    setData(prevData => prevData.filter(item => item.id !== id));
  };

  return (
    <div>
      <h1>Data Table</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.gender}</td>
              <td>{item.age}</td>
              <td>{item.address.city}</td>
              <td>{item.address.state}</td>
              <td>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
                {/* Add update functionality here */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
