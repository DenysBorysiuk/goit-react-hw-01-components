import styled from '@emotion/styled';

export const ProfileWrap = styled.div`
  margin-top: 60px;
  margin-right: auto;
  margin-left: auto;
  width: 285px;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  overflow: hidden;
`;

export const Description = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: white;
`;

export const Thumb = styled.div`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;

  width: 110px;
  height: 113px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #f3f6f9;
`;

export const Info = styled.span`
  margin-top: 10px;
  display: block;
  color: #82909e;
`;

export const Stats = styled.ul`
  list-style: none;
  display: flex;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 95px;
  padding-top: 20px;
  padding-bottom: 20px;
  border: 1px solid #e4e9f0;
`;

export const Label = styled.span`
  color: #82909e;
`;

export const Quantity = styled.span`
  color: #1f3349;
  font-weight: 700;
`;
