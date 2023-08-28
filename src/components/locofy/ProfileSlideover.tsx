import { FunctionComponent, useState, useCallback, useEffect } from "react";
import { Button as MuiButton } from "@mui/material";
import ModalFeetback from "./ModalFeetback";
import PortalPopup from "./PortalPopup";
import Education from "./Education";

type ProfileSlideoverType = {
  onClose?: () => void;
};

const ProfileSlideover: FunctionComponent<ProfileSlideoverType> = ({
  onClose,
}) => {
  const [isModalFeetbackPopupOpen, setModalFeetbackPopupOpen] = useState(false);
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const openModalFeetbackPopup = useCallback(() => {
    setModalFeetbackPopupOpen(true);
  }, []);

  const closeModalFeetbackPopup = useCallback(() => {
    setModalFeetbackPopupOpen(false);
  }, []);

  return (
    <>
      <div
        style={{
          position: "relative",
          borderRadius: "8px 0px 0px 8px",
          backgroundColor: "#fff",
          boxShadow: "0px 32px 64px -12px rgba(16, 24, 40, 0.14)",
          borderBottom: "1px solid #d1d5db",
          boxSizing: "border-box",
          width: "750px",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          padding: "24px 32px 44px",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "16px",
          opacity: "0",
          height: "100%",
          maxWidth: "90%",
          overflow: "auto",
        }}
        data-animate-on-scroll
      >
        <header
          style={{
            alignSelf: "stretch",
            borderBottom: "2px solid #ededed",
            display: "flex",
            flexDirection: "row",
            padding: "0px 0px 16px",
            alignItems: "center",
            justifyContent: "space-between",
            textAlign: "left",
            fontSize: "20px",
            color: "#191919",
            fontFamily: "'Noto Sans'",
          }}
        >
          <h3
            style={{
              margin: "0",
              flex: "1",
              position: "relative",
              fontSize: "inherit",
              fontWeight: "600",
              fontFamily: "inherit",
              color: "inherit",
            }}
          >
            Product Team Lead for Techify
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "24px",
              fontSize: "14px",
              color: "#7f7f7f",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "16px",
              }}
            >
              <MuiButton sx={{ width: 32 }} variant="text" color="primary" />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    letterSpacing: "0.02em",
                    lineHeight: "140%",
                    fontWeight: "500",
                  }}
                >
                  1
                </div>
                <div
                  style={{
                    position: "relative",
                    letterSpacing: "0.02em",
                    lineHeight: "140%",
                    fontWeight: "500",
                  }}
                >{`of `}</div>
                <div
                  style={{
                    position: "relative",
                    letterSpacing: "0.02em",
                    lineHeight: "140%",
                    fontWeight: "500",
                  }}
                >
                  67
                </div>
              </div>
              <MuiButton sx={{ width: 32 }} variant="text" color="primary" />
            </div>
            <MuiButton sx={{ width: 32 }} variant="text" color="primary" />
          </div>
        </header>
        <main
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "32px",
            textAlign: "left",
            fontSize: "20px",
            color: "#191919",
            fontFamily: "'Noto Sans'",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "12px",
              fontSize: "24px",
            }}
          >
            <img
              style={{
                borderRadius: "6px",
                width: "200px",
                height: "200px",
                objectFit: "cover",
              }}
              alt=""
              src="/avatar3@2x.png"
            />
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "8px",
                }}
              >
                <h2
                  style={{
                    margin: "0",
                    position: "relative",
                    fontSize: "inherit",
                    fontWeight: "600",
                    fontFamily: "inherit",
                    color: "inherit",
                  }}
                >
                  Yoss Maman
                </h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "4px",
                    fontSize: "16px",
                  }}
                >
                  <p style={{ margin: "0", position: "relative" }}>
                    14 years in industry
                  </p>
                  <p
                    style={{ margin: "0", position: "relative", color: "#666" }}
                  >
                    UX/UI to Head of Product at Wix.com
                  </p>
                </div>
              </div>
              <div
                style={{
                  height: "53px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "5px",
                  fontSize: "14px",
                  color: "#666",
                }}
              >
                <p style={{ margin: "0", position: "relative" }}>
                  Tel Aviv, Israel
                </p>
                <div
                  style={{
                    position: "relative",
                    borderRadius: "100px",
                    backgroundColor: "#7f7f7f",
                    width: "2px",
                    height: "2px",
                  }}
                />
                <a
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "4px",
                    color: "#0a66c2",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "4px",
                      backgroundColor: "#edf3f8",
                      display: "flex",
                      flexDirection: "row",
                      padding: "4px",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <img
                      style={{
                        position: "relative",
                        width: "12px",
                        height: "12px",
                        overflow: "hidden",
                        flexShrink: "0",
                      }}
                      alt=""
                      src="/icons10.svg"
                    />
                  </div>
                  <div style={{ position: "relative", fontWeight: "600" }}>
                    Public profile
                  </div>
                </a>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                <MuiButton variant="contained" color="primary">
                  Good
                </MuiButton>
                <MuiButton variant="contained" color="primary">
                  Not Sure
                </MuiButton>
                <MuiButton
                  style={{ cursor: "pointer" }}
                  variant="contained"
                  color="primary"
                  onClick={openModalFeetbackPopup}
                >
                  Not Good
                </MuiButton>
              </div>
            </div>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              borderBottom: "1px solid #ededed",
              display: "flex",
              flexDirection: "column",
              padding: "0px 0px 16px",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "8px",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                position: "relative",
                fontWeight: "600",
              }}
            >
              Summary
            </div>
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "16px",
                fontSize: "14px",
                color: "#666",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  position: "relative",
                  display: "-webkit-inline-box",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  WebkitLineClamp: "32",
                  WebkitBoxOrient: "vertical",
                }}
              >
                I'm a passionate, down to earth "can do" person with a good
                attitude and great people skills. I love shaping products
                vision, fine tuning small details, without losing sight of the
                big picture. I believe my creativity, dedication to UX and a
                good eye for details is the key for creating products that are
                smart, intuitive that makes an impact.
              </div>
              <MuiButton variant="text" color="primary">
                Show more of summary
              </MuiButton>
            </div>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              borderBottom: "1px solid #cbd5e1",
              display: "flex",
              flexDirection: "column",
              padding: "0px 0px 16px",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "24px",
            }}
          >
            <h3
              style={{
                margin: "0",
                alignSelf: "stretch",
                flex: "1",
                position: "relative",
                fontSize: "inherit",
                fontWeight: "600",
                fontFamily: "inherit",
                color: "inherit",
              }}
            >{`Experience `}</h3>
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                fontSize: "16px",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      height: "95px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: "6px",
                    }}
                  >
                    <div
                      style={{
                        alignSelf: "stretch",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "8px",
                      }}
                    >
                      <img
                        style={{
                          borderRadius: "2px",
                          width: "48px",
                          height: "48px",
                          objectFit: "cover",
                        }}
                        alt=""
                        src="/frame-37249@3x.png"
                      />
                      <div
                        style={{
                          flex: "1",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          gap: "8px",
                        }}
                      >
                        <b style={{ position: "relative", fontWeight: "600" }}>
                          Wix.com
                        </b>
                        <div style={{ position: "relative", fontSize: "14px" }}>
                          3 yrs 2 mos at the company
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "8px",
                        fontSize: "14px",
                        color: "#666",
                      }}
                    >
                      <div
                        style={{
                          alignSelf: "stretch",
                          width: "48px",
                          display: "flex",
                          flexDirection: "row",
                          padding: "0px 13px",
                          boxSizing: "border-box",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          style={{
                            alignSelf: "stretch",
                            position: "relative",
                            maxHeight: "100%",
                            width: "1px",
                          }}
                          alt=""
                          src="/vector-3.svg"
                        />
                      </div>
                      <div
                        style={{
                          flex: "1",
                          display: "flex",
                          flexDirection: "row",
                          padding: "2px 0px 0px",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                        }}
                      >
                        <p
                          style={{
                            margin: "0",
                            flex: "1",
                            position: "relative",
                          }}
                        >
                          Company Info: 6,874 employees · public · IPO 2013 ·
                          Website builder software
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      alignSelf: "stretch",
                      display: "flex",
                      flexDirection: "column",
                      padding: "0px 0px 0px 11px",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        alignSelf: "stretch",
                        borderRadius: "2px",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "6px",
                        fontSize: "14px",
                        color: "#666",
                      }}
                    >
                      <header
                        style={{
                          alignSelf: "stretch",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          gap: "2px",
                          textAlign: "left",
                          fontSize: "16px",
                          color: "#191919",
                          fontFamily: "'Noto Sans'",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            padding: "4px 10px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              borderRadius: "50%",
                              backgroundColor: "#b2b2b2",
                              border: "2px solid #ededed",
                              boxSizing: "border-box",
                              width: "10px",
                              height: "10px",
                            }}
                          />
                        </div>
                        <b
                          style={{
                            flex: "1",
                            position: "relative",
                            fontWeight: "600",
                          }}
                        >
                          Head of Product
                        </b>
                      </header>
                      <div
                        style={{
                          alignSelf: "stretch",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          gap: "2px",
                        }}
                      >
                        <div
                          style={{
                            alignSelf: "stretch",
                            display: "flex",
                            flexDirection: "row",
                            padding: "0px 13px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                          }}
                        >
                          <img
                            style={{
                              alignSelf: "stretch",
                              position: "relative",
                              maxHeight: "100%",
                              width: "1px",
                            }}
                            alt=""
                            src="/vector-31.svg"
                          />
                        </div>
                        <div
                          style={{
                            flex: "1",
                            display: "flex",
                            flexDirection: "column",
                            padding: "0px 0px 16px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            gap: "16px",
                          }}
                        >
                          <div
                            style={{
                              alignSelf: "stretch",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              gap: "4px",
                            }}
                          >
                            <div
                              style={{
                                alignSelf: "stretch",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  alignSelf: "stretch",
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                  justifyContent: "flex-start",
                                  gap: "4px",
                                }}
                              >
                                <div
                                  style={{ position: "relative" }}
                                >{`Sep 2022 - Present `}</div>
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#b2b2b2",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                                <div
                                  style={{ flex: "1", position: "relative" }}
                                >
                                  1 yr
                                </div>
                              </div>
                            </div>
                            <div
                              style={{
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                width: "170px",
                              }}
                            >
                              Israel
                            </div>
                          </div>
                          <div
                            style={{
                              alignSelf: "stretch",
                              display: "none",
                              flexDirection: "row",
                              flexWrap: "wrap",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              gap: "8px",
                              color: "#191919",
                            }}
                          >
                            <div
                              style={{
                                width: "600px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div style={{ flex: "1", position: "relative" }}>
                                Teachers, counselors and coaches get more
                                clients by creating an impressive digital
                                identity.
                              </div>
                            </div>
                            <div
                              style={{
                                width: "600px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div
                                style={{ flex: "1", position: "relative" }}
                              >{`Entrepreneurs gain more exposure through organic and sponsored promotion. `}</div>
                            </div>
                            <div
                              style={{
                                width: "600px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div style={{ flex: "1", position: "relative" }}>
                                Employees and the self-employed get out of the
                                rat race by running a digital independent
                                business.
                              </div>
                            </div>
                            <div
                              style={{
                                width: "600px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div style={{ flex: "1", position: "relative" }}>
                                Designers who need to generate more revenue by
                                selling digital websites and assets to
                                customers.
                              </div>
                            </div>
                            <div
                              style={{
                                width: "600px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div
                                style={{ flex: "1", position: "relative" }}
                              >{`We help store owners sell more through the network. `}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        borderRadius: "2px",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "6px",
                      }}
                    >
                      <div
                        style={{
                          alignSelf: "stretch",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          gap: "2px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            padding: "4px 10px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              borderRadius: "50%",
                              backgroundColor: "#b2b2b2",
                              border: "2px solid #ededed",
                              boxSizing: "border-box",
                              width: "10px",
                              height: "10px",
                            }}
                          />
                        </div>
                        <b
                          style={{
                            flex: "1",
                            position: "relative",
                            fontWeight: "600",
                          }}
                        >
                          Product Team Lead
                        </b>
                      </div>
                      <div
                        style={{
                          alignSelf: "stretch",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          gap: "2px",
                          fontSize: "14px",
                          color: "#666",
                        }}
                      >
                        <div
                          style={{
                            alignSelf: "stretch",
                            display: "flex",
                            flexDirection: "row",
                            padding: "0px 13px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                          }}
                        >
                          <img
                            style={{
                              alignSelf: "stretch",
                              position: "relative",
                              maxHeight: "100%",
                              width: "1px",
                            }}
                            alt=""
                            src="/vector-31.svg"
                          />
                        </div>
                        <div
                          style={{
                            flex: "1",
                            display: "flex",
                            flexDirection: "column",
                            padding: "0px 0px 16px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            gap: "16px",
                          }}
                        >
                          <div
                            style={{
                              alignSelf: "stretch",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              gap: "4px",
                            }}
                          >
                            <div
                              style={{
                                alignSelf: "stretch",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  alignSelf: "stretch",
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                  justifyContent: "flex-start",
                                  gap: "4px",
                                }}
                              >
                                <div style={{ position: "relative" }}>
                                  Mar 2021 - Present
                                </div>
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#b2b2b2",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                                <div
                                  style={{ flex: "1", position: "relative" }}
                                >
                                  2 yrs 6 mos
                                </div>
                              </div>
                            </div>
                            <div style={{ position: "relative" }}>
                              Tel-Aviv, Israel
                            </div>
                          </div>
                          <div
                            style={{
                              alignSelf: "stretch",
                              display: "none",
                              flexDirection: "row",
                              flexWrap: "wrap",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              gap: "8px",
                              color: "#191919",
                            }}
                          >
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div style={{ flex: "1", position: "relative" }}>
                                Teachers, counselors and coaches get more
                                clients by creating an impressive digital
                                identity.
                              </div>
                            </div>
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div
                                style={{ flex: "1", position: "relative" }}
                              >{`Entrepreneurs gain more exposure through organic and sponsored promotion. `}</div>
                            </div>
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div style={{ flex: "1", position: "relative" }}>
                                Employees and the self-employed get out of the
                                rat race by running a digital independent
                                business.
                              </div>
                            </div>
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div style={{ flex: "1", position: "relative" }}>
                                Designers who need to generate more revenue by
                                selling digital websites and assets to
                                customers.
                              </div>
                            </div>
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div
                                style={{ flex: "1", position: "relative" }}
                              >{`We help store owners sell more through the network. `}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        borderRadius: "2px",
                        overflow: "hidden",
                        display: "none",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "6px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          gap: "2px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            padding: "4px 10px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              borderRadius: "50%",
                              backgroundColor: "#b2b2b2",
                              border: "2px solid #ededed",
                              boxSizing: "border-box",
                              width: "10px",
                              height: "10px",
                            }}
                          />
                        </div>
                        <div
                          style={{ position: "relative", fontWeight: "600" }}
                        >
                          Emerging Technologies Specialist
                        </div>
                      </div>
                      <div
                        style={{
                          alignSelf: "stretch",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          gap: "2px",
                          fontSize: "14px",
                          color: "#666",
                        }}
                      >
                        <div
                          style={{
                            alignSelf: "stretch",
                            display: "flex",
                            flexDirection: "row",
                            padding: "0px 13px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                          }}
                        >
                          <img
                            style={{
                              alignSelf: "stretch",
                              position: "relative",
                              maxHeight: "100%",
                              width: "0px",
                            }}
                            alt=""
                            src="/vector-31.svg"
                          />
                        </div>
                        <div
                          style={{
                            flex: "1",
                            display: "flex",
                            flexDirection: "column",
                            padding: "0px 0px 16px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            gap: "16px",
                          }}
                        >
                          <div
                            style={{
                              alignSelf: "stretch",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              gap: "4px",
                            }}
                          >
                            <div
                              style={{
                                alignSelf: "stretch",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  alignSelf: "stretch",
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                  justifyContent: "flex-start",
                                  gap: "4px",
                                }}
                              >
                                <div style={{ position: "relative" }}>
                                  May 2020 - Aug 2022
                                </div>
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#b2b2b2",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                                <div
                                  style={{ flex: "1", position: "relative" }}
                                >
                                  2 years
                                </div>
                              </div>
                            </div>
                            <div style={{ position: "relative" }}>
                              South District, Beer Sheva
                            </div>
                          </div>
                          <div
                            style={{
                              alignSelf: "stretch",
                              display: "none",
                              flexDirection: "row",
                              flexWrap: "wrap",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              gap: "8px",
                              color: "#191919",
                            }}
                          >
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div style={{ flex: "1", position: "relative" }}>
                                Teachers, counselors and coaches get more
                                clients by creating an impressive digital
                                identity.
                              </div>
                            </div>
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div
                                style={{ flex: "1", position: "relative" }}
                              >{`Entrepreneurs gain more exposure through organic and sponsored promotion. `}</div>
                            </div>
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div style={{ flex: "1", position: "relative" }}>
                                Employees and the self-employed get out of the
                                rat race by running a digital independent
                                business.
                              </div>
                            </div>
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div style={{ flex: "1", position: "relative" }}>
                                Designers who need to generate more revenue by
                                selling digital websites and assets to
                                customers.
                              </div>
                            </div>
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div
                                style={{ flex: "1", position: "relative" }}
                              >{`We help store owners sell more through the network. `}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        borderRadius: "2px",
                        overflow: "hidden",
                        display: "none",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "6px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          gap: "2px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            padding: "4px 10px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              borderRadius: "50%",
                              backgroundColor: "#b2b2b2",
                              border: "2px solid #ededed",
                              boxSizing: "border-box",
                              width: "10px",
                              height: "10px",
                            }}
                          />
                        </div>
                        <div
                          style={{ position: "relative", fontWeight: "600" }}
                        >
                          Emerging Technologies Specialist
                        </div>
                      </div>
                      <div
                        style={{
                          alignSelf: "stretch",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          gap: "2px",
                          fontSize: "14px",
                          color: "#666",
                        }}
                      >
                        <div
                          style={{
                            alignSelf: "stretch",
                            display: "flex",
                            flexDirection: "row",
                            padding: "0px 13px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                          }}
                        >
                          <img
                            style={{
                              alignSelf: "stretch",
                              position: "relative",
                              maxHeight: "100%",
                              width: "0px",
                            }}
                            alt=""
                            src="/vector-31.svg"
                          />
                        </div>
                        <div
                          style={{
                            flex: "1",
                            display: "flex",
                            flexDirection: "column",
                            padding: "0px 0px 16px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            gap: "16px",
                          }}
                        >
                          <div
                            style={{
                              alignSelf: "stretch",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              gap: "4px",
                            }}
                          >
                            <div
                              style={{
                                alignSelf: "stretch",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  alignSelf: "stretch",
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                  justifyContent: "flex-start",
                                  gap: "4px",
                                }}
                              >
                                <div style={{ position: "relative" }}>
                                  May 2020 - Aug 2022
                                </div>
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#b2b2b2",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                                <div
                                  style={{ flex: "1", position: "relative" }}
                                >
                                  2 years
                                </div>
                              </div>
                            </div>
                            <div style={{ position: "relative" }}>
                              South District, Beer Sheva
                            </div>
                          </div>
                          <div
                            style={{
                              alignSelf: "stretch",
                              display: "none",
                              flexDirection: "row",
                              flexWrap: "wrap",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              gap: "8px",
                              color: "#191919",
                            }}
                          >
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div style={{ flex: "1", position: "relative" }}>
                                Teachers, counselors and coaches get more
                                clients by creating an impressive digital
                                identity.
                              </div>
                            </div>
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div
                                style={{ flex: "1", position: "relative" }}
                              >{`Entrepreneurs gain more exposure through organic and sponsored promotion. `}</div>
                            </div>
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div style={{ flex: "1", position: "relative" }}>
                                Employees and the self-employed get out of the
                                rat race by running a digital independent
                                business.
                              </div>
                            </div>
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div style={{ flex: "1", position: "relative" }}>
                                Designers who need to generate more revenue by
                                selling digital websites and assets to
                                customers.
                              </div>
                            </div>
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div
                                style={{ flex: "1", position: "relative" }}
                              >{`We help store owners sell more through the network. `}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        borderRadius: "2px",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "6px",
                      }}
                    >
                      <div
                        style={{
                          alignSelf: "stretch",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          gap: "2px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            padding: "4px 10px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              borderRadius: "50%",
                              backgroundColor: "#b2b2b2",
                              border: "2px solid #ededed",
                              boxSizing: "border-box",
                              width: "10px",
                              height: "10px",
                            }}
                          />
                        </div>
                        <b
                          style={{
                            flex: "1",
                            position: "relative",
                            fontWeight: "600",
                          }}
                        >
                          Product Manager
                        </b>
                      </div>
                      <div
                        style={{
                          alignSelf: "stretch",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          gap: "2px",
                          fontSize: "14px",
                          color: "#666",
                        }}
                      >
                        <div
                          style={{
                            alignSelf: "stretch",
                            display: "flex",
                            flexDirection: "row",
                            padding: "0px 13px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                          }}
                        >
                          <img
                            style={{
                              alignSelf: "stretch",
                              position: "relative",
                              maxHeight: "100%",
                              width: "0px",
                              display: "none",
                            }}
                            alt=""
                            src="/vector-31.svg"
                          />
                        </div>
                        <div
                          style={{
                            flex: "1",
                            display: "flex",
                            flexDirection: "column",
                            padding: "0px 0px 16px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            gap: "16px",
                          }}
                        >
                          <div
                            style={{
                              alignSelf: "stretch",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              gap: "4px",
                            }}
                          >
                            <div
                              style={{
                                alignSelf: "stretch",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  alignSelf: "stretch",
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                  justifyContent: "flex-start",
                                  gap: "4px",
                                }}
                              >
                                <div style={{ position: "relative" }}>
                                  Jul 2020 - Present
                                </div>
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#b2b2b2",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                                <div
                                  style={{ flex: "1", position: "relative" }}
                                >
                                  3 yrs 2 mos
                                </div>
                              </div>
                            </div>
                            <div style={{ position: "relative" }}>
                              Tel-Aviv, Israel
                            </div>
                          </div>
                          <div
                            style={{
                              alignSelf: "stretch",
                              display: "none",
                              flexDirection: "row",
                              flexWrap: "wrap",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              gap: "8px",
                              color: "#191919",
                            }}
                          >
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div style={{ flex: "1", position: "relative" }}>
                                Teachers, counselors and coaches get more
                                clients by creating an impressive digital
                                identity.
                              </div>
                            </div>
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div
                                style={{ flex: "1", position: "relative" }}
                              >{`Entrepreneurs gain more exposure through organic and sponsored promotion. `}</div>
                            </div>
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div style={{ flex: "1", position: "relative" }}>
                                Employees and the self-employed get out of the
                                rat race by running a digital independent
                                business.
                              </div>
                            </div>
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div style={{ flex: "1", position: "relative" }}>
                                Designers who need to generate more revenue by
                                selling digital websites and assets to
                                customers.
                              </div>
                            </div>
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div
                                style={{ flex: "1", position: "relative" }}
                              >{`We help store owners sell more through the network. `}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: "6px",
                    }}
                  >
                    <div
                      style={{
                        alignSelf: "stretch",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "8px",
                      }}
                    >
                      <img
                        style={{
                          borderRadius: "2px",
                          width: "48px",
                          height: "48px",
                          objectFit: "cover",
                        }}
                        alt=""
                        src="/container@2x.png"
                      />
                      <div
                        style={{
                          flex: "1",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          gap: "8px",
                        }}
                      >
                        <b style={{ position: "relative", fontWeight: "600" }}>
                          Pepper
                        </b>
                        <div style={{ position: "relative", fontSize: "14px" }}>
                          3 yrs 2 mos at the company
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "8px",
                        fontSize: "14px",
                        color: "#666",
                      }}
                    >
                      <div
                        style={{
                          alignSelf: "stretch",
                          width: "48px",
                          display: "flex",
                          flexDirection: "row",
                          padding: "0px 13px",
                          boxSizing: "border-box",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          style={{
                            alignSelf: "stretch",
                            position: "relative",
                            maxHeight: "100%",
                            width: "1px",
                          }}
                          alt=""
                          src="/vector-32.svg"
                        />
                      </div>
                      <div
                        style={{
                          flex: "1",
                          display: "flex",
                          flexDirection: "row",
                          padding: "2px 0px 0px",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                        }}
                      >
                        <p
                          style={{
                            margin: "0",
                            flex: "1",
                            position: "relative",
                          }}
                        >
                          Company info: 109 employees · mobile-only banking
                          platform · Created by Bank Leumi as sub-organization
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      alignSelf: "stretch",
                      display: "flex",
                      flexDirection: "column",
                      padding: "0px 0px 0px 11px",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        alignSelf: "stretch",
                        borderRadius: "2px",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "6px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          gap: "2px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            padding: "4px 10px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              borderRadius: "50%",
                              backgroundColor: "#b2b2b2",
                              border: "2px solid #ededed",
                              boxSizing: "border-box",
                              width: "10px",
                              height: "10px",
                            }}
                          />
                        </div>
                        <b style={{ position: "relative", fontWeight: "600" }}>
                          Senior Product Manager
                        </b>
                      </div>
                      <div
                        style={{
                          alignSelf: "stretch",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          gap: "2px",
                          fontSize: "14px",
                          color: "#666",
                        }}
                      >
                        <div
                          style={{
                            alignSelf: "stretch",
                            display: "flex",
                            flexDirection: "row",
                            padding: "0px 13px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                          }}
                        >
                          <img
                            style={{
                              alignSelf: "stretch",
                              position: "relative",
                              maxHeight: "100%",
                              width: "0px",
                              display: "none",
                            }}
                            alt=""
                            src="/vector-33.svg"
                          />
                        </div>
                        <div
                          style={{
                            flex: "1",
                            display: "flex",
                            flexDirection: "column",
                            padding: "0px 0px 16px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            gap: "16px",
                          }}
                        >
                          <div
                            style={{
                              alignSelf: "stretch",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              gap: "4px",
                            }}
                          >
                            <div
                              style={{
                                alignSelf: "stretch",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  alignSelf: "stretch",
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                  justifyContent: "flex-start",
                                  gap: "4px",
                                }}
                              >
                                <div style={{ position: "relative" }}>
                                  Jun 2017 - Jul 2020
                                </div>
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#b2b2b2",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                                <div
                                  style={{ flex: "1", position: "relative" }}
                                >
                                  3 yrs 2 mos
                                </div>
                              </div>
                            </div>
                            <div
                              style={{
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                width: "170px",
                              }}
                            >
                              Tel Aviv, Israel
                            </div>
                          </div>
                          <div
                            style={{
                              alignSelf: "stretch",
                              display: "flex",
                              flexDirection: "row",
                              flexWrap: "wrap",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              gap: "8px",
                              color: "#191919",
                            }}
                          >
                            <div
                              style={{
                                width: "600px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div
                                style={{ flex: "1", position: "relative" }}
                              >{`Owner of customer communication & support within Pepper. In charge of the roadmap and product lifecycle. Analyzing and identifying users difficulties while using the app and composing product solutions accordingly.• Building solutions for product and customers growth since customer no.1 during the exponential growth of users and capabilities.`}</div>
                            </div>
                            <div
                              style={{
                                width: "600px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div style={{ flex: "1", position: "relative" }}>
                                Collaborate with 3 engineering teams to plan
                                sprints, develop the backlog, create requirement
                                and user stories. Working closely with all
                                relevant cross-functional teams to guide
                                products through development to production with
                                deep attention to design, marketing and support.
                              </div>
                            </div>
                            <div
                              style={{
                                width: "600px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div style={{ flex: "1", position: "relative" }}>
                                Driven by data-and Managing a set of conversions
                                and use metrics and KPI's that directly tie the
                                product performance to overall company goals.
                              </div>
                            </div>
                            <div
                              style={{
                                width: "600px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div style={{ flex: "1", position: "relative" }}>
                                Built a new in-app secure chat with pre-chat
                                bot. Reducing agent chats by 48%, calls by 40%
                                and agent handling time by 32%. Improving agent
                                response time to reduce user wait time.
                              </div>
                            </div>
                            <div
                              style={{
                                width: "600px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div style={{ flex: "1", position: "relative" }}>
                                Produced and optimized FE features such as new
                                banking product, improving user funnel to reduce
                                drops, optimizing Login security, identification
                                and self-service problem solving. Characterized
                                and built a unique customized Salesforce CRM for
                                supporting over 800,000 users, giving the
                                support agents full customer view, financial
                                details, video and chat ability to make handling
                                time efficient.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        borderRadius: "2px",
                        overflow: "hidden",
                        display: "none",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "6px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          gap: "2px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            padding: "4px 10px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              borderRadius: "50%",
                              backgroundColor: "#b2b2b2",
                              border: "2px solid #ededed",
                              boxSizing: "border-box",
                              width: "10px",
                              height: "10px",
                            }}
                          />
                        </div>
                        <div
                          style={{ position: "relative", fontWeight: "600" }}
                        >
                          Product Manager
                        </div>
                      </div>
                      <div
                        style={{
                          alignSelf: "stretch",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          gap: "2px",
                          fontSize: "14px",
                          color: "#666",
                        }}
                      >
                        <div
                          style={{
                            alignSelf: "stretch",
                            display: "flex",
                            flexDirection: "row",
                            padding: "0px 13px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                          }}
                        >
                          <img
                            style={{
                              alignSelf: "stretch",
                              position: "relative",
                              maxHeight: "100%",
                              width: "0px",
                              opacity: "0",
                            }}
                            alt=""
                            src="/vector-34.svg"
                          />
                        </div>
                        <div
                          style={{
                            flex: "1",
                            display: "flex",
                            flexDirection: "column",
                            padding: "0px 0px 16px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            gap: "16px",
                          }}
                        >
                          <div
                            style={{
                              alignSelf: "stretch",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              gap: "4px",
                            }}
                          >
                            <div
                              style={{
                                alignSelf: "stretch",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  alignSelf: "stretch",
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                  justifyContent: "flex-start",
                                  gap: "4px",
                                }}
                              >
                                <div style={{ position: "relative" }}>
                                  May 2020 - Jun 2022
                                </div>
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#b2b2b2",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                                <div
                                  style={{ flex: "1", position: "relative" }}
                                >
                                  2 years
                                </div>
                              </div>
                            </div>
                            <div style={{ position: "relative" }}>
                              Tel Aviv, Israel
                            </div>
                          </div>
                          <div
                            style={{
                              alignSelf: "stretch",
                              display: "none",
                              flexDirection: "row",
                              flexWrap: "wrap",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              gap: "8px",
                              color: "#191919",
                            }}
                          >
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div style={{ flex: "1", position: "relative" }}>
                                Teachers, counselors and coaches get more
                                clients by creating an impressive digital
                                identity.
                              </div>
                            </div>
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div
                                style={{ flex: "1", position: "relative" }}
                              >{`Entrepreneurs gain more exposure through organic and sponsored promotion. `}</div>
                            </div>
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div style={{ flex: "1", position: "relative" }}>
                                Employees and the self-employed get out of the
                                rat race by running a digital independent
                                business.
                              </div>
                            </div>
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div style={{ flex: "1", position: "relative" }}>
                                Designers who need to generate more revenue by
                                selling digital websites and assets to
                                customers.
                              </div>
                            </div>
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div
                                style={{ flex: "1", position: "relative" }}
                              >{`We help store owners sell more through the network. `}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        borderRadius: "2px",
                        overflow: "hidden",
                        display: "none",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "6px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          gap: "2px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            padding: "4px 10px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              borderRadius: "50%",
                              backgroundColor: "#b2b2b2",
                              border: "2px solid #ededed",
                              boxSizing: "border-box",
                              width: "10px",
                              height: "10px",
                            }}
                          />
                        </div>
                        <div
                          style={{ position: "relative", fontWeight: "600" }}
                        >
                          Emerging Technologies Specialist
                        </div>
                      </div>
                      <div
                        style={{
                          alignSelf: "stretch",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          gap: "2px",
                          fontSize: "14px",
                          color: "#666",
                        }}
                      >
                        <div
                          style={{
                            alignSelf: "stretch",
                            display: "flex",
                            flexDirection: "row",
                            padding: "0px 13px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                          }}
                        >
                          <img
                            style={{
                              alignSelf: "stretch",
                              position: "relative",
                              maxHeight: "100%",
                              width: "0px",
                            }}
                            alt=""
                            src="/vector-31.svg"
                          />
                        </div>
                        <div
                          style={{
                            flex: "1",
                            display: "flex",
                            flexDirection: "column",
                            padding: "0px 0px 16px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            gap: "16px",
                          }}
                        >
                          <div
                            style={{
                              alignSelf: "stretch",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              gap: "4px",
                            }}
                          >
                            <div
                              style={{
                                alignSelf: "stretch",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  alignSelf: "stretch",
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                  justifyContent: "flex-start",
                                  gap: "4px",
                                }}
                              >
                                <div style={{ position: "relative" }}>
                                  May 2020 - Aug 2022
                                </div>
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#b2b2b2",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                                <div
                                  style={{ flex: "1", position: "relative" }}
                                >
                                  2 years
                                </div>
                              </div>
                            </div>
                            <div style={{ position: "relative" }}>
                              South District, Beer Sheva
                            </div>
                          </div>
                          <div
                            style={{
                              alignSelf: "stretch",
                              display: "none",
                              flexDirection: "row",
                              flexWrap: "wrap",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              gap: "8px",
                              color: "#191919",
                            }}
                          >
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div style={{ flex: "1", position: "relative" }}>
                                Teachers, counselors and coaches get more
                                clients by creating an impressive digital
                                identity.
                              </div>
                            </div>
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div
                                style={{ flex: "1", position: "relative" }}
                              >{`Entrepreneurs gain more exposure through organic and sponsored promotion. `}</div>
                            </div>
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div style={{ flex: "1", position: "relative" }}>
                                Employees and the self-employed get out of the
                                rat race by running a digital independent
                                business.
                              </div>
                            </div>
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div style={{ flex: "1", position: "relative" }}>
                                Designers who need to generate more revenue by
                                selling digital websites and assets to
                                customers.
                              </div>
                            </div>
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div
                                style={{ flex: "1", position: "relative" }}
                              >{`We help store owners sell more through the network. `}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        borderRadius: "2px",
                        overflow: "hidden",
                        display: "none",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "6px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          gap: "2px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            padding: "4px 10px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              borderRadius: "50%",
                              backgroundColor: "#b2b2b2",
                              border: "2px solid #ededed",
                              boxSizing: "border-box",
                              width: "10px",
                              height: "10px",
                            }}
                          />
                        </div>
                        <div
                          style={{ position: "relative", fontWeight: "600" }}
                        >
                          Emerging Technologies Specialist
                        </div>
                      </div>
                      <div
                        style={{
                          alignSelf: "stretch",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          gap: "2px",
                          fontSize: "14px",
                          color: "#666",
                        }}
                      >
                        <div
                          style={{
                            alignSelf: "stretch",
                            display: "flex",
                            flexDirection: "row",
                            padding: "0px 13px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                          }}
                        >
                          <img
                            style={{
                              alignSelf: "stretch",
                              position: "relative",
                              maxHeight: "100%",
                              width: "0px",
                            }}
                            alt=""
                            src="/vector-31.svg"
                          />
                        </div>
                        <div
                          style={{
                            flex: "1",
                            display: "flex",
                            flexDirection: "column",
                            padding: "0px 0px 16px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            gap: "16px",
                          }}
                        >
                          <div
                            style={{
                              alignSelf: "stretch",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              gap: "4px",
                            }}
                          >
                            <div
                              style={{
                                alignSelf: "stretch",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  alignSelf: "stretch",
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                  justifyContent: "flex-start",
                                  gap: "4px",
                                }}
                              >
                                <div style={{ position: "relative" }}>
                                  May 2020 - Aug 2022
                                </div>
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#b2b2b2",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                                <div
                                  style={{ flex: "1", position: "relative" }}
                                >
                                  2 years
                                </div>
                              </div>
                            </div>
                            <div style={{ position: "relative" }}>
                              South District, Beer Sheva
                            </div>
                          </div>
                          <div
                            style={{
                              alignSelf: "stretch",
                              display: "none",
                              flexDirection: "row",
                              flexWrap: "wrap",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              gap: "8px",
                              color: "#191919",
                            }}
                          >
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div style={{ flex: "1", position: "relative" }}>
                                Teachers, counselors and coaches get more
                                clients by creating an impressive digital
                                identity.
                              </div>
                            </div>
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div
                                style={{ flex: "1", position: "relative" }}
                              >{`Entrepreneurs gain more exposure through organic and sponsored promotion. `}</div>
                            </div>
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div style={{ flex: "1", position: "relative" }}>
                                Employees and the self-employed get out of the
                                rat race by running a digital independent
                                business.
                              </div>
                            </div>
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div style={{ flex: "1", position: "relative" }}>
                                Designers who need to generate more revenue by
                                selling digital websites and assets to
                                customers.
                              </div>
                            </div>
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div
                                style={{ flex: "1", position: "relative" }}
                              >{`We help store owners sell more through the network. `}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        borderRadius: "2px",
                        overflow: "hidden",
                        display: "none",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "6px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          gap: "2px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            padding: "4px 10px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              borderRadius: "50%",
                              backgroundColor: "#b2b2b2",
                              border: "2px solid #ededed",
                              boxSizing: "border-box",
                              width: "10px",
                              height: "10px",
                            }}
                          />
                        </div>
                        <div
                          style={{ position: "relative", fontWeight: "600" }}
                        >
                          Emerging Technologies Specialist
                        </div>
                      </div>
                      <div
                        style={{
                          alignSelf: "stretch",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          gap: "2px",
                          fontSize: "14px",
                          color: "#666",
                        }}
                      >
                        <div
                          style={{
                            alignSelf: "stretch",
                            display: "flex",
                            flexDirection: "row",
                            padding: "0px 13px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                          }}
                        >
                          <img
                            style={{
                              alignSelf: "stretch",
                              position: "relative",
                              maxHeight: "100%",
                              width: "0px",
                            }}
                            alt=""
                            src="/vector-31.svg"
                          />
                        </div>
                        <div
                          style={{
                            flex: "1",
                            display: "flex",
                            flexDirection: "column",
                            padding: "0px 0px 16px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            gap: "16px",
                          }}
                        >
                          <div
                            style={{
                              alignSelf: "stretch",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              gap: "4px",
                            }}
                          >
                            <div
                              style={{
                                alignSelf: "stretch",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  alignSelf: "stretch",
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                  justifyContent: "flex-start",
                                  gap: "4px",
                                }}
                              >
                                <div style={{ position: "relative" }}>
                                  May 2020 - Aug 2022
                                </div>
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#b2b2b2",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                                <div
                                  style={{ flex: "1", position: "relative" }}
                                >
                                  2 years
                                </div>
                              </div>
                            </div>
                            <div style={{ position: "relative" }}>
                              South District, Beer Sheva
                            </div>
                          </div>
                          <div
                            style={{
                              alignSelf: "stretch",
                              display: "none",
                              flexDirection: "row",
                              flexWrap: "wrap",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              gap: "8px",
                              color: "#191919",
                            }}
                          >
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div style={{ flex: "1", position: "relative" }}>
                                Teachers, counselors and coaches get more
                                clients by creating an impressive digital
                                identity.
                              </div>
                            </div>
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div
                                style={{ flex: "1", position: "relative" }}
                              >{`Entrepreneurs gain more exposure through organic and sponsored promotion. `}</div>
                            </div>
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div style={{ flex: "1", position: "relative" }}>
                                Employees and the self-employed get out of the
                                rat race by running a digital independent
                                business.
                              </div>
                            </div>
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div style={{ flex: "1", position: "relative" }}>
                                Designers who need to generate more revenue by
                                selling digital websites and assets to
                                customers.
                              </div>
                            </div>
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div
                                style={{ flex: "1", position: "relative" }}
                              >{`We help store owners sell more through the network. `}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: "6px",
                    }}
                  >
                    <div
                      style={{
                        alignSelf: "stretch",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "8px",
                      }}
                    >
                      <img
                        style={{
                          borderRadius: "2px",
                          width: "48px",
                          height: "48px",
                          objectFit: "cover",
                        }}
                        alt=""
                        src="/container1@2x.png"
                      />
                      <div
                        style={{
                          flex: "1",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          gap: "8px",
                        }}
                      >
                        <b style={{ position: "relative", fontWeight: "600" }}>
                          Bank Leumi בנק לאומי
                        </b>
                        <div style={{ position: "relative", fontSize: "14px" }}>
                          7 yrs 6 mos at the company
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "8px",
                        fontSize: "14px",
                        color: "#666",
                      }}
                    >
                      <div
                        style={{
                          alignSelf: "stretch",
                          width: "48px",
                          display: "flex",
                          flexDirection: "row",
                          padding: "0px 13px",
                          boxSizing: "border-box",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          style={{
                            alignSelf: "stretch",
                            position: "relative",
                            maxHeight: "100%",
                            width: "1px",
                          }}
                          alt=""
                          src="/vector-32.svg"
                        />
                      </div>
                      <div
                        style={{
                          flex: "1",
                          display: "flex",
                          flexDirection: "row",
                          padding: "2px 0px 0px",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                        }}
                      >
                        <p
                          style={{
                            margin: "0",
                            flex: "1",
                            position: "relative",
                          }}
                        >
                          Company Info: 10,000+ employees · Israel's leading
                          banking corporation, operating 268 branches.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      alignSelf: "stretch",
                      display: "flex",
                      flexDirection: "column",
                      padding: "0px 0px 0px 11px",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        alignSelf: "stretch",
                        borderRadius: "2px",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "6px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          gap: "2px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            padding: "4px 10px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              borderRadius: "50%",
                              backgroundColor: "#b2b2b2",
                              border: "2px solid #ededed",
                              boxSizing: "border-box",
                              width: "10px",
                              height: "10px",
                            }}
                          />
                        </div>
                        <b style={{ position: "relative", fontWeight: "600" }}>
                          Project Manager
                        </b>
                      </div>
                      <div
                        style={{
                          alignSelf: "stretch",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          gap: "2px",
                          fontSize: "14px",
                          color: "#666",
                        }}
                      >
                        <div
                          style={{
                            alignSelf: "stretch",
                            display: "flex",
                            flexDirection: "row",
                            padding: "0px 13px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                          }}
                        >
                          <img
                            style={{
                              alignSelf: "stretch",
                              position: "relative",
                              maxHeight: "100%",
                              width: "1px",
                            }}
                            alt=""
                            src="/vector-35.svg"
                          />
                        </div>
                        <div
                          style={{
                            flex: "1",
                            display: "flex",
                            flexDirection: "column",
                            padding: "0px 0px 16px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            gap: "16px",
                          }}
                        >
                          <div
                            style={{
                              alignSelf: "stretch",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              gap: "4px",
                            }}
                          >
                            <div
                              style={{
                                alignSelf: "stretch",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  alignSelf: "stretch",
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                  justifyContent: "flex-start",
                                  gap: "4px",
                                }}
                              >
                                <div style={{ position: "relative" }}>
                                  Apr 2014 - Jun 2017
                                </div>
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#b2b2b2",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                                <div
                                  style={{ flex: "1", position: "relative" }}
                                >
                                  3 yrs 3 mos
                                </div>
                              </div>
                            </div>
                            <div
                              style={{
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                width: "170px",
                              }}
                            >
                              Israel
                            </div>
                          </div>
                          <div
                            style={{
                              alignSelf: "stretch",
                              display: "flex",
                              flexDirection: "row",
                              flexWrap: "wrap",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              gap: "8px",
                              color: "#191919",
                            }}
                          >
                            <div
                              style={{
                                width: "600px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div style={{ flex: "1", position: "relative" }}>
                                CEO led digital project (ISRAEL.IL campaign) to
                                Increase customer use of digital channels by 15%
                                (3 years goal). Managing an annual budget and
                                collaborating with product and marketing.
                              </div>
                            </div>
                            <div
                              style={{
                                width: "600px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div style={{ flex: "1", position: "relative" }}>
                                Implementation of a Salesforce CRM throughout
                                the bank branches.
                              </div>
                            </div>
                            <div
                              style={{
                                width: "600px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div style={{ flex: "1", position: "relative" }}>
                                Put into practice a new customer service model
                                in retail branches (BCG consulting).
                              </div>
                            </div>
                            <div
                              style={{
                                width: "600px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div style={{ flex: "1", position: "relative" }}>
                                Closing and merging 50 bank branches (Deloitte
                                consulting).
                              </div>
                            </div>
                            <div
                              style={{
                                width: "600px",
                                display: "none",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div
                                style={{ flex: "1", position: "relative" }}
                              >{`We help store owners sell more through the network. `}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        borderRadius: "2px",
                        overflow: "hidden",
                        display: "none",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "6px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          gap: "2px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            padding: "4px 10px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              borderRadius: "50%",
                              backgroundColor: "#b2b2b2",
                              border: "2px solid #ededed",
                              boxSizing: "border-box",
                              width: "10px",
                              height: "10px",
                            }}
                          />
                        </div>
                        <div
                          style={{ position: "relative", fontWeight: "600" }}
                        >
                          Product Team Lead
                        </div>
                      </div>
                      <div
                        style={{
                          alignSelf: "stretch",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          gap: "2px",
                          fontSize: "14px",
                          color: "#666",
                        }}
                      >
                        <div
                          style={{
                            alignSelf: "stretch",
                            display: "flex",
                            flexDirection: "row",
                            padding: "0px 13px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                          }}
                        >
                          <img
                            style={{
                              alignSelf: "stretch",
                              position: "relative",
                              maxHeight: "100%",
                              width: "0px",
                            }}
                            alt=""
                            src="/vector-31.svg"
                          />
                        </div>
                        <div
                          style={{
                            flex: "1",
                            display: "flex",
                            flexDirection: "column",
                            padding: "0px 0px 16px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            gap: "16px",
                          }}
                        >
                          <div
                            style={{
                              alignSelf: "stretch",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              gap: "4px",
                            }}
                          >
                            <div
                              style={{
                                alignSelf: "stretch",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  alignSelf: "stretch",
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                  justifyContent: "flex-start",
                                  gap: "4px",
                                }}
                              >
                                <div style={{ position: "relative" }}>
                                  Mar 2021 - Present
                                </div>
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#b2b2b2",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                                <div
                                  style={{ flex: "1", position: "relative" }}
                                >
                                  2 yrs 6 mos
                                </div>
                              </div>
                            </div>
                            <div style={{ position: "relative" }}>
                              Tel-Aviv, Israel
                            </div>
                          </div>
                          <div
                            style={{
                              alignSelf: "stretch",
                              display: "none",
                              flexDirection: "row",
                              flexWrap: "wrap",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              gap: "8px",
                              color: "#191919",
                            }}
                          >
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div style={{ flex: "1", position: "relative" }}>
                                Teachers, counselors and coaches get more
                                clients by creating an impressive digital
                                identity.
                              </div>
                            </div>
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div
                                style={{ flex: "1", position: "relative" }}
                              >{`Entrepreneurs gain more exposure through organic and sponsored promotion. `}</div>
                            </div>
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div style={{ flex: "1", position: "relative" }}>
                                Employees and the self-employed get out of the
                                rat race by running a digital independent
                                business.
                              </div>
                            </div>
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div style={{ flex: "1", position: "relative" }}>
                                Designers who need to generate more revenue by
                                selling digital websites and assets to
                                customers.
                              </div>
                            </div>
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div
                                style={{ flex: "1", position: "relative" }}
                              >{`We help store owners sell more through the network. `}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        borderRadius: "2px",
                        overflow: "hidden",
                        display: "none",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "6px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          gap: "2px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            padding: "4px 10px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              borderRadius: "50%",
                              backgroundColor: "#b2b2b2",
                              border: "2px solid #ededed",
                              boxSizing: "border-box",
                              width: "10px",
                              height: "10px",
                            }}
                          />
                        </div>
                        <div
                          style={{ position: "relative", fontWeight: "600" }}
                        >
                          Emerging Technologies Specialist
                        </div>
                      </div>
                      <div
                        style={{
                          alignSelf: "stretch",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          gap: "2px",
                          fontSize: "14px",
                          color: "#666",
                        }}
                      >
                        <div
                          style={{
                            alignSelf: "stretch",
                            display: "flex",
                            flexDirection: "row",
                            padding: "0px 13px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                          }}
                        >
                          <img
                            style={{
                              alignSelf: "stretch",
                              position: "relative",
                              maxHeight: "100%",
                              width: "0px",
                            }}
                            alt=""
                            src="/vector-31.svg"
                          />
                        </div>
                        <div
                          style={{
                            flex: "1",
                            display: "flex",
                            flexDirection: "column",
                            padding: "0px 0px 16px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            gap: "16px",
                          }}
                        >
                          <div
                            style={{
                              alignSelf: "stretch",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              gap: "4px",
                            }}
                          >
                            <div
                              style={{
                                alignSelf: "stretch",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  alignSelf: "stretch",
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                  justifyContent: "flex-start",
                                  gap: "4px",
                                }}
                              >
                                <div style={{ position: "relative" }}>
                                  May 2020 - Aug 2022
                                </div>
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#b2b2b2",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                                <div
                                  style={{ flex: "1", position: "relative" }}
                                >
                                  2 years
                                </div>
                              </div>
                            </div>
                            <div style={{ position: "relative" }}>
                              South District, Beer Sheva
                            </div>
                          </div>
                          <div
                            style={{
                              alignSelf: "stretch",
                              display: "none",
                              flexDirection: "row",
                              flexWrap: "wrap",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              gap: "8px",
                              color: "#191919",
                            }}
                          >
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div style={{ flex: "1", position: "relative" }}>
                                Teachers, counselors and coaches get more
                                clients by creating an impressive digital
                                identity.
                              </div>
                            </div>
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div
                                style={{ flex: "1", position: "relative" }}
                              >{`Entrepreneurs gain more exposure through organic and sponsored promotion. `}</div>
                            </div>
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div style={{ flex: "1", position: "relative" }}>
                                Employees and the self-employed get out of the
                                rat race by running a digital independent
                                business.
                              </div>
                            </div>
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div style={{ flex: "1", position: "relative" }}>
                                Designers who need to generate more revenue by
                                selling digital websites and assets to
                                customers.
                              </div>
                            </div>
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div
                                style={{ flex: "1", position: "relative" }}
                              >{`We help store owners sell more through the network. `}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        borderRadius: "2px",
                        overflow: "hidden",
                        display: "none",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "6px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          gap: "2px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            padding: "4px 10px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              borderRadius: "50%",
                              backgroundColor: "#b2b2b2",
                              border: "2px solid #ededed",
                              boxSizing: "border-box",
                              width: "10px",
                              height: "10px",
                            }}
                          />
                        </div>
                        <div
                          style={{ position: "relative", fontWeight: "600" }}
                        >
                          Emerging Technologies Specialist
                        </div>
                      </div>
                      <div
                        style={{
                          alignSelf: "stretch",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          gap: "2px",
                          fontSize: "14px",
                          color: "#666",
                        }}
                      >
                        <div
                          style={{
                            alignSelf: "stretch",
                            display: "flex",
                            flexDirection: "row",
                            padding: "0px 13px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                          }}
                        >
                          <img
                            style={{
                              alignSelf: "stretch",
                              position: "relative",
                              maxHeight: "100%",
                              width: "0px",
                            }}
                            alt=""
                            src="/vector-31.svg"
                          />
                        </div>
                        <div
                          style={{
                            flex: "1",
                            display: "flex",
                            flexDirection: "column",
                            padding: "0px 0px 16px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            gap: "16px",
                          }}
                        >
                          <div
                            style={{
                              alignSelf: "stretch",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              gap: "4px",
                            }}
                          >
                            <div
                              style={{
                                alignSelf: "stretch",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  alignSelf: "stretch",
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                  justifyContent: "flex-start",
                                  gap: "4px",
                                }}
                              >
                                <div style={{ position: "relative" }}>
                                  May 2020 - Aug 2022
                                </div>
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#b2b2b2",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                                <div
                                  style={{ flex: "1", position: "relative" }}
                                >
                                  2 years
                                </div>
                              </div>
                            </div>
                            <div style={{ position: "relative" }}>
                              South District, Beer Sheva
                            </div>
                          </div>
                          <div
                            style={{
                              alignSelf: "stretch",
                              display: "none",
                              flexDirection: "row",
                              flexWrap: "wrap",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              gap: "8px",
                              color: "#191919",
                            }}
                          >
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div style={{ flex: "1", position: "relative" }}>
                                Teachers, counselors and coaches get more
                                clients by creating an impressive digital
                                identity.
                              </div>
                            </div>
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div
                                style={{ flex: "1", position: "relative" }}
                              >{`Entrepreneurs gain more exposure through organic and sponsored promotion. `}</div>
                            </div>
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div style={{ flex: "1", position: "relative" }}>
                                Employees and the self-employed get out of the
                                rat race by running a digital independent
                                business.
                              </div>
                            </div>
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div style={{ flex: "1", position: "relative" }}>
                                Designers who need to generate more revenue by
                                selling digital websites and assets to
                                customers.
                              </div>
                            </div>
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div
                                style={{ flex: "1", position: "relative" }}
                              >{`We help store owners sell more through the network. `}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        borderRadius: "2px",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "6px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          gap: "2px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            padding: "4px 10px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              borderRadius: "50%",
                              backgroundColor: "#b2b2b2",
                              border: "2px solid #ededed",
                              boxSizing: "border-box",
                              width: "10px",
                              height: "10px",
                            }}
                          />
                        </div>
                        <b style={{ position: "relative", fontWeight: "600" }}>
                          Business Development Manager
                        </b>
                      </div>
                      <div
                        style={{
                          alignSelf: "stretch",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          gap: "2px",
                          fontSize: "14px",
                          color: "#666",
                        }}
                      >
                        <div
                          style={{
                            alignSelf: "stretch",
                            display: "flex",
                            flexDirection: "row",
                            padding: "0px 13px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                          }}
                        >
                          <img
                            style={{
                              alignSelf: "stretch",
                              position: "relative",
                              maxHeight: "100%",
                              width: "0px",
                              display: "none",
                            }}
                            alt=""
                            src="/vector-36.svg"
                          />
                        </div>
                        <div
                          style={{
                            flex: "1",
                            display: "flex",
                            flexDirection: "column",
                            padding: "0px 0px 16px",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            gap: "16px",
                          }}
                        >
                          <div
                            style={{
                              alignSelf: "stretch",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              gap: "4px",
                            }}
                          >
                            <div
                              style={{
                                alignSelf: "stretch",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  alignSelf: "stretch",
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                  justifyContent: "flex-start",
                                  gap: "4px",
                                }}
                              >
                                <div style={{ position: "relative" }}>
                                  Jan 2010 - Apr 2014
                                </div>
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#b2b2b2",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                                <div
                                  style={{ flex: "1", position: "relative" }}
                                >
                                  4 yrs 4 mos
                                </div>
                              </div>
                            </div>
                            <div style={{ position: "relative" }}>
                              Tel-Aviv, Israel
                            </div>
                          </div>
                          <div
                            style={{
                              alignSelf: "stretch",
                              display: "flex",
                              flexDirection: "row",
                              flexWrap: "wrap",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              gap: "8px",
                              color: "#191919",
                            }}
                          >
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div style={{ flex: "1", position: "relative" }}>
                                Consistently identified and executed new growth
                                initiatives for the Bank.
                              </div>
                            </div>
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div style={{ flex: "1", position: "relative" }}>
                                Built a growth plan for the bank’s premium
                                account holders which yielded 4% gross.
                              </div>
                            </div>
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div style={{ flex: "1", position: "relative" }}>
                                Implementation of strategic work procedures plan
                                across 200 branches.
                              </div>
                            </div>
                            <div
                              style={{
                                width: "422px",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div style={{ flex: "1", position: "relative" }}>
                                Collaborated with McKinsey on a personalize
                                customer experience program to produce growth in
                                sales.
                              </div>
                            </div>
                            <div
                              style={{
                                width: "422px",
                                display: "none",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                              }}
                            >
                              <div
                                style={{
                                  width: "12px",
                                  height: "16px",
                                  display: "flex",
                                  flexDirection: "row",
                                  padding: "2px 0px 0px",
                                  boxSizing: "border-box",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "100px",
                                    backgroundColor: "#191919",
                                    width: "3px",
                                    height: "3px",
                                  }}
                                />
                              </div>
                              <div
                                style={{ flex: "1", position: "relative" }}
                              >{`We help store owners sell more through the network. `}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <MuiButton
                style={{ alignSelf: "stretch" }}
                variant="text"
                color="primary"
              >
                Show less
              </MuiButton>
            </div>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              borderBottom: "1px solid #cbd5e1",
              display: "flex",
              flexDirection: "column",
              padding: "0px 0px 16px",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "24px",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h3
                style={{
                  margin: "0",
                  flex: "1",
                  position: "relative",
                  fontSize: "inherit",
                  fontWeight: "600",
                  fontFamily: "inherit",
                  color: "inherit",
                }}
              >
                Education
              </h3>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "16px",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "16px",
                }}
              >
                <Education
                  educationDetails="/logos10.svg"
                  universityName="Reichman University- FORE Executive Education"
                  degreeDetails="Bachelor of Business Administration (B.B.A.), Business Administration and Management, General"
                  dateRange="2005 - 2008"
                  showLogosIcon={false}
                  educationPosition="unset"
                  educationWidth="unset"
                  educationGap="16px"
                  educationAlignSelf="stretch"
                  iconWidth="48px"
                  iconHeight="48px"
                  iconPadding="10px"
                  iconBackgroundImage="url('/icon@3x.png')"
                  iconBackgroundSize="cover"
                  iconBackgroundRepeat="no-repeat"
                  iconBackgroundPosition="top"
                  logosIconWidth="32px"
                  logosIconHeight="31.44px"
                  rightSideGap="8px"
                  cornelUniversityFontSize="16px"
                  cornelUniversityAlignSelf="stretch"
                  frameDivGap="4px"
                  masterOfRegionalFontSize="14px"
                  masterOfRegionalDisplay="inline-block"
                  masterOfRegionalAlignItems="unset"
                  masterOfRegionalWidth="unset"
                  masterOfRegionalAlignSelf="stretch"
                  divFontSize="14px"
                />
                <Education
                  educationDetails="/logos11.svg"
                  universityName="Reichman University"
                  degreeDetails="BA (Hons), Fashion Photography"
                  dateRange="2001 - 2002"
                  showLogosIcon={false}
                  educationPosition="unset"
                  educationWidth="unset"
                  educationGap="16px"
                  educationAlignSelf="stretch"
                  iconWidth="48px"
                  iconHeight="48px"
                  iconPadding="10px"
                  iconBackgroundImage="url('/icon4@3x.png')"
                  iconBackgroundSize="cover"
                  iconBackgroundRepeat="no-repeat"
                  iconBackgroundPosition="top"
                  logosIconWidth="32px"
                  logosIconHeight="31.44px"
                  rightSideGap="8px"
                  cornelUniversityFontSize="16px"
                  cornelUniversityAlignSelf="unset"
                  frameDivGap="4px"
                  masterOfRegionalFontSize="14px"
                  masterOfRegionalDisplay="inline-block"
                  masterOfRegionalAlignItems="unset"
                  masterOfRegionalWidth="unset"
                  masterOfRegionalAlignSelf="stretch"
                  divFontSize="14px"
                />
              </div>
              <MuiButton
                style={{ alignSelf: "stretch" }}
                variant="text"
                color="primary"
              >
                Show less
              </MuiButton>
            </div>
          </div>
        </main>
      </div>
      {isModalFeetbackPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeModalFeetbackPopup}
        >
          <ModalFeetback onClose={closeModalFeetbackPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default ProfileSlideover;
