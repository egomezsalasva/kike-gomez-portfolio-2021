// IMPORTS
  //-Modules
  import styled from 'styled-components'
  //-Styles
  import { brandingColors, breakingPoints } from '../styles/customStyles'
//

// STYLES
  const StyleContainer = styled.div`
    .themeButtonShadow{
        width: 24px;
        height: 24px;
        background: ${brandingColors.light};
        border-radius: 50%;
        position: absolute;
        top: 40px;
        right: 40px;
        transform: translate(2px, -2px);
        cursor: pointer;
        @media (max-width: ${breakingPoints.mobile}) {
          top: 24px;
          right: 24px;
        }
    }
    .themeButton{
        width: 24px;
        height: 24px;
        background: ${brandingColors.dark};
        border-radius: 50%;
        position: absolute;
        top: 40px;
        right: 40px;
        transform: translate(2px, -2px);
        cursor: pointer;
        @media (max-width: ${breakingPoints.mobile}) {
          top: 24px;
          right: 24px;
        }
    }
  `
//

//MAIN COMPONENT
  export default function ThemeButton({themeButtonRefProp}) {

      

      return (
          <StyleContainer>
              <div className="themeButtonShadow"></div>
              <div className="themeButton" ref={themeButtonRefProp}></div>
          </StyleContainer>
      )

  }
//