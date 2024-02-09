import React, { ReactNode } from "react";
import { Box } from "@mui/system";

interface IProps {
  children?: ReactNode;
  width?: string;
}

export default function Card(props: IProps) {
  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 1,
        width: props.width ? props.width : "80%",
      }}
    >
      <Box
        sx={{
          padding: "40px",
          background: "white",
          borderRadius: "0px 90px 0px 90px",
          boxShadow: "inset 0px -10px 0px #B9B9B9",
          marginBottom: "30px",
          zIndex: 1,
          "&::after": {
            content: '""',
            zIndex: -1,
            borderBottomLeftRadius: "90px",
            position: "absolute",
            height: "90px",
            background: "#A3A4A4",
            right: 0,
            bottom: 20,
          },
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
}
