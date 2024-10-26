import styled from "styled-components";
import {
  brandingColors,
  brandingFonts,
  breakingPoints,
} from "../../styles/customStyles";

export const DesktopStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 230px;
  @media (max-width: ${breakingPoints.mobile}) {
    display: none;
  }

  .title {
    height: 290px;

    h2 {
      position: relative;
      top: 20px;
      left: 0;
      transform: rotate(-90deg) translateX(-100%);
      transform-origin: top left;
      //font-family: ${brandingFonts.textMedium};
      font-family: "Graphik";
      font-weight: 500;
      font-size: 5rem;
      color: ${(props) =>
        props.theme.mode === "light"
          ? brandingColors.dark
          : brandingColors.light};
      letter-spacing: 0;
      text-transform: uppercase;
      margin: 0;
    }
  }

  .workListContainer {
    .workProject {
      text-align: right;
      margin-top: 16px;
      &:first-of-type {
        margin-top: 0;
      }
      .workProjectTitle {
        display: inline-block;
        margin: 0;
        //font-family: ${brandingFonts.displayRegular};
        font-family: "MAZIUS REVIEW 20.09";
        font-weight: normal;
        font-style: normal;
        font-size: 5rem;
        color: ${(props) =>
          props.theme.mode === "light"
            ? brandingColors.dark
            : brandingColors.light};
        letter-spacing: 0;
        //line-height: 7rem;
        line-height: 112px;
        //height: 7rem;
        height: 112px;
        cursor: pointer;
        &:hover {
          //font-family: ${brandingFonts.displayExtraItalic};
          font-family: "MAZIUS REVIEW 20.09 Ex";
          font-weight: normal;
          font-style: italic;
        }
        &:hover::before {
          content: "";
          display: inline-block;
          height: 80px;
          width: 120px;
          margin-right: 32px;
          transform: translateY(16px);
          //background: url("https://media.giphy.com/media/z193jwEWnkHEk/source.gif");
          background: url("./kikzEyePreview.gif");
          background-size: cover;
        }
      }
      .workProjectText {
        font-family: ${brandingFonts.textRegular};
        font-family: "Graphik";
        font-weight: normal;
        font-style: normal;
        font-size: 1rem;
        color: ${(props) =>
          props.theme.mode === "light"
            ? brandingColors.dark
            : brandingColors.light};
        letter-spacing: 0;
        text-align: right;
        line-height: 1;
      }
    }
  }
`;

export const MobileStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  margin-top: 112px;
  @media (min-width: 376px) {
    display: none;
  }

  .title {
    //height: 290px;
    margin-left: 24px;

    h2 {
      position: relative;
      top: 8px;
      left: 0;
      transform: rotate(-90deg) translateX(-100%);
      transform-origin: top left;
      //font-family: ${brandingFonts.textMedium};
      font-family: "Graphik";
      font-weight: 500;
      font-size: 2rem;
      color: ${(props) =>
        props.theme.mode === "light"
          ? brandingColors.dark
          : brandingColors.light};
      letter-spacing: 0;
      text-transform: uppercase;
      margin: 0;
    }
  }

  .workListContainer {
    .workProject {
      text-align: right;
      margin-top: 24px;
      margin-right: 24px;

      &:first-of-type {
        margin-top: 0;
      }

      .workProjectTitle {
        display: inline-block;
        margin: 0;
        //font-family: ${brandingFonts.displayRegular};
        font-family: "MAZIUS REVIEW 20.09";
        font-weight: normal;
        font-style: normal;
        font-size: 2.5rem;
        color: ${(props) =>
          props.theme.mode === "light"
            ? brandingColors.dark
            : brandingColors.light};
        letter-spacing: 0;
        line-height: 1;
        height: 40px;
        cursor: pointer;

        /* &:hover{
            font-family: ${brandingFonts.displayExtraItalic};
            font-family: 'MAZIUS REVIEW 20.09 Ex';
            font-weight: normal;
            font-style: italic;
          } */
      }

      .workProjectText {
        //font-family: ${brandingFonts.textRegular};
        font-family: "Graphik";
        font-weight: normal;
        font-style: normal;
        font-size: 0.75rem;
        color: ${(props) =>
          props.theme.mode === "light"
            ? brandingColors.dark
            : brandingColors.light};
        letter-spacing: 0;
        text-align: right;
        line-height: 1;
        padding-top: 8px;
      }
    }
  }
`;