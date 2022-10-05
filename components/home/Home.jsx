import React, { useEffect, useState } from 'react';
import { sortItemsAsc, sortItemsDes } from '../../utils/sortItems';
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

    if (direction === 'asc') sortItemsAsc(items, sortType, setData);
    else if (direction === 'des') sortItemsDes(items, sortType, setData);
  }, [sortType, direction]);

  const onSortClick = (type, direction) => {
    setSortType(type);
    setDirection(direction);
  };

  const onIdSortClickAsc = () => onSortClick('id', 'asc');
  const onIdSortClickDes = () => onSortClick('id', 'des');
  const onTitleSortClickAsc = () => onSortClick('title', 'asc');
  const onTitleSortClickDes = () => onSortClick('title', 'des');
  const onSizeSortClickAsc = () => onSortClick('size', 'asc');
  const onSizeSortClickDes = () => onSortClick('size', 'des');
  const onColorSortClickAsc = () => onSortClick('color', 'asc');
  const onColorSortClickDes = () => onSortClick('color', 'des');

  const onExactMatchCheckbox = () => {
    setExactMatch((prevState) => !prevState);
  };

  return (
    <div>
      <h2>Items</h2>

      <Filter
        setSearchId={setSearchId}
        onExactMatchCheckbox={onExactMatchCheckbox}
      />

      <div className='d-flex gap-5'>
        <button className='btn btn-primary' onClick={onIdSortClickAsc}>
          Sort by ID (ASC)
        </button>
        <button className='btn btn-primary' onClick={onTitleSortClickAsc}>
          Sort by Title (ASC)
        </button>
        <button className='btn btn-primary' onClick={onSizeSortClickAsc}>
          Sort by Size (ASC)
        </button>
        <button className='btn btn-primary' onClick={onColorSortClickAsc}>
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
