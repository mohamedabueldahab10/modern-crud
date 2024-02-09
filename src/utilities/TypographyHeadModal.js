import styled from "styled-components";

const Typography = styled.h1`
  color: #252e48;
  font-size: ${(props) => (props.delmodal ? "20px" : "26px")};
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  text-align: center;
  margin-bottom: ${(props) => (props.delmodal ? "0" : "30px")};
  text-transform: capitalize;
`;
export default Typography;
