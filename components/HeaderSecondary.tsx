/* eslint-disable @next/next/no-img-element */
import { Box, Link, List, ListItem } from "@mui/material";
import React from "react";

interface HeaderSecondaryProps {}

export const HeaderSecondary: React.FC<HeaderSecondaryProps> = () => {
  return (
    <Box
      display={["block"]}
      bgcolor={"transparent"}
      height={["auto", "115px"]}
      position={"relative"}
      width={"100%"}
      textAlign={"center"}
      sx={{
        borderBottomColor: "#dfdfdf",
        borderBottomStyle: "solid",
        borderWidth: [0, "3px"],
        fontSize: "13px",
        fontFamily: "Verdana",
      }}
    >
      <Box
        color={"#44464a"}
        fontFamily={"Verdana"}
        fontSize={"13px"}
        display={["flex", "none"]}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          backgroundColor: "#bb0826",
          height: "42px",
          width: "100%",
          textAlign: "center",
          maxWidth: "inherit",
        }}
      >
        <Link>
          <img
            alt=""
            style={{
              height: "13px",
              width: "150px",
              margin: "auto",
              verticalAlign: "middle",
            }}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVgAAAAiCAYAAAAaosFTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpFRTExNTVCODA5MjA2ODExODA4M0E0RUNFQzZDMEFBMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5MzE1MkNEODk3RjkxMUUzOEU5OEY3MThENUIxQTk0QSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5MzE1MkNENzk3RjkxMUUzOEU5OEY3MThENUIxQTk0QSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RUYxMTU1QjgwOTIwNjgxMTgwODNBNEVDRUM2QzBBQTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RUUxMTU1QjgwOTIwNjgxMTgwODNBNEVDRUM2QzBBQTEiLz4gPC9yZGY6RGVzY3Jp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"
          />
        </Link>
      </Box>
      <Box
        display={["none", "block"]}
        maxWidth={"970px"}
        position={"relative"}
        margin={"0 auto"}
        height={"115px"}
        color={"#44464a"}
        fontFamily={"Verdana"}
        fontSize={"13px"}
      >
        <Box
          position={"absolute"}
          top={"32px"}
          left={"10px"}
          display={"block"}
          color={"#44464a"}
          fontFamily={"Verdana"}
          fontSize={"13px"}
        >
          <Link
            color={"#666"}
            fontFamily={"Verdana"}
            fontSize={"13px"}
            sx={{
              textDecoration: "none",
            }}
          >
            <img
              alt=""
              src="data:image/gif;base64,R0lGODlhPgA+APcAAMocId4gJbUYHOyKEtgfJIUPEek4IbYYHOJ8EbEXHOt1Fa8XGva7Bu5tGeuCE+ROHe2cC+V0FfzLAbdEE9UnIfq+BuqmB30NEKAUF9yKC+tBH/e3BpwTFpoTFvOZD+9nGqQVGdNCGY4QE8NUE5cSFtJsEZUSFPaXEfi0CO6qB+IhJfa+BacVGZMRFMMjHfvIA/CxBvClCtpVGboiGpYSFtAzHfK0BumTDtAjIMY8GOScCtJ4DccpHeujCfC0Bsw2G9pMGe59Fc5gEowQE+SEEL08FslQFfa0BsJDFu55FoEOENhiFNVbFe+uButJH/CKE/CzBvmqDPzKAcAaHt1aGNEeI9sgJaolFogPEffABO1SHd5zEshlD/KrCfijDs8rH/zGA9thFOmaCt1nFbMpF6oWGfW0BvahDdg3Hvm4BsVNFNs+HNpyEs1sD/SvCMIyGe1zF+JFHfvABfOBFvCREdBhE+SODKgfFuJvFdYsIONpF9ZiFLYiGsk7GrYyF/KuBt4mJPzJA9sxIOh9FNpuEsZmD+BjF+EnJNt4ENhFGtFVFdZnE9BmEuVuF7MbHOclJeGNDPjCBPnBBPO3BuFaGbYeGuSWC9Y8G9oqItdyEeksJd0nIsMbHsgcIMQbHsIbHrsZHcYbIMUbHskcIL8aHrwZHbkZHb4aH70aH9IeI88dI9AdI9MeI9QeI9YeI8wdIc0dIbIXHKkWGdcfJOEhJagVGasWGt0gJa0WGuAgJaMVGdofJJ8UF/rGA+QhJaIUF+UhJ7gZHJARE7gZHYsQEfvGA/rHA/nGA/3NAfrFA/zKA+djGfrDA++bDe6TEN12EL0aHcwfIOSQDOSJDsA4GK4ZGbIeGaYbF/vDBdlRGdojIumPDvzFBc9yDcUcHsA8F89CF/G3BrodHNNNGPnFA8IdHu9bHM8fIfO8BOimB+CEDq8gF/OiC+cjJ85bE/zBBdpnFOqXDMdBGPOyBuIkJcpMFdd/Dd+ADtskItRjE701GO6XDfCpCb8fG/7OAeYiJyH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNDM0M4MjczNDhCMDExRTQ5RDlBQTEyODczMzI4RDYyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNDM0M4Mjc0NDhCMDExRTQ5RDlBQTEyODczMzI4RDYyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M0MzQzgyNzE0OEIwMTFFNDlEOUFBMTI4NzMzMjhENjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6M0MzQzgyNzI0OEIwMTFFNDlEOUFBMTI4NzMzMjhENjIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMi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"
            />
          </Link>
        </Box>
        <Box
          position={"absolute"}
          top={"77px"}
          right={0}
          bottom={"16px"}
          display={"block"}
          color={"#44464a"}
          fontFamily={"Verdana"}
          fontSize={"13px"}
        >
          <Box component={"nav"}>
            <List
              sx={{
                listStyle: "none",
                listStyleImage: "none",
                padding: "0 0 0 10px",
                margin: "0 0 20px 10px",
                textAlign: "right",
              }}
            >
              <ListItem
                sx={{
                  listStyleType: "none",
                  display: "inline",
                  padding: "0 5px",
                  margin: "0 auto .5em auto",
                  lineHeight: "1.4em",
                }}
              >
                <Link
                  fontFamily={"Verdana"}
                  fontSize={"12px"}
                  color={"#666"}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  Online Security
                </Link>
              </ListItem>
              <ListItem
                sx={{
                  listStyleType: "none",
                  display: "inline",
                  padding: "0 5px",
                  margin: "0 auto .5em auto",
                  lineHeight: "1.4em",
                }}
              >
                <Link
                  fontFamily={"Verdana"}
                  fontSize={"12px"}
                  color={"#666"}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  Español
                </Link>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
