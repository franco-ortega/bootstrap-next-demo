import React, { useEffect, useState } from 'react';
import ItemList from '../items/ItemList';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([
      {
        title: 'The Best Book',
        size: 'Medium',
        color: 'Green'
      },
      {
        title: 'The Worst Book',
        size: 'Large',
        color: 'Orange'
      },
      {
        title: 'The Rad Book',
        size: 'Small',
        color: 'Pink'
      }
    ]);
  }, []);

  return (
    <div>
      <h2>Items</h2>
      <ItemList items={data} />
    </div>
  );
};

export default Home;
