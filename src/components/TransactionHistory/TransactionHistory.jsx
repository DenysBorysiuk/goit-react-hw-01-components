import PropTypes from 'prop-types';
import {
  TransactionTable,
  TableTitle,
  TableValue,
  HeadRow,
  ValueRow,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <thead>
        <HeadRow>
          <TableTitle>Type</TableTitle>
          <TableTitle>Amount</TableTitle>
          <TableTitle>Currency</TableTitle>
        </HeadRow>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }, idx) => (
          <ValueRow key={id} index={idx}>
            <TableValue>{type}</TableValue>
            <TableValue>{amount}</TableValue>
            <TableValue>{currency}</TableValue>
          </ValueRow>
        ))}
      </tbody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
