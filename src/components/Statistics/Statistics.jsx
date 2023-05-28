import React from 'react';
import styles from './Statistics.module.css';
import PropTypes from "prop-types"

function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles['stat-list']}>
        {stats.map(({ label, percentage, id }) => (
          <li key={id} className={styles.item}>
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })),
    title: PropTypes.string,
  };

export default Statistics;
