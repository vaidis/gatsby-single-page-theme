import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../layouts/Layout"

import SEO from "../components/seo"
import Promo from "../components/hero-promo"
import About from "../components/hero-about"
import Works from "../components/hero-works"
import Map from "../components/hero-map"
import Contact from "../components/hero-contact"


const IndexPage = ({ data, location }) => {

  const posts = data.allMarkdownRemark.edges

  return (
    <Layout ModalTitle={""}>
      <SEO title="Home" />
      <Promo />
      <About />
      <Works posts={posts} sendModalTitle={""} />
      <Map />
      <Contact />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date
            slug
            image_desktop {
              childImageSharp {
                fixed(width: 248, height: 380) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
