import React from 'react'
import Img from "gatsby-image"
import styled from "styled-components"
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby'
import { CSSTransitionGroup } from 'react-transition-group'

const BackgroundImageGradient = styled.div`
  opacity: 1 !important;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 25, 1) 0%,
    rgba(0, 0, 0, 0) 25%
  )
`
const PromoWrap = styled.div`
  padding-top: 60px;
  padding-bottom: 120px;
  padding-left: 10px;
  padding-right: 10px;
  max-width: 900px;
  margin: 0 auto;
  @media (max-width: 768px) {
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 20px;
    padding-right: 20px;
  }
`
const Header2 = styled.h2`
color: #4eb6f3;
font-family: "Ubuntu Condensed";
@media (max-width: 768px) {
  font-size: 1.2rem;
}
`
const Header3 = styled.h3`
  font-family: "Ubuntu Condensed";
  background: #ff4c01;
  color: #ffffff;
  font-size: 1rem;
  padding: 10px 15px;
  width: fit-content;
  margin-bottom: 10px;
`
const PromoTop = styled.div`
  flex-direction: row;
  margin-bottom: 80px;
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`
const PromoBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const PromoBottomLeft = styled.div`
`
const PromoBottomRight = styled.div`
  align-self: flex-end
`

const Promo = () => {

  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "promo.jpg" }) {
        childImageSharp {
          fluid(
            quality: 99,
            maxWidth: 4160
            traceSVG: {
              color: "#112144"
              background: "#58688a"
              optTolerance: 0.9
              turnPolicy: TURNPOLICY_MAJORITY
            }
            ) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      lifesaver: file(relativePath: { eq: "lifesaver.png" }) {
        childImageSharp {
          fixed(width: 256) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)


  return (
    <BackgroundImageGradient>
      <BackgroundImage
        Tag="section"
        className={"promo"}
        fluid={data.background.childImageSharp.fluid}
        backgroundColor={`#040e18`}
        title="Fullscreen Background"
        id="promo-bg"
        role="img"
        aria-label="Fullscreen Background"
        preserveStackingContext={true}
      >
        <PromoWrap >
          <PromoTop>

            <CSSTransitionGroup
              transitionName="promoTitle1"
              transitionAppear={true}
              transitionAppearTimeout={1000}
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={1500}
            >
              <Header2>This is a Free Single Page Theme for Gatsby.js</Header2>
            </CSSTransitionGroup>

            <CSSTransitionGroup
              transitionName="promoTitle2"
              transitionAppear={true}
              transitionAppearTimeout={1000}
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={1500}
            >
              <Header2>React-based open source framework for creating websites and apps</Header2>
            </CSSTransitionGroup>


          </PromoTop>
          <PromoBottom>
            <PromoBottomLeft>

              <CSSTransitionGroup
                transitionName="promoText1"
                transitionAppear={true}
                transitionAppearTimeout={1000}
                transitionEnterTimeout={1000}
                transitionLeaveTimeout={1500}
              >
                <Header3> + Performance built-in</Header3>
              </CSSTransitionGroup>

              <CSSTransitionGroup
                transitionName="promoText2"
                transitionAppear={true}
                transitionAppearTimeout={1500}
                transitionEnterTimeout={1500}
                transitionLeaveTimeout={1500}
              >
                <Header3> + Scalability affordable and instant</Header3>
              </CSSTransitionGroup>

              <CSSTransitionGroup
                transitionName="promoText3"
                transitionAppear={true}
                transitionAppearTimeout={2000}
                transitionEnterTimeout={2000}
                transitionLeaveTimeout={1500}
              >
                <Header3> + Security by default</Header3>
              </CSSTransitionGroup>

              <CSSTransitionGroup
                transitionName="promoText4"
                transitionAppear={true}
                transitionAppearTimeout={2500}
                transitionEnterTimeout={1500}
                transitionLeaveTimeout={2500}
              >
                <Header3> + Accessibility by design</Header3>
              </CSSTransitionGroup>

            </PromoBottomLeft>
            <PromoBottomRight>
              <CSSTransitionGroup
                transitionName="promoSaver"
                transitionAppear={true}
                transitionAppearTimeout={2500}
                transitionEnterTimeout={1500}
                transitionLeaveTimeout={2500}
              >
                <Img fixed={data.lifesaver.childImageSharp.fixed} />
              </CSSTransitionGroup>
            </PromoBottomRight>
          </PromoBottom>
        </PromoWrap>
      </BackgroundImage>
    </BackgroundImageGradient>
  )
}

export default Promo
