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
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
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
  background-color: #f3f6f9;
`;

export const Avatar = styled.img`
  width: 48px;
`;

export const Name = styled.p`
  color: black;
  font-size: 20px;
  font-weight: 500;
`;
