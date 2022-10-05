import React from 'react';
import Row from './Row';

const Table = ({ data }) => {
  console.log(data[0]);
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
        {data.map((item) => (
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
