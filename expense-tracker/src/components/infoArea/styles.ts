import styled from "styled-components";

export const Container = styled.div`
  background-color: #F0F0F0;
  box-shadow:  0px 0px 5px #CCC;
  border-radius: 10px;
  padding: 20px;
  margin-top: -40px;
  display: flex;
`;

export const MonthArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;


export const MonthArrow = styled.div`
  width: 40px;
  text-align: center;
  font-size: 25px;
  cursor: pointer;
`;

export const MonthTitle = styled.div`
  flex: 1;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
`;

export const ResumeArea = styled.div`
  flex: 2;
  display: flex;
`;