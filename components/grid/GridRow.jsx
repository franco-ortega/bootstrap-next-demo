import styles from './GridRow.module.css';

const GridRow = ({ id, title, size, color }) => {
  return (
    <div className={styles.GridRow}>
      <div>{id}</div>
      <div>{title}</div>
      <div>{size}</div>
      <div>{color}</div>
    </div>
  );
};

export default GridRow;
