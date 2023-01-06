import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 8px;
  width: 300px;
  background-color: ${props => props.theme.colors.primaryWhite};
  border-radius: 5px;
  box-shadow: ${props => props.theme.boxShadow};
`;

export const Status = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;
export const Thumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 74px;
  height: 74px;
  border-radius: 5px;
  overflow: hidden;
  background-color: ${props => props.theme.colors.lightBg};
`;

export const Avatar = styled.img`
  width: 48px;
`;

export const Name = styled.p`
  color: ${props => props.theme.colors.blackFont};
  font-size: 20px;
  font-weight: 500;
`;
