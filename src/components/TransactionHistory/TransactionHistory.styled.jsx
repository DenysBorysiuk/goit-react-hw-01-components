import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  margin: 60px auto;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const HeadRow = styled.tr`
  background-color: #00bcd5;
`;

export const TableTitle = styled.th`
  width: 240px;
  padding-top: 8px;
  padding-bottom: 8px;
  text-transform: uppercase;
  color: white;
`;

export const ValueRow = styled.tr`
  background-color: ${props => {
    return props.index % 2 === 0 ? 'white' : '#ecf1f4';
  }};
`;
export const TableValue = styled.th`
  width: 240px;
  padding-top: 8px;
  padding-bottom: 8px;
  text-transform: capitalize;
  color: #818486;
  font-weight: 400;
`;
