import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { FiArrowUpCircle } from "react-icons/fi";
import PropTypes from "prop-types"
import Headroom from "react-headroom"
import ScrollUp from "react-scroll-up"

import Header from "../components/header"
import Footer from "../components/footer"
import "./layout.css"

if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]');
}

export const LayoutFull = ({ children }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Headroom id="home">
        <Header siteTitle={data.site.siteMetadata.title} />
      </Headroom>
      <main>
        {children}
      </main>
      <Footer />
      <ScrollUp showUnder={160}>
          <Link to="/#home"
                    style={{
                      'color': '#ff4c01',
                      'fontSize': '40px'
                    }}
          >
            <FiArrowUpCircle />
          </Link>
        </ScrollUp>
    </>
  )
}

LayoutFull.propTypes = {
  children: PropTypes.node.isRequired,
}
