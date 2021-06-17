// IMPORTS
  //-Modules
  import { useRef, useEffect } from 'react'
  import Image from 'next/image'
  import { gsap } from 'gsap'
  import styled from 'styled-components'
  //-Styles
  import { brandingColors, brandingFonts, breakingPoints } from '../styles/customStyles'
//

// STYLES
    const DesktopContent = styled.div`
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 130px;
        margin-bottom: 170px;
        min-height: 410px;
        @media (max-width: ${breakingPoints.mobile}) {
            display: none;
        }

        .title{
            h2{
                position: relative;
                top: 20px;
                left: 0;
                transform: rotate(-90deg) translateX(-100%);
                transform-origin: top left;
                font-family: ${brandingFonts.textMedium};
                font-weight: normal;
                font-size: 5rem;
                color: ${brandingColors.dark};
                letter-spacing: 0;
                text-transform: uppercase;
                margin: 0;
            }
        }

        .emailContainer{
        display: flex;
        align-items: flex-end;
        transform: translateX(-30px);

            .wrapper{
                height: auto;
                cursor: pointer;

                .clipWrapper{
                    overflow: hidden;
                    height: 18px;
                
                    .clip{
                        text-align: right;
                        transform: translateY(0%);
                        img{
                            transform: translateY(2px);
                            height: 15px;
                            padding-left: 2px;
                        }
                    }

                    .clipConfirmed{
                        text-align: right;
                        transform: translateY(0%);
                    }
                }

                .email{
                    font-family: ${brandingFonts.displayRegular};
                    font-size: 5rem;
                    color: ${brandingColors.dark};
                    letter-spacing: 0;
                    line-height: 112px;
                    span{
                        font-family: ${brandingFonts.textRegular};
                        font-size: 4.5rem;
                    }
                }
            }

        }
    `

    const MobileContent = styled.div`
        display: flex;
        justify-content: space-between;
        width: 100vw;
        margin-top: 80px;
        margin-bottom: 80px;
        height: 153.28px; //Contact title width
        @media (min-width: 376px) {
            display: none;
        }

        .title{
            width: 35px;
            margin-left: 24px;

            h2{
                position: relative;
                //top: 8px;
                left: 0;
                transform: rotate(-90deg) translateX(-153.28px);
                transform-origin: top left;
                font-family: ${brandingFonts.textMedium};
                font-weight: normal;
                font-size: 2rem;
                color: ${brandingColors.dark};
                letter-spacing: 0;
                text-transform: uppercase;
                margin: 0;
            }
        }

        .emailContainer{
            display: flex;
            align-items: flex-end;
            transform: translateX(-30px);

            .wrapper{
                height: auto;
                cursor: pointer;

                .clipWrapper{
                    overflow: hidden;
                    height: 17px;
                    margin-bottom: 8px;
                
                    .clip{
                        text-align: right;
                        transform: translateY(-1px);
                        font-size: 0.75rem;
                        line-height: 1;

                        img{
                            height: 15px;
                            padding-left: 2px;
                            transform: translateY(3px) scale(0.75);
                        }
                    }

                    .clipConfirmed{
                        text-align: right;
                        transform: translateY(-1px);
                        font-size: 0.75rem;
                        line-height: 1;
                    }
                }

                .email{
                    font-family: ${brandingFonts.displayRegular};
                    font-size: 1.5rem;
                    color: ${brandingColors.dark};
                    letter-spacing: 0;
                    line-height: 1;

                    span{
                        font-family: ${brandingFonts.textRegular};
                        font-size: 1.5rem;
                    }
                }
            }
        }
    `
//

//MAIN COMPONENT
    export default function Contact({}) {

        //COPY TO CLIPBOARD

            const clipTl = gsap.timeline({paused: true})
            let clipRef = useRef()
            let clipConfirmRef = useRef()
            
            useEffect(() => {
                clipTl
                    .to(clipRef, {duration: 0.5, yPercent: -100, ease: "power2.inOut" }, "a")
                    .to(clipConfirmRef, {duration: 0.5, yPercent: -100, ease: "power2.inOut" }, "a")
            }, [clipTl])

            const copyToClipboard = () => {
                navigator.clipboard.writeText("egomezsalasva@gmail.com")
            }

        //

        return (
            <>
                <DesktopContent>

                    <div className="title" >
                        <h2>Contact</h2>
                    </div>

                
                    <div className="emailContainer">
                        <div className="wrapper" onClick={() => { clipTl.play(); copyToClipboard()} }>
                            <div className="clipWrapper">
                                <div className="clip" ref={el => clipRef = el}>Copy To Clipboard <Image src="/copyClip.svg" alt="copy clipboard"/></div>
                                <div className="clipConfirmed" ref={el => clipConfirmRef = el}>Copied To Clipboard!</div>
                            </div>
                            <div className="email">egomezsalasva<span>@</span>gmail.com</div>
                        </div>
                    </div>

                </DesktopContent>

                <MobileContent>

                    <div className="title" >
                        <h2>Contact</h2>
                    </div>

                
                    <div className="emailContainer">
                        <div className="wrapper" onClick={() => { clipTl.play(); copyToClipboard()} }>
                            <div className="clipWrapper">
                                <div className="clip" ref={el => clipRef = el}>Copy To Clipboard <Image src="/copyClip.svg" alt="copy clipboard"/></div>
                                <div className="clipConfirmed" ref={el => clipConfirmRef = el}>Copied To Clipboard!</div>
                            </div>
                            <div className="email">egomezsalasva<span>@</span>gmail.com</div>
                        </div>
                    </div>

                </MobileContent>

            </>
        )

    }
//