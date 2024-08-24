import {
  FormControl,
  InputLabel,
  FilledInput,
  FilledInputProps,
  Box,
} from "@mui/material";
import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface CustomInputProps extends FilledInputProps {
  label: string;
  register?: UseFormRegisterReturn;
  endAdornment?: React.ReactNode;
  type?: string;
  errorMessage?: string;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  label,
  endAdornment,
  type = "text",
  register,
  errorMessage,
  ...props
}) => {
  return (
    <FormControl variant="filled" fullWidth>
      <InputLabel
        htmlFor="component-filled"
        sx={{
          display: "flex",
          fontWeight: 400,
          color: errorMessage ? "#bf2d19" : "#787070",
          top: "20px",
          "&.MuiInputLabel-shrink": {
            top: 0,
          },
          "&.Mui-focused": {
            color: errorMessage ? "#bf2d19" : "#5a469b",
            top: 0,
          },
        }}
      >
        {errorMessage && (
          <Box
            sx={{
              display: "flex",
              flexFlow: "row nowrap",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "0.25rem",
            }}
          >
            <svg
              width="16px"
              height="16px"
              viewBox="0 0 16 16"
              aria-hidden="true"
              role="img"
              focusable="false"
            >
              <g fill="none" fillRule="evenodd">
                <g opacity=".01">
                  <path fill="#FFBFF9" d="M0 0h16v16H0z"></path>
                  <path fill="#FFF" d="M1 1h14v14H1z"></path>
                  <g stroke="#FF2AEC">
                    <rect
                      strokeWidth=".15"
                      x="4.575"
                      y="1.075"
                      width="6.85"
                      height="13.85"
                      rx="1"
                    ></rect>
                    <path
                      d="M14.925 5.5A.925.925 0 0014 4.575H2a.925.925 0 00-.925.925v5c0 .51.414.925.925.925h12c.51 0 .925-.414.925-.925v-5z"
                      strokeWidth=".15"
                    ></path>
                    <path
                      d="M8 15V.978M15 8H1M14.5 14.5l-13-13M1.5 14.5l13-13"
                      strokeWidth=".15"
                      strokeLinecap="square"
                      strokeDasharray="1"
                    ></path>
                    <circle strokeWidth=".35" cx="8" cy="8" r="5.825"></circle>
                    <circle strokeWidth=".35" cx="8" cy="8" r="3.325"></circle>
                    <rect
                      strokeWidth=".35"
                      x="2.175"
                      y="2.175"
                      width="11.65"
                      height="11.65"
                      rx="1"
                    ></rect>
                  </g>
                </g>
                <path
                  d="M8 13.6A5.6 5.6 0 1113.6 8 5.607 5.607 0 018 13.6zm-.374-4.33h.74l.184-3.99H7.441l.185 3.99zm.378 1.798a.58.58 0 00.433-.176.6.6 0 00.172-.437.583.583 0 00-.605-.605.605.605 0 00-.44.168.583.583 0 00-.173.437.6.6 0 00.172.437.59.59 0 00.441.176z"
                  fill="#BF2D19"
                ></path>
              </g>
            </svg>
          </Box>
        )}
        {label}
      </InputLabel>
      <FilledInput
        id="component-filled"
        {...register}
        type={type}
        sx={{
          paddingTop: "10px",
          backgroundColor: "transparent",
          border: "2px solid transparent !important",
          fontSize: `Wells Fargo Sans, Verdana, Arial, Helvetica, sans-serif`,
          "::after": {
            borderBottom: "1px solid #1976d2",
          },
          ":hover": {
            backgroundColor: "#f9f7f6",
            border: "2px solid transparent !important",
          },
          ":focus": {
            backgroundColor: "#f9f7f6",
            border: "2px solid transparent !important",
          },
          "&.Mui-focused": {
            border: "2px solid #015ecc !important",
            borderRadius: "4px",
            "::after": {
              border: "2px solid transparent !important",
              ":hover": {
                border: "2px solid transparent !important",
              },
              ":focus": {
                border: "2px solid transparent !important",
              },
            },
            "::before": {
              border: "2px solid transparent !important",
              ":hover": {
                border: "2px solid transparent !important",
              },
              ":focus": {
                border: "2px solid transparent !important",
              },
            },
          },
        }}
        endAdornment={endAdornment || null}
        {...props}
      />
      {errorMessage && (
        <Box paddingTop={"8px"} color={"#bf2d19"}>
          <Box component={"span"}>{errorMessage}</Box>
        </Box>
      )}
    </FormControl>
  );
};
