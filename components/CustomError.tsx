import { Box } from "@mui/system";
import React from "react";

interface CustomErrorProps {
  error: string;
  width?: string | string[];
  alignItems?: string;
}

export const CustomError: React.FC<CustomErrorProps> = ({
  error,
  width = ["100%", "50%"],
  alignItems = "stretch",
}) => {
  return (
    <Box
      sx={{
        width,
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: ["12px", "2.5rem"],
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexFlow: "row nowrap",
          flex: "1 1 auto",
          alignItems,
          lineHeight: "18px",
          fontSize: "14px",
          backgroundColor: "#fff",
          color: "#3b3331",
          border: "2px solid #9c9191",
          padding: "16px 16px 16px 12px",
          boxSizing: "border-box",
          borderRadius: "2px",
          fontWeight: 400,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexFlow: "column nowrap",
            alignItems: "center",
            justifyContent: "flex-start",
            marginRight: "12px",
          }}
        >
          <ExclamationIcon />
        </Box>
        <Box
          sx={{
            display: "flex",
            flex: "1 1 100%",
            flexDirection: "row",
          }}
        >
          <Box>
            <Box>
              <Box>{error}</Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export const ExclamationIcon = () => {
  return (
    <svg
      width="40px"
      height="40px"
      viewBox="0 0 40 40"
      aria-hidden="true"
      role="img"
      className="WFErrorIcon__alertIcon___2SYkM"
      focusable="false"
      fill="#b42d19"
    >
      <path
        d="M20 34c-7.732 0-14-6.268-14-14S12.268 6 20 6s14 6.268 14 14c-.01 7.728-6.272 13.99-14 14zm-.934-10.824h1.848l.461-9.975h-2.771l.462 9.975zm.945 4.494c.434 0 .794-.147 1.081-.44.287-.295.43-.659.43-1.093 0-.448-.143-.812-.43-1.092-.287-.28-.647-.42-1.081-.42-.449 0-.816.14-1.103.42-.287.28-.43.644-.43 1.092 0 .434.143.798.43 1.092.287.294.654.441 1.102.441z"
        className="WFErrorIcon__fillColor___lw6qP"
      ></path>
    </svg>
  );
};
