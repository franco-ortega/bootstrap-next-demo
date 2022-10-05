import React, { useEffect, useState } from 'react';
import Filter from '../filter/Filter';
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
    id: 32
  }
];

const Home = () => {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState('');
  const [direction, setDirection] = useState('asc');
  const [searchId, setSearchId] = useState('');
  const [exactMatch, setExactMatch] = useState(false);

  useEffect(() => {
    setData(items);

    const sortArray = (type, direction) => {
      const sorted = [...items].sort((a, b) => {
        if (direction === 'asc') {
          if (a[type] < b[type]) return -1;
          if (a[type] > b[type]) return 1;
          return 0;
        } else if (direction === 'des') {
          if (a[type] > b[type]) return -1;
          if (a[type] < b[type]) return 1;
          return 0;
        }
      });

      setData(sorted);
    };

    sortArray(sortType, direction);
  }, [sortType, direction]);

  const onIdSortClick = () => {
    setSortType('id');
    setDirection('asc');
  };

  const onTitleSortClick = () => {
    setSortType('title');
    setDirection('asc');
  };

  const onSizeSortClick = () => {
    setSortType('size');
    setDirection('asc');
  };

  const onColorSortClick = () => {
    setSortType('color');
    setDirection('asc');
  };

  const onIdSortClickDes = () => {
    setSortType('id');
    setDirection('des');
  };

  const onTitleSortClickDes = () => {
    setSortType('title');
    setDirection('des');
  };

  const onSizeSortClickDes = () => {
    setSortType('size');
    setDirection('des');
  };

  const onColorSortClickDes = () => {
    setSortType('color');
    setDirection('des');
  };

  const onExactMatchCheckbox = () => {
    setExactMatch((prevState) => !prevState);
  };

  console.log(exactMatch);

  return (
    <div>
      <h2>Items</h2>

      <Filter
        setSearchId={setSearchId}
        onExactMatchCheckbox={onExactMatchCheckbox}
      />

      <div className='d-flex gap-5'>
        <button className='btn btn-primary' onClick={onIdSortClick}>
          Sort by ID (ASC)
        </button>
        <button className='btn btn-primary' onClick={onTitleSortClick}>
          Sort by Title (ASC)
        </button>
        <button className='btn btn-primary' onClick={onSizeSortClick}>
          Sort by Size (ASC)
        </button>
        <button className='btn btn-primary' onClick={onColorSortClick}>
          Sort by Color (ASC)
        </button>
      </div>
      <div className='d-flex gap-5 my-1'>
        <button className='btn btn-primary' onClick={onIdSortClickDes}>
          Sort by ID (Des)
        </button>
        <button className='btn btn-primary' onClick={onTitleSortClickDes}>
          Sort by Title (Des)
        </button>
        <button className='btn btn-primary' onClick={onSizeSortClickDes}>
          Sort by Size (Des)
        </button>
        <button className='btn btn-primary' onClick={onColorSortClickDes}>
          Sort by Color (Des)
        </button>
      </div>
      {data.length > 0 && (
        <Table data={data} searchId={searchId} exactMatch={exactMatch} />
      )}
    </div>
  );
};

export default Home;
