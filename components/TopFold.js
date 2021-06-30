// IMPORTS
  //-Modules
  import styled from 'styled-components'
  //-Styles
  import { brandingColors, brandingFonts, breakingPoints } from '../styles/customStyles'
//

// STYLES
  const StyleContainer = styled.div`
    height: 100vh;

    .scroll{
        position: absolute;
        right: 40px;
        bottom: 40px;
        transform: rotate(-90deg) translate(50px, 35px);
        text-transform: uppercase;
        //font-family: ${brandingFonts.textRegular};
        font-family: "Graphik";
        font-weight: normal;
        font-style: normal;
        font-size: 0.75rem;
        color: ${brandingColors.dark};
        letter-spacing: 0;
        @media (max-width: ${breakingPoints.mobile}) {
            right: 24px;
            bottom: 24px;
        }
    }
  `

  const DesktopContent = styled.div`
    @media (max-width: ${breakingPoints.mobile}) {
        display: none;
    }

    .row{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 6rem;
    
        .nameOuter{
            height: 16rem;
            overflow: hidden;

            .nameInner{
                //font-family: ${brandingFonts.displayRegular};
                font-family: "MAZIUS REVIEW 20.09";
                text-transform: uppercase;
                font-size: 22rem;
                color: ${brandingColors.dark};
                letter-spacing: 0;
                line-height: 16rem;
            }
        }

        .description{
            //font-family: ${brandingFonts.textRegular};
            font-family: "Graphik";
            font-weight: normal;
            font-style: normal;
            font-size: 1rem;
            color: ${brandingColors.dark};
            letter-spacing: 0.01em;
            text-align: right;
            line-height: 1.5rem;
            transform: translateY(-5px);

            span{
                //font-family: ${brandingFonts.textSemibold};
                font-family: "Graphik";
                font-weight: 600;
                font-style: normal;
            }
        }
    }

    .surnameOuter{
        height: 23rem;
        transform: translateY(3rem);
        padding-bottom: 3rem;
        overflow: hidden;

            .surnameInner{
                //font-family: ${brandingFonts.displayExtraItalic};
                font-family: "MAZIUS REVIEW 20.09 Ex";
                font-style: italic;
                transform: translateY(-5rem);
                text-transform: uppercase;
                font-size: 22rem;
                color: ${brandingColors.dark};
                line-height: 28rem;
            }
    }

  `

  const MobileContent = styled.div`
    @media (min-width: 376px) {
        display: none;
    }


    .description{
        //font-family: ${brandingFonts.textRegular};
        font-family: "Graphik";
        font-weight: normal;
        font-style: normal;
        font-size: 1rem;
        color: ${brandingColors.dark};
        letter-spacing: 0.01em;
        text-align: right;
        line-height: 1.5rem;
        transform: translateY(-5px);
        position: absolute;
        top: 90px;
        right: 30px;

        span{
            //font-family: ${brandingFonts.textSemibold};
            font-family: "Graphik";
            font-weight: 600;
            font-style: normal;
        }
    }

    .nameContainer{
        position: absolute;
        bottom: 30px;
        left: 20px;

        .nameOuter{
            //height: 16rem;
            overflow: hidden;

            .nameInner{
                //font-family: ${brandingFonts.displayRegular};
                font-family: "MAZIUS REVIEW 20.09";
                text-transform: uppercase;
                font-size: 24vw;
                color: ${brandingColors.dark};
                letter-spacing: 0;
                line-height: 24vw;
            }
        }

        .surnameOuter{
        //height: 23rem;
        //transform: translateY(3rem);
        //padding-bottom: 3rem;
        overflow: hidden;

            .surnameInner{
                //font-family: ${brandingFonts.displayExtraItalic};
                font-family: "MAZIUS REVIEW 20.09 Ex";
                font-style: italic;
                transform: translateY(-2vw);
                text-transform: uppercase;
                font-size: 24vw;
                color: ${brandingColors.dark};
                line-height: 24vw;
            }
    }

    }
  `
//

//MAIN COMPONENT
    export default function TopFold({nameRefProp, descriptionRefProp, surnameRefProp, nameMobileRefProp, descriptionMobileRefProp, surnameMobileRefProp}) {

    //TODO BUG ANIMATION
    
    return (
        <StyleContainer>        
        
            <DesktopContent>
                <div className="row">
                    <div className="nameOuter">
                        <div className="nameInner" ref={nameRefProp}>Kike</div>
                    </div>
                    <div className="description" ref={descriptionRefProp}>
                        Front-end Developer<br/>
                        Digital Designer<br/>
                        <br/>
                        <span>Available From: Jul-2021</span><br/>
                        <span>Barcelona, ES</span><br/>
                    </div>
                </div>
                
                <div className="surnameOuter">
                    <div className="surnameInner" ref={surnameRefProp}>Gomez</div>
                </div>
            </DesktopContent>

            <MobileContent>

                <div className="description" ref={descriptionMobileRefProp}>
                    Front-end Developer<br/>
                    Digital Designer<br/>
                    <br/>
                    <span>Available From: Jul-2021</span><br/>
                    <span>Barcelona, ES</span><br/>
                </div>

                <div className="nameContainer">
                    <div className="nameOuter">
                        <div className="nameInner" ref={nameMobileRefProp}>Kike</div>
                    </div>
                    <div className="surnameOuter">
                        <div className="surnameInner" ref={surnameMobileRefProp}>Gomez</div>
                    </div>
                </div>

            </MobileContent>

            <div className="scroll">Scroll Down</div>

        </StyleContainer>
    )
    }
//