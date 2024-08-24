import { Box, Link, List, ListItem } from "@mui/material";
import React from "react";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexFlow: "row nowrap",
        alignItems: "center",
        justifyContent: "center",
        fontSize: ".8125rem",
        lineHeight: "1rem",
        backgroundColor: "#f4f0ed",
        borderTop: "1px solid #b5adad",
        padding: "32px 24px 24px",
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          width: ["100%", "1080px"],
        }}
      >
        <Box>
          <List
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              margin: 0,
              padding: 0,
              listStyle: "none",
              maxWidth: "1080px",
            }}
          >
            <CustomListItem text="About Wells Fargo" />
            <CustomListItem text="Report Email Fraud" />
            <CustomListItem text="Online Access Agreement" />
            <CustomListItem text="Privacy, Cookies, Security & Legal" />
            <CustomListItem text="Notice of Data Collection" />
            <CustomListItem text="Security Center" />
            <CustomListItem text="Sitemap" />
            <CustomListItem text="Ad Choices" showBorder={false} />
          </List>
          <Box
            sx={{
              lineHeight: "1rem",
              fontWeight: 400,
              fontSize: ".8125rem",
              borderTop: ["1px solid #b5adad", "none"],
              paddingTop: ["16px", 0],
            }}
          >
            © 1999 - {new Date().getFullYear()} Wells Fargo. All rights
            reserved. NMLSR ID 399801
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const CustomListItem = ({
  text,
  showBorder = true,
}: {
  text: string;
  showBorder?: boolean;
}) => {
  return (
    <ListItem
      sx={{
        display: "inline-block",
        margin: 0,
        padding: 0,
        paddingBottom: "24px",
        paddingRight: ["20px", 0],
        boxSizing: "border-box",
        width: ["50%", "auto"],
      }}
    >
      <Link
        href="#"
        sx={{
          borderRight: showBorder ? ["none", "1px solid grey"] : "none",
          padding: "0 16px 0 0",
          whiteSpace: ["normal", "nowrap"],
          cursor: "pointer",
          paddingLeft: 0,
          margin: 0,
          marginRight: "16px",
          verticalAlign: "baseline",
          background: "transparent",
          fontSize: ".8125rem",
          fontWeight: 400,
          lineHeight: "1rem",
          color: "#3b3331",
          textDecoration: "none",
        }}
      >
        {text}
      </Link>
    </ListItem>
  );
};
