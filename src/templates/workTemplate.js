import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import { Layout } from "../layouts/Layout"

export default props => {

  console.log(" @@@@ workTemplate.js /props", props);

  const title = props.data.markdownRemark.frontmatter.title;
  const image = props.data.markdownRemark.frontmatter.image_desktop.childImageSharp.fluid
  const navigation = props.location.state ? props.location.state.navigation : null

  return (
    <Layout navigation={navigation}>
      <h3>{title}</h3>
      <div style={{ maxHeight: "100%", height: "auto",overflow: "auto"  }}>
        <Img fluid={image} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        image_desktop {
          childImageSharp {
            fluid( quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
