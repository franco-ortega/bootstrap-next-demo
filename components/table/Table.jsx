import React from 'react';
import Row from './Row';

const Table = ({ data }) => {
  return (
    <table className='table table-striped w-50'>
      <tr className='border'>
        <th>ID</th>
        <th>Title</th>
        <th>Size</th>
        <th>Color</th>
        <th>Bloop</th>
      </tr>
      {data.map((item) => (
        <Row
          key={item.id}
          id={item.id}
          title={item.title}
          size={item.size}
          color={item.color}
        />
      ))}
    </table>
  );
};

export default Table;
