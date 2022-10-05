import React from 'react';

const Item = ({ title, size, color }) => {
  return (
    <li>
      <div>{title}</div>
      <div>{size}</div>
      <div>{color}</div>
    </li>
  );
};

export default Item;
