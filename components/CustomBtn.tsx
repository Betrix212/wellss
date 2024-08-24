import { Box } from "@mui/material";
import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";

interface CustomBtnProps {
  value: string;
}

export const CustomBtn: React.FC<CustomBtnProps> = ({ value }) => {
  const isPhone = useMediaQuery("(max-width: 460px)");
  
  return (
    <Box
      textAlign={"right"}
      width={"100%"}
      color={"#44464a"}
      fontFamily={"Verdana"}
      fontSize={"13px"}
    >
      <input
        style={{
          background:
            "linear-gradient(to bottom,#5174b8 0,#3d62a3 50%,#335898 52%,#244a87 100%)",
          textShadow: "none",
          display: "inline",
          zIndex: 1,
          marginRight: "5px",
          padding: "5px 15px",
          border: 0,
          cursor: "pointer",
          overflow: "auto",
          textAlign: "center",
          fontWeight: 700,
          color: "#fff",
          whiteSpace: "nowrap",
          borderRadius: "4px",
          textDecoration: "none",
          fontSize: "13.3333px",
          width: isPhone ? "100%" : "87.77px",
        }}
        value={value}
        type={"submit"}
      />
    </Box>
  );
};
