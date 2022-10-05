import React, { useEffect, useState } from 'react';
import ItemList from '../items/ItemList';
import Table from '../table/Table';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([
      {
        title: 'The Best Book',
        size: 'Medium',
        color: 'Green',
        id: 1
      },
      {
        title: 'The Worst Book',
        size: 'Large',
        color: 'Orange',
        id: 2
      },
      {
        title: 'The Rad Book',
        size: 'Small',
        color: 'Pink',
        id: 3
      }
    ]);
  }, []);

  return (
    <div>
      <h2>Items</h2>
      <ItemList items={data} />
      <Table data={data} />
    </div>
  );
};

export default Home;
