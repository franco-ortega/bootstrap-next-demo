import React from 'react';
import Item from './Item';

const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map((item, i) => (
        <Item key={i} title={item.title} size={item.size} color={item.color} />
      ))}
    </ul>
  );
};

export default ItemList;
