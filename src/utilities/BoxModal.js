import { Box } from "@mui/material";
import styled from "styled-components";

const BoxModal = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 600px;
  width: ${(props) =>
    props.variant === "solo"
      ? "40%"
      : props.variant === "transaction"
      ? "90%"
      : " 55%"};
  background: #fff;
  border-radius: 0px 40px;
  box-shadow: 24;
  padding: 25px 35px 30px 35px;
`;
export default BoxModal;
