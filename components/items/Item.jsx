import React from 'react';

const Item = ({ id, title, size, color }) => {
  return (
    <li>
      <div>{id}</div>
      <div>{title}</div>
      <div>{size}</div>
      <div>{color}</div>
    </li>
  );
};

export default Item;
