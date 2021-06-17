// IMPORTS
  //-Modules
  import { useRef, useEffect } from 'react'
  import { gsap } from 'gsap'
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
  import styled from 'styled-components'
  //-Styles
  import { brandingColors, brandingFonts, breakingPoints } from '../styles/customStyles'
//


// STYLES

  const DesktopContent = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 230px;
    @media (max-width: ${breakingPoints.mobile}) {
      display: none;
    }

    .title{
      height: 290px;

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

    .workListContainer{

      .workProject{
        text-align: right;
        margin-top: 16px;
        &:first-of-type{
          margin-top: 0;
        }
        .workProjectTitle{
          display: inline-block;
          margin: 0;
          font-family: ${brandingFonts.displayRegular};
          font-size: 5rem;
          color: ${brandingColors.dark};
          letter-spacing: 0;
          //line-height: 7rem;
          line-height: 112px;
          //height: 7rem;
          height: 112px;
          cursor: pointer;
          &:hover{
            font-family: ${brandingFonts.displayExtraItalic};
          }
          &:hover::before{
            content: '';
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
        .workProjectText{
          font-family: ${brandingFonts.textRegular};
          font-size: 1rem;
          color: ${brandingColors.dark};
          letter-spacing: 0;
          text-align: right;
          line-height: 1;
        }
        
      }
    }
  `

  const MobileContent = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100vw;
    margin-top: 112px;
    @media (min-width: 376px) {
      display: none;
    }

    .title{
      //height: 290px;
      margin-left: 24px;

      h2{
        position: relative;
        top: 8px;
        left: 0;
        transform: rotate(-90deg) translateX(-100%);
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

    .workListContainer{

      .workProject{
        text-align: right;
        margin-top: 24px;
        margin-right: 24px;

        &:first-of-type{
          margin-top: 0;
        }

        .workProjectTitle{
          display: inline-block;
          margin: 0;
          font-family: ${brandingFonts.displayRegular};
          font-size: 2.5rem;
          color: ${brandingColors.dark};
          letter-spacing: 0;
          line-height: 1;
          height: 40px;
          cursor: pointer;

          &:hover{
            font-family: ${brandingFonts.displayExtraItalic};
          }
        }

        .workProjectText{
          font-family: ${brandingFonts.textRegular};
          font-size: 0.75rem;
          color: ${brandingColors.dark};
          letter-spacing: 0;
          text-align: right;
          line-height: 1;
          padding-top: 8px;
        }
        
      }
    }
  `

//


//MAIN COMPONENT
    export default function Work() {

        //SCROLL FOLLOW

            if (typeof window !== "undefined") {
                gsap.registerPlugin(ScrollTrigger)
            }

            //Sroll Desktop
              let workTitleRef = useRef()

              useEffect(() => {
                  ScrollTrigger.create({
                  pin: workTitleRef,
                  trigger: workTitleRef,
                  endTrigger: "#workList",
                  start: "bottom bottom-=40px",
                  end: "bottom bottom-=40px",
                  })
              }, [])
            //

            //Sroll Mobile
              let workTitleMobileRef = useRef()

              useEffect(() => {
                  ScrollTrigger.create({
                  pin: workTitleMobileRef,
                  trigger: workTitleMobileRef,
                  endTrigger: "#workListMobile",
                  start: "bottom bottom-=40px",
                  end: "bottom bottom-=40px",
                  })
              }, [])
            //

        //

        return (
            <>

                <DesktopContent>
                  <div className="title">
                      <h2 ref={el => {workTitleRef = el}}>WORK</h2>
                  </div>

                  <div className="workListContainer" id="workList">

                      <div className="workProject">
                          <a href="https://anuarkhalifi.com/" target="_blank">
                              <div className="workProjectTitle">Anuar Khalifi</div>
                          </a>
                          <div className="workProjectText">Development & Design</div>
                      </div>

                      <div className="workProject">
                          <a href="https://scrannyshouse.com/" target="_blank">
                              <div className="workProjectTitle">Scranny's House</div>
                          </a>
                          <div className="workProjectText">Development & Design</div>
                      </div>

                      <div className="workProject">
                          <a href="https://www.ajuarestudio.com" target="_blank">
                              <div className="workProjectTitle">Ajuar</div>
                          </a>
                          <div className="workProjectText">Development</div>
                      </div>

                      <div className="workProject">
                          <a href="https://www.behance.net/gallery/78665785/Aaron-Dormer-Film-Director-Website" target="_blank">
                              <div className="workProjectTitle">Aaron Dormer</div>
                          </a>
                          <div className="workProjectText">Design</div>
                      </div>

                      <div className="workProject">
                          <a href="https://axelbalazsi.netlify.app/" target="_blank">
                              <div className="workProjectTitle">Axel Balazsi</div>
                          </a>
                          <div className="workProjectText">Development & Design</div>
                      </div>

                      <div className="workProject">
                          <a href="https://unikomodels.com/" target="_blank">
                              <div className="workProjectTitle">Uniko</div>
                          </a>
                          <div className="workProjectText">Development & Design</div>
                      </div>

                  </div>
                </DesktopContent>

                <MobileContent>
                  <div className="title">
                      <h2 ref={el => {workTitleMobileRef = el}}>WORK</h2>
                  </div>

                  <div className="workListContainer" id="workListMobile">

                      <div className="workProject">
                          <a href="https://anuarkhalifi.com/" target="_blank">
                              <div className="workProjectTitle">Anuar Khalifi</div>
                          </a>
                          <div className="workProjectText">Development & Design</div>
                      </div>

                      <div className="workProject">
                          <a href="https://scrannyshouse.com/" target="_blank">
                              <div className="workProjectTitle">Scranny's House</div>
                          </a>
                          <div className="workProjectText">Development & Design</div>
                      </div>

                      <div className="workProject">
                          <a href="https://www.ajuarestudio.com" target="_blank">
                              <div className="workProjectTitle">Ajuar</div>
                          </a>
                          <div className="workProjectText">Development</div>
                      </div>

                      <div className="workProject">
                          <a href="https://www.behance.net/gallery/78665785/Aaron-Dormer-Film-Director-Website" target="_blank">
                              <div className="workProjectTitle">Aaron Dormer</div>
                          </a>
                          <div className="workProjectText">Design</div>
                      </div>

                      <div className="workProject">
                          <a href="https://axelbalazsi.netlify.app/" target="_blank">
                              <div className="workProjectTitle">Axel Balazsi</div>
                          </a>
                          <div className="workProjectText">Development & Design</div>
                      </div>

                      <div className="workProject">
                          <a href="https://unikomodels.com/" target="_blank">
                              <div className="workProjectTitle">Uniko</div>
                          </a>
                          <div className="workProjectText">Development & Design</div>
                      </div>

                  </div>
                </MobileContent>


            </>
        )

    }
//