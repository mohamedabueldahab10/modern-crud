import styled from "styled-components";

const RowColumn = styled.div`
  flex: 0.7;
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 395px;
  @media (max-width: 1024px) {
    flex: 1;
    min-width: 395px;
  }
  @media (max-width: 768px) {
    min-width: 230px;
  }
`;

export default RowColumn;
