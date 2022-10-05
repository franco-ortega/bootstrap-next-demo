import React from 'react';
import Item from './Item';

const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <Item
          key={item.id}
          title={item.title}
          size={item.size}
          color={item.color}
        />
      ))}
    </ul>
  );
};

export default ItemList;
