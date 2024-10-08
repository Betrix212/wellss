import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

interface ShowPasswordToggleProps {
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ShowPasswordToggle: React.FC<ShowPasswordToggleProps> = ({
  showPassword,
  setShowPassword,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexFlow: "row nowrap",
        flex: "1 1 auto",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        right: 0,
        top: "22px",
      }}
    >
      <Button
        sx={{
          padding: "12px 8px 8px 12px",
          lineHeight: 0,
          width: "100%",
          height: "100%",
        }}
        onClick={() => setShowPassword(!showPassword)}
      >
        <Box
          sx={{
            display: "flex",
            flexFlow: "row nowrap",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {showPassword ? <EyeIconClose /> : <EyeIconOpen />}
        </Box>
      </Button>
    </Box>
  );
};

const EyeIconOpen = () => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      aria-hidden="true"
      role="img"
      focusable="false"
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g opacity="0.01">
          <rect fill="#FFBFF9" x="0" y="0" width="24" height="24"></rect>
          <rect fill="#FFFFFF" x="1" y="1" width="22" height="22"></rect>
          <g
            strokeWidth="1"
            transform="translate(0.000000, 1.000000)"
            stroke="#FF2AEC"
          >
            <rect
              strokeWidth="0.25"
              x="6.625"
              y="0.125"
              width="10.75"
              height="21.75"
              rx="2"
            ></rect>
            <path
              d="M8.5,0.125 C7.46446609,0.125 6.625,0.964466094 6.625,2 L6.625,20 C6.625,21.0355339 7.46446609,21.875 8.5,21.875 L15.5,21.875 C16.5355339,21.875 17.375,21.0355339 17.375,20 L17.375,2 C17.375,0.964466094 16.5355339,0.125 15.5,0.125 L8.5,0.125 Z"
              strokeWidth="0.25"
              transform="translate(12.000000, 11.000000) rotate(-270.000000) translate(-12.000000, -11.000000) "
            ></path>
            <path
              d="M1,11 L23,11"
              strokeWidth="0.3"
              strokeLinecap="square"
              strokeDasharray="1"
              transform="translate(12.000000, 11.000000) rotate(-90.000000) translate(-12.000000, -11.000000) "
            ></path>
            <path
              d="M0.978218914,11 L22.9782189,11"
              strokeWidth="0.3"
              strokeLinecap="square"
              strokeDasharray="1"
              transform="translate(11.978219, 11.000000) rotate(-180.000000) translate(-11.978219, -11.000000) "
            ></path>
            <path
              d="M-2.8492424,11 L26.8492424,11"
              strokeWidth="0.3"
              strokeLinecap="square"
              strokeDasharray="1"
              transform="translate(12.000000, 11.000000) rotate(-135.000000) translate(-12.000000, -11.000000) "
            ></path>
            <path
              d="M-2.8492424,11 L26.8492424,11"
              strokeWidth="0.3"
              strokeLinecap="square"
              strokeDasharray="1"
              transform="translate(12.000000, 11.000000) rotate(-45.000000) translate(-12.000000, -11.000000) "
            ></path>
            <circle strokeWidth="0.5" cx="12" cy="11" r="8.75"></circle>
            <circle strokeWidth="0.5" cx="12" cy="11" r="5.25"></circle>
            <rect
              strokeWidth="0.5"
              x="3.25"
              y="2.25"
              width="17.5"
              height="17.5"
              rx="2"
            ></rect>
          </g>
        </g>
        <path
          d="M12.13525,18.512 C16.71175,18.512 20.7655,16.27775 23.26975,12.842 C20.7655,9.407 16.71175,7.17275 12.13525,7.17275 C7.558,7.17275 3.50425,9.407 1,12.842 C3.50425,16.27775 7.558,18.512 12.13525,18.512 Z M8.51125,7.66475 C7.6285,8.573 7.08475,9.812 7.08475,11.1785 C7.08475,13.96325 9.34225,16.22075 12.12775,16.22075 C14.9125,16.22075 17.17,13.96325 17.17,11.1785 C17.17,9.812 16.62625,8.573 15.7435,7.66475 M3.88675,19.628 L18.34,5 L3.88675,19.628 Z"
          stroke="#3B3331"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </svg>
  );
};

const EyeIconClose = () => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      aria-hidden="true"
      role="img"
      focusable="false"
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g opacity="0.01">
          <rect fill="#FFBFF9" x="0" y="0" width="24" height="24"></rect>
          <rect fill="#FFFFFF" x="1" y="1" width="22" height="22"></rect>
          <g
            strokeWidth="1"
            transform="translate(0.000000, 1.000000)"
            stroke="#FF2AEC"
          >
            <rect
              strokeWidth="0.25"
              x="6.625"
              y="0.125"
              width="10.75"
              height="21.75"
              rx="2"
            ></rect>
            <path
              d="M8.5,0.125 C7.46446609,0.125 6.625,0.964466094 6.625,2 L6.625,20 C6.625,21.0355339 7.46446609,21.875 8.5,21.875 L15.5,21.875 C16.5355339,21.875 17.375,21.0355339 17.375,20 L17.375,2 C17.375,0.964466094 16.5355339,0.125 15.5,0.125 L8.5,0.125 Z"
              strokeWidth="0.25"
              transform="translate(12.000000, 11.000000) rotate(-270.000000) translate(-12.000000, -11.000000) "
            ></path>
            <path
              d="M1,11 L23,11"
              strokeWidth="0.3"
              strokeLinecap="square"
              strokeDasharray="1"
              transform="translate(12.000000, 11.000000) rotate(-90.000000) translate(-12.000000, -11.000000) "
            ></path>
            <path
              d="M0.978218914,11 L22.9782189,11"
              strokeWidth="0.3"
              strokeLinecap="square"
              strokeDasharray="1"
              transform="translate(11.978219, 11.000000) rotate(-180.000000) translate(-11.978219, -11.000000) "
            ></path>
            <path
              d="M-2.8492424,11 L26.8492424,11"
              strokeWidth="0.3"
              strokeLinecap="square"
              strokeDasharray="1"
              transform="translate(12.000000, 11.000000) rotate(-135.000000) translate(-12.000000, -11.000000) "
            ></path>
            <path
              d="M-2.8492424,11 L26.8492424,11"
              strokeWidth="0.3"
              strokeLinecap="square"
              strokeDasharray="1"
              transform="translate(12.000000, 11.000000) rotate(-45.000000) translate(-12.000000, -11.000000) "
            ></path>
            <circle strokeWidth="0.5" cx="12" cy="11" r="8.75"></circle>
            <circle strokeWidth="0.5" cx="12" cy="11" r="5.25"></circle>
            <rect
              strokeWidth="0.5"
              x="3.25"
              y="2.25"
              width="17.5"
              height="17.5"
              rx="2"
            ></rect>
          </g>
        </g>
        <path
          d="M12.13525,18.33925 C16.71175,18.33925 20.7655,16.105 23.26975,12.67 C20.7655,9.23425 16.71175,7 12.13525,7 C7.558,7 3.50425,9.23425 1,12.67 C3.50425,16.105 7.558,18.33925 12.13525,18.33925 Z M8.51125,7.49275 C7.6285,8.40025 7.08475,9.64 7.08475,11.00575 C7.08475,13.7905 9.34225,16.04875 12.12775,16.04875 C14.9125,16.04875 17.17,13.7905 17.17,11.00575 C17.17,9.63925 16.62625,8.40025 15.7435,7.49275"
          id="mask-TIRRUXVR"
          stroke="#3B3331"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </svg>
  );
};
