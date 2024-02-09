import { Box } from "@mui/material";
import styled from "styled-components";

const BoxModal = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 650px;
  width: 45%;
  background: #fff;
  border-radius: 0px 40px;
  box-shadow: 24;
  padding: 25px 10px;
`;
export default BoxModal;
