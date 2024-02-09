import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  row-gap: 20px;
  @media (max-width: 1024px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

export default FormContainer;
