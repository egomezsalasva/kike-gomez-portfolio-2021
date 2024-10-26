// IMPORTS
  //-Modules
  import styled from 'styled-components'
  //-Styles
  import { brandingColors, breakingPoints } from '../styles/customStyles'
import { FunctionComponent } from 'react'
//

// STYLES
  const StyleContainer = styled.div`
    .themeButtonShadow{
        width: 24px;
        height: 24px;
        background: ${props => props.theme.mode === "light" ? brandingColors.light : brandingColors.dark };
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
        background: ${props => props.theme.mode === "light" ? brandingColors.dark : brandingColors.light };
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
const ThemeButton: FunctionComponent<any> = ({themeButtonRefProp, toggleClickProp}) => {
      return (
          <StyleContainer>
              <div className="themeButtonShadow" ></div>
              <div className="themeButton" ref={themeButtonRefProp} onClick={toggleClickProp}></div>
          </StyleContainer>
      )
  }
//

export default ThemeButton