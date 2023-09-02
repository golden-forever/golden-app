import { FunctionComponent, useCallback } from "react";
import { TextField, Button } from "@mui/material";

const SignUp: FunctionComponent = () => {
  const onSignUpPasswordClick = useCallback(() => {
    // Please sync "Log in | previously authorized" to the project
  }, []);

  return (
    <div
      style={{
        position: "relative",
        borderRadius: "32px",
        backgroundColor: "#fff",
        boxSizing: "border-box",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "0.06rem",
        textAlign: "left",
        fontSize: "1.75rem",
        color: "#191919",
        fontFamily: "'Noto Sans'",
      }}
      onClick={onSignUpPasswordClick}
    >
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          padding: "3.56rem 15.13rem",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "0.06rem",
            height: "0.06rem",
            overflow: "hidden",
            flexShrink: "0",
          }}
        />
        <div
          style={{
            width: "20.75rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "2.75rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "0.5rem",
            }}
          >
            <div style={{ position: "relative", fontWeight: "500" }}>
              Welcome to Golden
            </div>
            <div
              style={{ position: "relative", fontSize: "1rem", color: "#666" }}
            >
              Get started - it's free. No credit card needed.
            </div>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "2rem",
              fontSize: "0.88rem",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  borderRadius: "4px",
                  border: "1px solid #ededed",
                  display: "flex",
                  flexDirection: "row",
                  padding: "0.63rem 1.5rem",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                }}
              >
                <img
                  style={{
                    position: "relative",
                    width: "1.5rem",
                    height: "1.5rem",
                    overflow: "hidden",
                    flexShrink: "0",
                  }}
                  alt=""
                  src="/icons.svg"
                />
                <div style={{ position: "relative", fontWeight: "600" }}>
                  Continue with Google work account
                </div>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "1.5rem",
                  color: "#b2b2b2",
                }}
              >
                <img
                  style={{
                    flex: "1",
                    position: "relative",
                    maxWidth: "100%",
                    overflow: "hidden",
                    height: "0.06rem",
                  }}
                  alt=""
                  src="/vector-1.svg"
                />
                <div style={{ position: "relative" }}>or</div>
                <img
                  style={{
                    flex: "1",
                    position: "relative",
                    maxWidth: "100%",
                    overflow: "hidden",
                    height: "0.06rem",
                  }}
                  alt=""
                  src="/vector-2.svg"
                />
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "1rem",
                  color: "#666",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "0.25rem",
                  }}
                >
                  <div
                    style={{
                      height: "1.25rem",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: "0.25rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "0.13rem",
                      }}
                    >
                      <div style={{ position: "relative" }}>Company email</div>
                      <div
                        style={{
                          position: "relative",
                          lineHeight: "0.81rem",
                          fontWeight: "500",
                          fontFamily: "Inter",
                          color: "#1f2937",
                          display: "none",
                        }}
                      >
                        *
                      </div>
                    </div>
                    <div
                      style={{
                        borderRadius: "4px",
                        backgroundColor: "#f3f4f6",
                        display: "none",
                        flexDirection: "row",
                        padding: "0.13rem",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        style={{
                          position: "relative",
                          width: "0.38rem",
                          height: "0.38rem",
                          overflow: "hidden",
                          flexShrink: "0",
                        }}
                        alt=""
                        src="/icons1.svg"
                      />
                    </div>
                  </div>
                  <TextField
                    style={{
                      border: "none",
                      backgroundColor: "transparent",
                      alignSelf: "stretch",
                    }}
                    color="primary"
                    variant="outlined"
                    type="text"
                    label="name@company.com"
                    placeholder="Placeholder"
                    size="medium"
                    margin="none"
                  />
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "0.25rem",
                  }}
                >
                  <div
                    style={{
                      height: "1.25rem",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: "0.25rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "0.13rem",
                      }}
                    >
                      <div style={{ position: "relative" }}>Password</div>
                      <div
                        style={{
                          position: "relative",
                          lineHeight: "0.81rem",
                          fontWeight: "500",
                          fontFamily: "Inter",
                          color: "#1f2937",
                          display: "none",
                        }}
                      >
                        *
                      </div>
                    </div>
                    <div
                      style={{
                        borderRadius: "4px",
                        backgroundColor: "#f3f4f6",
                        display: "none",
                        flexDirection: "row",
                        padding: "0.13rem",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        style={{
                          position: "relative",
                          width: "0.38rem",
                          height: "0.38rem",
                          overflow: "hidden",
                          flexShrink: "0",
                        }}
                        alt=""
                        src="/icons1.svg"
                      />
                    </div>
                  </div>
                  <TextField
                    style={{
                      border: "none",
                      backgroundColor: "transparent",
                      alignSelf: "stretch",
                    }}
                    color="primary"
                    variant="outlined"
                    type="text"
                    label="Create password"
                    placeholder="Placeholder"
                    size="medium"
                    margin="none"
                  />
                </div>
                <Button>Sign up</Button>
              </div>
            </div>
            <div
              style={{
                position: "relative",
                textAlign: "center",
                display: "inline-block",
                width: "14.56rem",
              }}
            >
              <span>{`By proceeding, you agree to the `}</span>
              <span style={{ color: "#0a66c2" }}>Terms of Service</span>
              <span>{` and `}</span>
              <span style={{ color: "#0a66c2" }}>Privacy Policy</span>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            gap: "0.38rem",
            textAlign: "right",
            fontSize: "0.88rem",
          }}
        >
          <div style={{ position: "relative" }}>Already a user?</div>
          <div
            style={{
              position: "relative",
              fontWeight: "600",
              color: "#0a66c2",
              textAlign: "left",
            }}
          >
            Log in
          </div>
        </div>
      </div>
      <div
        style={{
          alignSelf: "stretch",
          flex: "1",
          backgroundColor: "#0a66c2",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          padding: "4rem 0rem 4rem 1.13rem",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "5.31rem",
          color: "#fff",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "1rem",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "1rem",
            }}
          >
            <img
              style={{
                position: "relative",
                borderRadius: "32px",
                width: "2.19rem",
                height: "0.19rem",
              }}
              alt=""
              src="/vector-288.svg"
            />
            <div style={{ flex: "1", position: "relative", fontWeight: "600" }}>
              Your Recruitment Loyal Companion.
            </div>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "row",
              padding: "0rem 0rem 0rem 3rem",
              alignItems: "center",
              justifyContent: "flex-start",
              fontSize: "1rem",
              color: "#edf3f8",
            }}
          >
            <div style={{ flex: "1", position: "relative", opacity: "0.8" }}>
              No more manual searches, no more settling for less. With Golden,
              every candidate is a potential gem, waiting to be discovered.
            </div>
          </div>
        </div>
        <img
          style={{
            position: "relative",
            width: "58.88rem",
            height: "40.63rem",
          }}
          alt=""
          src="/frame-37254.svg"
        />
      </div>
    </div>
  );
};

export default SignUp;
