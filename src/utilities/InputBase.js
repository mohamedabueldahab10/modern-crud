import { InputBase } from "@mui/material";
import styled from "styled-components";

const StyledInputBase = styled(InputBase)(() => ({
  minWidth: "220px",
  "& .MuiInputBase-input": {
    border: "2px solid #ccc",
    borderRadius: "50px",
    padding: "7px 35px",
    display: "flex",
    transition: "box-shadow .5s",
    background: "#fff",
    "&:focus": {
      borderColor: "#ccc",
      boxShadow: "0 0 0 1px #ccc",
    },
  },
}));

export default StyledInputBase;
