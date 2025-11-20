import styles from './Legends.module.scss';

export interface LegendItem {
  color: string;
  label: string;
}

export interface LegendsProps {
  items: LegendItem[];
}

const Legends = ({ items }: LegendsProps) => {
  return (
    <div className={styles.legend}>
      {items.map((item: LegendItem, index: number) => (
        <div key={index + item.label} className={styles.legendItem}>
          <div className={styles.legendDot} style={{ backgroundColor: item.color }} />
          <span className={styles.legendLabel}>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Legends;
