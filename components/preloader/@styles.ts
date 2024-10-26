import styled from "styled-components";
import {
  brandingColors,
  brandingFonts,
  breakingPoints,
} from "../../styles/customStyles";

export const TopIntroStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 50vh;
  z-index: 10;
  background: ${brandingColors.dark};
  .topIntroloadingBar {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 0;
    background: ${brandingColors.light};
  }
  .topIntroNumber {
    position: absolute;
    top: 48px;
    left: 48px;
    //font-family: ${brandingFonts.textMedium};
    font-family: "Graphik";
    font-weight: 500;
    font-size: 2rem;
    color: ${brandingColors.light};
    letter-spacing: 0;
    @media (max-width: ${breakingPoints.mobile}) {
      top: 32px;
      left: 32px;
    }
  }
`;

export const BottomIntroStyle = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 50vh;
  z-index: 10;
  background: ${brandingColors.dark};

  .bottomIntroLoadingBar {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 0;
    background: ${brandingColors.light};
  }

  .bottomIntroNumber {
    position: absolute;
    bottom: 48px;
    right: 48px;
    //font-family: ${brandingFonts.textMedium};
    font-family: "Graphik";
    font-weight: 500;
    font-size: 2rem;
    color: ${brandingColors.light};
    letter-spacing: 0;
    @media (max-width: ${breakingPoints.mobile}) {
      bottom: 32px;
      right: 32px;
    }

    &::after {
      content: "%";
      margin-left: 5px;
    }
  }
`;
