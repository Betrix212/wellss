import { MenuItem, TextField } from "@mui/material";
import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface CustomSelectProps {
  label: string;
  register: UseFormRegisterReturn;
  values: string[];
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  register,
  values,
}) => {
  return (
    <TextField
      select
      label={label}
      {...register}
      variant="filled"
      fullWidth
      sx={{
        paddingTop: "10px",
        backgroundColor: "transparent",
        border: "2px solid transparent !important",
        "& .MuiFilledInput-root": {
          backgroundColor: "transparent",
        },
        "& .MuiInputLabel-root": {
          top: "20px",
          "&.Mui-focused": {
            color: "#5a469b",
            top: 0,
            backgroundColor: "transparent",
          },
          "&.MuiFormLabel-filled": {
            top: 0,
          },
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
    >
      {values.map((option) => (
        <MenuItem key={option} value={option.toLowerCase()}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
};

// [
//     "Alabama",
//     "Alaska",
//     "Arizona",
//     "Arkansas",
//     "California",
//     "Colorado",
//     "Connecticut",
//     "Delaware",
//     "Florida",
//     "Georgia",
//     "Hawaii",
//     "Idaho",
//     "IllinoisIndiana",
//     "Iowa",
//     "Kansas",
//     "Kentucky",
//     "Louisiana",
//     "Maine",
//     "Maryland",
//     "Massachusetts",
//     "Michigan",
//     "Minnesota",
//     "Mississippi",
//     "Missouri",
//     "MontanaNebraska",
//     "Nevada",
//     "New Hampshire",
//     "New Jersey",
//     "New Mexico",
//     "New York",
//     "North Carolina",
//     "North Dakota",
//     "Ohio",
//     "Oklahoma",
//     "Oregon",
//     "PennsylvaniaRhode Island",
//     "South Carolina",
//     "South Dakota",
//     "Tennessee",
//     "Texas",
//     "Utah",
//     "Vermont",
//     "Virginia",
//     "Washington",
//     "West Virginia",
//     "Wisconsin",
//     "Wyoming",
//   ]
