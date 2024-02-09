import styled from "styled-components";

const FormColumn = styled.div`
  max-width: 600px;
  min-width: 395px;
  display: flex;
  flex: 1;
  flex-flow: column;
  gap: 20px;
  @media (max-width: 1440px) {
    width: 49%;
    align-items: center;
  }
  @media (max-width: 1024px) {
    width: 100%;
    min-width: 200px;
  }
`;

export default FormColumn;
