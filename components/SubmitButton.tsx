import { Button, ButtonProps } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

interface SubmitButtonProps extends ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  text?: string;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  onClick,
  text = "Sign on",
  ...props
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "nowrap",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 0 1.5rem",
        margin: "0 auto",
        border: "0",
        fontSize: "100%",
        verticalAlign: "baseline",
        background: "transparent",
      }}
    >
      <Button
        {...props}
        sx={{
          cursor: "pointer",
          minWidth: "176px",
          maxWidth: "100%",
          height: "40px",
          fontFamily: "Wells Fargo Sans,Verdana,Arial,Helvetica,sans-serif",
          padding: "7px 16px 12px",
          userSelect: "none",
          background: "none",
          whiteSpace: "nowrap",
          fontWeight: "600",
          borderRadius: "24px",
          fontSize: "1.0625rem",
          lineHeight: "1.375rem",
          overflow: "hidden",
          textOverflow: "ellipsis",
          verticalAlign: "baseline",
          color: "#fff",
          backgroundColor: "#d71e28",
          border: "2px solid #d71e28",
          textTransform: `none`,
          ":hover": {
            backgroundColor: "#b01c24",
            border: "2px solid #b01c24",
            textDecoration: "underline",
          },
          ":focus": {
            backgroundColor: "#b01c24",
            border: "2px solid #b01c24",
          },
          ":active": {
            fontWeight: 700,
          },
          ":disabled": {
            backgroundColor: "#e2dede",
            border: "2px solid #e2dede",
            color: "#b5adad",
          },
        }}
        onClick={onClick}
      >
        {text}
      </Button>
    </Box>
  );
};
