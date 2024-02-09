import React, { useState } from "react";
import { Box,CircularProgress } from "@mui/material";
import { BoxModalDel, StyledButton, TypographyHeadModal } from "./utilities";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
export default function ConfirmationModal(props) {
  const [isLoading, setIsLoading] = useState(false);
  async function handleConfirm(e) {
    e.preventDefault();
    setIsLoading(true);
    props.setData(prevData => prevData.map(item => (item.id === props.currentRow.id ? { ...item, ...props.newData } : item)));
    setIsLoading(false);
    props.handleCloseConfirm();
    props.handleClose();
  }
  return (
    <div>
      <form onSubmit={handleConfirm}>
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
              Are You Sure To Update This Row?
            </TypographyHeadModal>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <StyledButton modal onClick={props.handleCloseConfirm}>
              No
            </StyledButton>
            <StyledButton modal type="submit">
              {isLoading ? <CircularProgress /> : "Yes"}
            </StyledButton>
          </Box>
        </BoxModalDel>
      </form>
    </div>
  );
}
