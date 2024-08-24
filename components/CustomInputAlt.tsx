/* eslint-disable @next/next/no-img-element */
import { Box, Typography } from "@mui/material";
import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";

interface CustomInputAltProps {
  label: string;
  error?: string;
}

export const CustomInputAlt: React.FC<CustomInputAltProps> = ({
  label,
  error,
}) => {
  const isPhone = useMediaQuery("(max-width: 460px)");

  return (
    <Box
      color={"#44464a"}
      fontFamily={"Verdana"}
      fontSize={"13px"}
      maxWidth={isPhone ? "100%" : "250px"}
      display={"flex"}
      flexGrow={1}
      justifyContent={"flex-end"}
      flexDirection={"column"}
    >
      <Box
        position={"relative"}
        color={"#44464a"}
        fontFamily={"Verdana"}
        fontSize={"13px"}
      >
        <Typography
          component={"label"}
          color={"#444"}
          fontFamily={"Verdana"}
          fontSize={"12px"}
          lineHeight={1.231}
          fontWeight={700}
          margin={"14px 0 5px 0"}
          height={"30px"}
          sx={{
            cursor: "pointer",
          }}
        >
          {error && (
            <img
              style={{
                marginLeft: error ? "1px" : 0,
              }}
              alt=""
              src="data:image/gif;base64,R0lGODlhDAAMAMQfAMxDWr8VMsQqRNNdceWirfru8M5NY9FWa+u3wM1JX+GToNRidf76+/z19tVmeeOYpdl0hP34+fTY3ffj5vjk5/79/cYwSco/V+ensv77/M9RZt2DksxGXP///7sIJv///yH5BAEAAB8ALAAAAAAMAAwAAAVR4Pc1DxcEBpaJn2R4ybYl3jB9BeDVXTfsh8hj59n0NkTEhcjpcYiHANNJtEiJCgXRY9Htmp3nbkCYhpMFDZFQ3jkYH8piu4MUWBXEQCBYIFghADs="
            />
          )}
          {label}
        </Typography>
        <Box
          textAlign={"left"}
          width={"100%"}
          margin={"5px"}
          color={"#44464a"}
          fontFamily={"Verdana"}
          fontSize={"13px"}
          display={"block"}
        ></Box>
        <input
          style={{
            borderRadius: "2px",
            border: "1px solid",
            borderColor: error ? "#d4002f" : "#cfd1d7",
            paddingLeft: "10px",
            width: isPhone ? "100%" : "250px",
            height: "34px",
            color: "#44464a",
            fontFamily: "Verdana",
            fontSize: "13px",
            boxSizing: "border-box",
          }}
        />
      </Box>
    </Box>
  );
};
