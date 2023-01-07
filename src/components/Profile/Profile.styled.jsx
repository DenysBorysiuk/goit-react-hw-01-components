import styled from '@emotion/styled';

export const ProfileWrap = styled.div`
  margin-top: 60px;
  margin-right: auto;
  margin-left: auto;
  width: 285px;
  text-align: center;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  overflow: hidden;
`;

export const Description = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: ${props => props.theme.colors.primaryWhite};
`;

export const Thumb = styled.div`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;

  width: 110px;
  height: 113px;
  border-radius: 50%;
  overflow: hidden;
  background-color: ${props => props.theme.colors.lightBg};
`;

export const Name = styled.h2`
  color: ${props => props.theme.colors.blackFont};
`;

export const Info = styled.span`
  margin-top: 10px;
  display: block;
  color: ${props => props.theme.colors.primaryFont};
`;

export const Stats = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 95px;
  padding-top: 20px;
  padding-bottom: 20px;
  border: ${props => `1px solid ${props.theme.colors.lightBorder}`};
`;

export const Label = styled.span`
  color: ${props => props.theme.colors.primaryFont};
`;

export const Quantity = styled.span`
  color: ${props => props.theme.colors.blackFont};
  font-weight: 700;
`;
