import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { Link, useStaticQuery, graphql } from "gatsby"

const LogoWrap = styled.div`
  margin: auto 0;
  width: 260px;
  flex: 0 1 220px;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 220px;
  }
`

const Logo = () => {
    const data = useStaticQuery(graphql`
        query {
            file(name: { eq: "logo" }, extension: { eq: "png" }) {
                childImageSharp {
                    fluid(maxWidth: 220, pngQuality: 80) {
                        ...GatsbyImageSharpFluid
                        ...GatsbyImageSharpFluidLimitPresentationSize
                    }
                }
            }
        }
    `)
    return (
        <LogoWrap className="logoCompopnent" as={Link} to="/">
            <Img fluid={data.file.childImageSharp.fluid} alt="logo" />
        </LogoWrap>
    )
}

export default Logo
