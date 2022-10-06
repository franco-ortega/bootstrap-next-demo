import React, { useEffect, useState } from 'react';
import { sortItemsAsc, sortItemsDes } from '../../utils/sortItems';
import Filter from '../filter/Filter';
import GridTable from '../grid/GridTable';
import SortAsc from '../sorters/SortAsc';
import SortDes from '../sorters/SortDes';
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

      <SortAsc
        onIdSortClickAsc={onIdSortClickAsc}
        onTitleSortClickAsc={onTitleSortClickAsc}
        onSizeSortClickAsc={onSizeSortClickAsc}
        onColorSortClickAsc={onColorSortClickAsc}
      />

      <SortDes
        onIdSortClickDes={onIdSortClickDes}
        onTitleSortClickDes={onTitleSortClickDes}
        onSizeSortClickDes={onSizeSortClickDes}
        onColorSortClickDes={onColorSortClickDes}
      />

      {data.length > 0 ? (
        <Table data={data} searchId={searchId} exactMatch={exactMatch} />
      ) : (
        <div>No robots found.</div>
      )}

      <GridTable data={data} />
    </div>
  );
};

export default Home;
