const SortDes = ({
  onIdSortClickDes,
  onTitleSortClickDes,
  onSizeSortClickDes,
  onColorSortClickDes
}) => {
  return (
    <div className='d-flex gap-5 my-1'>
      <button className='btn btn-primary' onClick={onIdSortClickDes}>
        Sort by ID (Des)
      </button>
      <button className='btn btn-primary' onClick={onTitleSortClickDes}>
        Sort by Title (Des)
      </button>
      <button className='btn btn-primary' onClick={onSizeSortClickDes}>
        Sort by Size (Des)
      </button>
      <button className='btn btn-primary' onClick={onColorSortClickDes}>
        Sort by Color (Des)
      </button>
    </div>
  );
};

export default SortDes;
