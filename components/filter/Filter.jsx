const Filter = ({ handler }) => {
  return (
    <label htmlFor='robotId'>
      Filter Robots by ID:{' '}
      <input
        type='text'
        name='robotId'
        placeholder='Robot ID'
        onChange={(e) => handler(e.target.value)}
      />
    </label>
  );
};

export default Filter;
