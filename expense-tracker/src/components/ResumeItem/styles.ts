import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
`;

export const Title = styled.div`
text-align: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  margin-bottom: 5px;

`;

export const Info = styled.div<{color? : string}>`
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  color: ${props => props.color ?? '#000'};
`;