const SortAsc = ({
  onIdSortClickAsc,
  onTitleSortClickAsc,
  onSizeSortClickAsc,
  onColorSortClickAsc
}) => {
  return (
    <div className='d-flex gap-5'>
      <button className='btn btn-primary' onClick={onIdSortClickAsc}>
        Sort by ID (ASC)
      </button>
      <button className='btn btn-primary' onClick={onTitleSortClickAsc}>
        Sort by Title (ASC)
      </button>
      <button className='btn btn-primary' onClick={onSizeSortClickAsc}>
        Sort by Size (ASC)
      </button>
      <button className='btn btn-primary' onClick={onColorSortClickAsc}>
        Sort by Color (ASC)
      </button>
    </div>
  );
};

export default SortAsc;
