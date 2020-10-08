import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

const HeroWrap = styled.div`
  padding: 120px 10px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`
const HeroTop = styled.div`
  text-align: right;
  flex: 3 1 auto;
  align-self: flex-end;
`
const HeroBottom = styled.div`
  text-align: left;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 60px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const HeroBottomLeft = styled.div`
`
const HeroBottomRight = styled.div`
  align-self: center;
`
const Header2 = styled.h2`
  color: #44bbff;
  font-family: "Ubuntu Condensed";
`
const Paragraph = styled.p`
  color: #ffffff;
  font-family: "Ubuntu";
`
const BackgroundImageGradient = styled.div`
  opacity: 1 !important;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 25, 1) 0%,
    rgba(0, 0, 0, 0) 10%
  );
`
const BackgroundBottom = styled.div`
  background-position: center bottom;
  background-repeat: repeat-x;
`

const About = () => {

  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "about.jpg" }) {
        childImageSharp {
          fluid(
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
      method: file(relativePath: { eq: "method.png" }) {
        childImageSharp {
          fixed(width: 320) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <BackgroundBottom>
      <BackgroundImageGradient>
        <BackgroundImage
          Tag="section"
          className={"promo"}
          fluid={data.background.childImageSharp.fluid}
          backgroundColor={`#040e18`}
          title="Fullscreen Background"
          id="about-bg"
          role="img"
          aria-label="Fullscreen Background"
          preserveStackingContext={true}
        >
          <HeroWrap id="about">
            <HeroTop>
              <Header2>About My Company</Header2>
              <Paragraph>Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</Paragraph>
            </HeroTop>
            <HeroBottom>
              <HeroBottomLeft>
                <Header2>Our method ensures our work quality</Header2>
                <Paragraph>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes</Paragraph>
                <Paragraph>nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.  Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</Paragraph>
              </HeroBottomLeft>
              <HeroBottomRight>
                <Img fixed={data.method.childImageSharp.fixed} />
              </HeroBottomRight>
            </HeroBottom>
          </HeroWrap>
        </BackgroundImage>
      </BackgroundImageGradient>
    </BackgroundBottom>
  )
}

export default About
