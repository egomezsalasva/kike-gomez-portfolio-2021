// IMPORTS
//-Modules
import Head from "next/head";
import { useRef, useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
//-Components
import Preloader from "../components/Preloader";
import ThemeButton from "../components/ThemeButton";
import TopFold from "../components/TopFold";
import Work from "../components/Work";
import Contact from "../components/Contact";
//-Styles
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { breakingPoints } from "../styles/customStyles";
import { brandingColors } from "../styles/customStyles";
//-Contexts
import { useThemeContext } from "../contexts/themeContext";
//

// STYLES

const GlobalStyle = createGlobalStyle`
    body {
      background: ${(props) => (props.theme.mode === "light" ? brandingColors.light : brandingColors.dark)};
    }
  `;

const Container = styled.div`
  width: 1240px;
  margin: 0 auto;
  min-width: 1240px;
  min-height: 100vh;
  @media (max-width: ${breakingPoints.mobile}) {
    width: 100vw;
    min-width: auto;
  }
`;

//

//MAIN COMPONENT
export default function Home() {
  //TODO: REFACTOR MAKE FONTS DYNAMIC ON CUSTOMSTYLES.JS

  //TODO UNIT TEST

  //TODO RESPOSNIVE TABLET

  //BUG CHROME BOTTOM BAR PINNING BEHAVIOUR

  //INTRO ANIMATION

  //Preloader Refs
  let introTopBlockRef = useRef(null);
  let introTopLoadingBarRef = useRef(null);
  let introBottomBlockRef = useRef(null);
  let introBottomLoadingBarRef = useRef(null);
  //

  //Top Fold Refs
  let themeButtonRef = useRef(null);
  let nameRef = useRef(null);
  let surnameRef = useRef(null);
  let descriptionRef = useRef(null);

  let nameMobileRef = useRef(null);
  let surnameMobileRef = useRef(null);
  let descriptionMobileRef = useRef(null);
  //

  useEffect(() => {
    //Timeline Inits
    const introTl = gsap.timeline();

    //Variables
    const initialLoadSecs = 3;

    //Intro Timeline
    introTl
      //Preloader
      .to("body", { duration: 0, overflow: "hidden" }, "start")
      .to(
        introTopLoadingBarRef,
        { duration: initialLoadSecs, width: "100vw", ease: "power2.inOut" },
        "start",
      )
      .to(
        introBottomLoadingBarRef,
        { duration: initialLoadSecs, width: "100vw", ease: "power2.inOut" },
        "start",
      )
      .to(
        introTopBlockRef,
        { duration: 2, yPercent: -100, ease: "power2.inOut" },
        "stage02",
      )
      .to(
        introBottomBlockRef,
        { duration: 2, yPercent: 100, ease: "power2.inOut" },
        "stage02",
      )
      .to(introTopBlockRef, { duration: 0, display: "none" }, "stage03")
      .to(introBottomBlockRef, { duration: 0, display: "none" }, "stage03")

      //Top Fold Desk
      .from(
        nameRef,
        {
          duration: 2,
          y: "-16rem",
          alpha: 0,
          rotate: 5.625,
          ease: "power2.inOut",
        },
        "stage04-=2",
      )
      .from(
        surnameRef,
        {
          duration: 2,
          y: "28rem",
          alpha: 0,
          rotate: 5.625,
          ease: "power2.inOut",
        },
        "stage04-=2",
      )
      .from(
        descriptionRef,
        { duration: 2, alpha: 0, ease: "power2.inOut" },
        "stage04-=0.5",
      )
      //Top Fold Mobile
      .from(
        nameMobileRef,
        {
          duration: 2,
          y: "-16rem",
          alpha: 0,
          rotate: 5.625,
          ease: "power2.inOut",
        },
        "stage04-=2",
      )
      .from(
        surnameMobileRef,
        {
          duration: 2,
          y: "28rem",
          alpha: 0,
          rotate: 5.625,
          ease: "power2.inOut",
        },
        "stage04-=2",
      )
      .from(
        descriptionMobileRef,
        { duration: 2, alpha: 0, ease: "power2.inOut" },
        "stage04-=0.5",
      )
      .from(
        themeButtonRef,
        { duration: 2, scale: 0, ease: "power2.inOut" },
        "stage04",
      )
      .to("body", { duration: 0, overflow: "visible" }, "stage05-=1.5")

      .play();
    //
  }, []);

  //

  //CONTEXT COLOR THEME
  const { themeMode, toggleThemeHandler } = useThemeContext();
  //

  //SCROLL TO TOP ON PAGE REFRESH
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);
  //

  return (
    <>
      <ThemeProvider theme={{ mode: themeMode.mode }}>
        <Head>
          <title>Kike Gomez</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <GlobalStyle />

        <Preloader
          introTopBlockRefProp={(el) => {
            introTopBlockRef = el;
          }}
          introTopLoadingBarRefProp={(el) => {
            introTopLoadingBarRef = el;
          }}
          introBottomBlockRefProp={(el) => {
            introBottomBlockRef = el;
          }}
          introBottomLoadingBarRefProp={(el) => {
            introBottomLoadingBarRef = el;
          }}
        />

        <Container>
          <ThemeButton
            themeButtonRefProp={(el) => {
              themeButtonRef = el;
            }}
            themeButtonMobileRefProp={(el) => {
              themeButtonMobileRef = el;
            }}
            toggleClickProp={() => toggleThemeHandler()}
          />

          <TopFold
            nameRefProp={(el) => {
              nameRef = el;
            }}
            descriptionRefProp={(el) => {
              descriptionRef = el;
            }}
            surnameRefProp={(el) => {
              surnameRef = el;
            }}
            nameMobileRefProp={(el) => {
              nameMobileRef = el;
            }}
            descriptionMobileRefProp={(el) => {
              descriptionMobileRef = el;
            }}
            surnameMobileRefProp={(el) => {
              surnameMobileRef = el;
            }}
          />

          <Work />

          <Contact />
        </Container>
      </ThemeProvider>
    </>
  );
}
//
