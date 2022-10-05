const Filter = ({ setSearchId, onExactMatchCheckbox }) => {
  return (
    <div>
      <label htmlFor='robotId'>
        Filter Robots by ID:{' '}
        <input
          type='text'
          name='robotId'
          placeholder='Robot ID'
          onChange={(e) => setSearchId(e.target.value)}
        />
      </label>
      <label htmlFor=''>
        <input type='checkbox' onChange={onExactMatchCheckbox} />
        Exact match
      </label>
    </div>
  );
};

export default Filter;
