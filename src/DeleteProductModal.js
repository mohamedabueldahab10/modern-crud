import React, { useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import { BoxModalDel, StyledButton, TypographyHeadModal } from "./utilities";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
export default function DeleteProductModal(props) {
  const [isLoading, setIsLoading] = useState(false);
  async function handleDelete(e) {
    e.preventDefault();
    setIsLoading(true);
    props.setData(prevData => prevData.filter(item => item.id !== props.currentRow.id));
    setIsLoading(false);
    props.handleCloseDelete();
  }
  return (
    <div>
      <form onSubmit={handleDelete}>
        <BoxModalDel>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "20px 0 45px 0",
            }}
          >
            <WarningAmberOutlinedIcon
              sx={{
                transform: "Scale(2.8)",
                margin: "0 30px 0 0",
                color: "#ffb121",
              }}
            />
            <TypographyHeadModal delmodal>
              Delete
            </TypographyHeadModal>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <StyledButton modal onClick={props.handleCloseDelete}>
              close
            </StyledButton>
            <StyledButton modal type="submit">
              {isLoading ? <CircularProgress /> : "Delete"}
            </StyledButton>
          </Box>
        </BoxModalDel>
      </form>
    </div>
  );
}
