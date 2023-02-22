import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  background-color:  #F0F0F0;
  color: #34314C;
  padding: 20px;
  box-shadow: 1px 1px 9px #CCC;
  border-radius: 10px;
  margin-top: 20px;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 500;
`;

export const TableHeadeColumn = styled.th<{width?: number}>`
  width: ${props => props.width ?  `${props.width}px` : 'auto'};
  padding: 10px 0;
  text-align: left;

`;