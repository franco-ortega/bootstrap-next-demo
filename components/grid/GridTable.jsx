import GridRow from './GridRow';
import styles from './GridTable.module.css';

const GridTable = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.GridTable}>
      <h2>GridTable</h2>
      <div>
        <div>ID</div>
        <div>Title</div>
        <div>Size</div>
        <div>Color</div>
      </div>
      {data.map((item) => (
        <GridRow
          key={item.id}
          id={item.id}
          title={item.title}
          size={item.size}
          color={item.color}
        />
      ))}
    </div>
  );
};

export default GridTable;
