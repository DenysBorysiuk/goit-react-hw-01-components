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
  border-right: 1px solid;
  :last-child {
    border-right: none;
  }
`;

export const ValueRow = styled.tr`
  :nth-of-type(odd) {
    background-color: ${props => props.theme.colors.primaryWhite};
  }
`;
export const TableValue = styled.th`
  width: 240px;
  padding-top: 8px;
  padding-bottom: 8px;
  text-transform: capitalize;
  color: ${props => props.theme.colors.primaryFont};
  font-weight: 400;
  border-right: ${props => `1px solid ${props.theme.colors.lightBorder}`};
  :last-child {
    border-right: none;
  }
`;
