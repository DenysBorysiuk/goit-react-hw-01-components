import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  margin: 60px auto;
  border-collapse: collapse;
  overflow: hidden;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
`;

export const HeadRow = styled.tr`
  background-color: ${props => props.theme.colors.tableBg};
`;

export const TableTitle = styled.th`
  width: 240px;
  padding-top: 8px;
  padding-bottom: 8px;
  text-transform: uppercase;
  color: ${props => props.theme.colors.primaryWhite};
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
  color: ${props => props.theme.colors.primaryFont};
  font-weight: 400;
`;
