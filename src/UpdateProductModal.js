import {Box, CircularProgress , Modal } from "@mui/material";
import styled from "styled-components";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  StyledButton,
  TypographyHeadModal,
  StyledInputBase,
  BoxModal,
} from "./utilities";
import ConfirmationModal from "./ConfirmationModal";

const StyledLabel = styled.label`
  font-size: 17px;
  font-weight: 400;
  width: 35%;
  text-transform: capitalize;
`;
export default function UpdateProductModal(props) {
  const {handleClose,currentRow,setData} = props;
  const {
    register,
    handleSubmit,
  } = useForm({
    mode: "onTouched",
    defaultValues: currentRow,
  });
  const [confirm, setConfirm] = useState(false);
  const [newData, setNewData] = useState(false);
  const handleCloseConfirm = () => setConfirm(false);

  async function handleFormSubmit(newData) {
    setNewData(newData);
    setConfirm(true);
  }
  return (
    <div>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <BoxModal>
          <TypographyHeadModal>
            Update
          </TypographyHeadModal>
          <Box
            sx={{ display: "flex", flexDirection: "column", rowGap: "25px" }}
          >
            <Box sx={{ display: "flex", width: "100%", columnGap: "4%" }}>
              <Box
                sx={{
                  width: "48%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <StyledLabel htmlFor="id">
                  ID
                </StyledLabel>
                <Box sx={{ width: "65%" }}>
                  <StyledInputBase
                    sx={{ width: "100%", minWidth: "150px !important" }}
                    id="id"
                    {...register("id")}
                    placeholder="id"
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  width: "48%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <StyledLabel htmlFor="name">
                  Name
                </StyledLabel>
                <Box sx={{ width: "65%" }}>
                  <StyledInputBase
                    sx={{ width: "100%", minWidth: "150px !important" }}
                    id="name"
                    {...register("name")}
                    placeholder="name"
                  />
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: "flex", width: "100%", columnGap: "4%" }}>
              <Box
                sx={{
                  width: "48%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <StyledLabel htmlFor="age">
                  Age
                </StyledLabel>
                <Box sx={{ width: "65%" }}>
                  <StyledInputBase
                    sx={{ width: "100%", minWidth: "150px !important" }}
                    id="age"
                    {...register("age")}
                    placeholder="age"
                    type="number"
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  width: "48%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <StyledLabel htmlFor="gender">
                  gender
                </StyledLabel>
                <Box sx={{ width: "65%" }}>
                  <StyledInputBase
                    sx={{ width: "100%", minWidth: "150px !important" }}
                    id="gender"
                    {...register("gender")}
                    placeholder="gender"
                  />
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: "flex", width: "100%", columnGap: "4%" }}>
              <Box
                sx={{
                  width: "48%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <StyledLabel htmlFor="city">
                  city
                </StyledLabel>
                <Box sx={{ width: "65%" }}>
                  <StyledInputBase
                    sx={{ width: "100%", minWidth: "150px !important" }}
                    id="city"
                    {...register("city")}
                    placeholder="city"
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  width: "48%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <StyledLabel htmlFor="state">
                  state
                </StyledLabel>
                <Box sx={{ width: "65%" }}>
                  <StyledInputBase
                    sx={{ width: "100%", minWidth: "150px !important" }}
                    id="state"
                    {...register("state")}
                    placeholder="state"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          {/* ===================btn================ */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              marginTop: "2rem",
            }}
          >
            <StyledButton onClick={handleClose}>
              Cancel
            </StyledButton>
            <StyledButton modal type="submit" >
              Update
            </StyledButton>
          </Box>
        </BoxModal>
      </form>
      <Modal open={confirm}>
        <ConfirmationModal
          handleCloseConfirm={handleCloseConfirm}
          currentRow={currentRow}
          setData={setData}
          newData={newData}
          handleClose={handleClose}
        />
      </Modal>
    </div>
  );
}
