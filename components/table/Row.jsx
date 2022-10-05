const Row = ({ id, title, size, color }) => {
  return (
    <tr className='table-dark border'>
      <td className='table-dark border'>{id}</td>
      <td className='table-warning border'>{title}</td>
      <td className='table-dark border'>{size}</td>
      <td className='table-danger border'>{color}</td>
      <td>Nothing Here</td>
    </tr>
  );
};

export default Row;
