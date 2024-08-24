import { SxProps, Theme, Typography } from "@mui/material";
import { Box, BoxProps } from "@mui/system";
import React from "react";
import { CustomError } from "./CustomError";
import { Spinner } from "./Spinner";

interface WrapperProps extends BoxProps {
  title: string;
  titleSX?: SxProps<Theme> | {};
  paragraph?: string;
  errors?: any;
  loading?: boolean;
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  title,
  titleSX,
  errors,
  paragraph,
  loading,
  ...props
}) => {
  return (
    <Box>
      <Box minHeight="100vh">
        <Box
          // minHeight="100vh"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          overflow="hidden"
          className="outer-container"
        >
          {loading ? (
            <Box
              sx={{
                position: "fixed",
                height: "100%",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 101,
                background: "rgba(0, 0, 0, .4)",
              }}
            >
              <Spinner />
            </Box>
          ) : null}
          <Box
            {...props}
            sx={{
              display: "flex",
              flexFlow: "column nowrap",
              flex: "1 0 auto",
              marginTop: ["42px", 0],
            }}
          >
            <Box
              sx={{
                margin: [0, "64px auto 90px"],
                marginTop: [0, "124px"],
                borderRadius: [0, "12px"],
                boxShadow: "0 0 16px 0 rgb(59 51 49 / 15%)",
                width: ["auto", "83%"],
                maxWidth: ["100%", "870px"],
                backgroundColor: "#fff",
                fontSize: "15px",
                position: "relative",
                zIndex: 0,
                paddingX: ["16px", 0],
                flexDirection: ["column", "initial"],
                display: ["flex", "initial"],
                flex: ["1 1 auto", "auto"],
              }}
            >
              <Box
                sx={{
                  width: ["100%", "50%"],
                  margin: "0 auto",
                }}
              >
                {errors && Object.keys(errors).length ? (
                  <CustomError
                    error={errors[Object.keys(errors)[0]].message}
                    width="100%"
                    alignItems="center"
                  />
                ) : null}

                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "nowrap",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    component="h1"
                    sx={{
                      marginTop: ["12px", "26px"],
                      fontSize: "24px",
                      color: "#3b3331",
                      textAlign: "center",
                      fontWeight: 400,
                      lineHeight: "3.25rem",
                      fontFamily: `"Wells Fargo Serif",Georgia,serif`,
                      outline: "none",
                      ...titleSX,
                    }}
                  >
                    {title}
                  </Typography>
                </Box>
                {paragraph && (
                  <Typography
                    component={"p"}
                    sx={{
                      display: "flex",
                      flexWrap: "nowrap",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "15px",
                      margin: "8px 0 16px",
                      color: "#3b3331",
                      verticalAlign: "baseline",
                      background: "transparent",
                      padding: 0,
                      border: 0,
                      textAlign: "center",
                    }}
                  >
                    {paragraph}
                  </Typography>
                )}
                {children}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
