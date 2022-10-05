const sortItems = (items, type, stateSetter, direction) => {
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

  return stateSetter(sorted);
};

export const sortItemsAsc = (items, type, stateSetter) => {
  return sortItems(items, type, stateSetter, 'asc');
};

export const sortItemsDes = (items, type, stateSetter) => {
  return sortItems(items, type, stateSetter, 'des');
};
