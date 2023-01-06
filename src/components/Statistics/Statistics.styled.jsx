import styled from '@emotion/styled';

export const Section = styled.section`
  margin-top: 60px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  width: 420px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const Title = styled.h2`
  padding-top: 20px;
  padding-bottom: 20px;
  color: #4d5258;
  text-transform: uppercase;
  background-color: white;
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
  color: white;
`;

export const Percentage = styled.span`
  color: white;
  font-size: 20px;
`;
