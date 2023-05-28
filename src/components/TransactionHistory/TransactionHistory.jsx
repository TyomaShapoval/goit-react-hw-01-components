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

const invoiceShape = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

const invoicesArrayShape = PropTypes.arrayOf(PropTypes.shape(invoiceShape));

TransactionHistory.propTypes = {
  items: invoicesArrayShape.isRequired,
};

export default TransactionHistory;
