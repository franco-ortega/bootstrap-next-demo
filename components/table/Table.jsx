import React from 'react';
import Row from './Row';

const Table = ({ data, searchId, exactMatch }) => {
  return (
    <table className='table table-striped w-75'>
      <tbody>
        <tr className='border'>
          <th>ID</th>
          <th>Title</th>
          <th>Size</th>
          <th>Color</th>
          <th>Bloop</th>
        </tr>
        {data
          .filter((item) =>
            // filter for exact match of ID
            searchId && exactMatch
              ? String(item.id) === searchId
              : // or filter for all IDs that include the number submitted
              searchId
              ? String(item.id).includes(searchId)
              : // otherwise display all data
                item
          )
          .map((item) => (
            <Row
              key={item.id}
              id={item.id}
              title={item.title}
              size={item.size}
              color={item.color}
            />
          ))}
      </tbody>
    </table>
  );
};

export default Table;
