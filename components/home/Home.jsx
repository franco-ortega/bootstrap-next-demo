import React, { useEffect, useState } from 'react';
import ItemList from '../items/ItemList';
import Table from '../table/Table';

const items = [
  {
    title: 'Best Book',
    size: 'Medium',
    color: 'Green',
    id: 1
  },
  {
    title: 'Worst Book',
    size: 'Large',
    color: 'Orange',
    id: 2
  },
  {
    title: 'Rad Book',
    size: 'Small',
    color: 'Pink',
    id: 3
  }
];

const Home = () => {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState('');

  useEffect(() => {
    setData(items);

    const sortArray = (type) => {
      const types = {
        id: 'id',
        title: 'title',
        color: 'color',
        size: 'size'
      };

      const sortProperty = types[type];

      const sorted = [...items].sort((a, b) => {
        // return b[sortProperty] - a[sortProperty];

        if (a[sortProperty] < b[sortProperty]) {
          return -1;
        }
        if (a[sortProperty] > b[sortProperty]) {
          return 1;
        }
        // a must be equal to b
        return 0;
      });

      setData(sorted);
    };

    sortArray(sortType);
  }, [sortType]);

  const onIdSortClick = () => {
    setSortType('id');
  };

  const onTitleSortClick = () => {
    setSortType('title');
  };

  const onSizeSortClick = () => {
    setSortType('size');
  };

  const onColorSortClick = () => {
    setSortType('Color');
  };

  console.log(data[0]);

  return (
    <div>
      <h2>Items</h2>
      {/* <ItemList items={data} /> */}
      <div className='d-flex gap-5'>
        <button className='btn btn-primary' onClick={onIdSortClick}>
          Sort by ID
        </button>
        <button className='btn btn-primary' onClick={onTitleSortClick}>
          Sort by Title
        </button>
        <button className='btn btn-primary' onClick={onSizeSortClick}>
          Sort by Size
        </button>
        <button className='btn btn-primary' onClick={onColorSortClick}>
          Sort by Color
        </button>
      </div>
      {data.length > 0 && <Table data={data} />}
    </div>
  );
};

export default Home;
