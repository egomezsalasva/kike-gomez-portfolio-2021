// IMPORTS
    //-Modules
    import { useRef, useEffect, FunctionComponent } from 'react'
    import styled from 'styled-components'
    import { gsap } from 'gsap'
    import {TextPlugin} from 'gsap/dist/TextPlugin'
    //-Styles
    import { brandingColors, brandingFonts, breakingPoints } from '../styles/customStyles'
//

// STYLES
    const TopIntro = styled.div`
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100vw;
        height: 50vh;
        z-index: 10;
        background: ${brandingColors.dark};
        .topIntroloadingBar{
            position: absolute;
            bottom: 0;
            left: 0;
            height: 1px;
            width: 0;
            background: ${brandingColors.light};
        }
        .topIntroNumber{
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
    `

    const BottomIntro = styled.div`
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100vw;
        height: 50vh;
        z-index: 10;
        background: ${brandingColors.dark};

        .bottomIntroLoadingBar{
            position: absolute;
            top: 0;
            left: 0;
            height: 1px;
            width: 0;
            background: ${brandingColors.light};
        }

        .bottomIntroNumber{
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

            &::after{
                content: '%';
                margin-left: 5px;
            }
        }
    `
//

//MAIN COMPONENT
const Preloader: FunctionComponent<any> = ({introTopBlockRefProp, introTopLoadingBarRefProp, introBottomBlockRefProp, introBottomLoadingBarRefProp }) => {


        //INTRO ANIMATION PERCENTAGE

            //GSAP Plugins
                gsap.registerPlugin(TextPlugin)
            //

            //Preloader Percentage Refs
                let introTopNumberRef: any = useRef(null)
                let introBottomNumberRef: any =useRef(null)
            //

            useEffect( () => {
                //Timeline Init
                const percentageTl = gsap.timeline()
                //Variables
                const initialLoadPerCentSecs = 0.03        
                //Percentage Timeline
                    percentageTl.to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "1", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "2", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "3", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "4", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "5", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "6", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "7", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "8", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "9", ease: "power2.inOut"})
                                .to(introTopNumberRef, {duration:initialLoadPerCentSecs, text: "1", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "0", ease: "power2.inOut"}, `-=${initialLoadPerCentSecs}`)
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "1", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "2", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "3", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "4", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "5", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "6", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "7", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "8", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "9", ease: "power2.inOut"})
                                .to(introTopNumberRef, {duration:initialLoadPerCentSecs, text: "2", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "0", ease: "power2.inOut"}, `-=${initialLoadPerCentSecs}`)
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "1", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "2", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "3", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "4", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "5", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "6", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "7", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "8", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "9", ease: "power2.inOut"})
                                .to(introTopNumberRef, {duration:initialLoadPerCentSecs, text: "3", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "0", ease: "power2.inOut"}, `-=${initialLoadPerCentSecs}`)
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "1", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "2", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "3", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "4", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "5", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "6", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "7", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "8", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "9", ease: "power2.inOut"})
                                .to(introTopNumberRef, {duration:initialLoadPerCentSecs, text: "4", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "0", ease: "power2.inOut"}, `-=${initialLoadPerCentSecs}`)
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "1", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "2", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "3", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "4", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "5", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "6", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "7", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "8", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "9", ease: "power2.inOut"})
                                .to(introTopNumberRef, {duration:initialLoadPerCentSecs, text: "5", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "0", ease: "power2.inOut"}, `-=${initialLoadPerCentSecs}`)
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "1", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "2", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "3", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "4", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "5", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "6", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "7", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "8", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "9", ease: "power2.inOut"})
                                .to(introTopNumberRef, {duration:initialLoadPerCentSecs, text: "6", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "0", ease: "power2.inOut"}, `-=${initialLoadPerCentSecs}`)
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "1", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "2", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "3", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "4", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "5", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "6", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "7", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "8", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "9", ease: "power2.inOut"})
                                .to(introTopNumberRef, {duration:initialLoadPerCentSecs, text: "7", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "0", ease: "power2.inOut"}, `-=${initialLoadPerCentSecs}`)
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "1", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "2", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "3", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "4", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "5", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "6", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "7", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "8", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "9", ease: "power2.inOut"})
                                .to(introTopNumberRef, {duration:initialLoadPerCentSecs, text: "8", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "0", ease: "power2.inOut"}, `-=${initialLoadPerCentSecs}`)
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "1", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "2", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "3", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "4", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "5", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "6", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "7", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "8", ease: "power2.inOut"})
                                .to(introBottomNumberRef, {duration:initialLoadPerCentSecs, text: "9", ease: "power2.inOut"})
                                .to(introTopNumberRef, {duration:initialLoadPerCentSecs, text: "9", ease: "power2.inOut"})
                                .play() 
                //
            })

        //

        return (
            <>        
                <TopIntro ref={introTopBlockRefProp}>
                    <div className="topIntroloadingBar" ref={introTopLoadingBarRefProp}></div>
                    <div className="topIntroNumber" ref={el => {introTopNumberRef = el}}>0</div>
                </TopIntro>
                <BottomIntro ref={introBottomBlockRefProp}>
                    <div className="bottomIntroLoadingBar" ref={introBottomLoadingBarRefProp}></div>
                    <div className="bottomIntroNumber" ref={el => {introBottomNumberRef = el}}>0</div>
                </BottomIntro>
            </>
        )
    }
//

export default Preloader
