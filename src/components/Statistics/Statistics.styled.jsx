import styled from '@emotion/styled';

export const Section = styled.section`
  margin-top: 60px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  width: 420px;
  box-shadow: ${props => props.theme.boxShadow};
`;

export const Title = styled.h2`
  padding-top: 20px;
  padding-bottom: 20px;
  color: ${props => props.theme.colors.darkFont};
  text-transform: uppercase;
  background-color: ${props => props.theme.colors.primaryWhite};
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 84px;
  padding-top: 8px;
  padding-bottom: 8px;
`;

export const Lable = styled.span`
  color: ${props => props.theme.colors.primaryWhite};
`;

export const Percentage = styled.span`
  color: ${props => props.theme.colors.primaryWhite};
  font-size: 20px;
`;
