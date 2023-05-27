import React from 'react';
import styles from './TransactionHistory.module.css';
import PropTypes from "prop-types"

function TransactionHistory({ items }) {
  return (
    <table className={styles[`transaction-history`]}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
    transaction: PropTypes.object,
  };

export default TransactionHistory;
