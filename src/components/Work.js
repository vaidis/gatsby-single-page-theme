import React from "react"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import { Link } from "gatsby-plugin-modal-routing"

export const Work = props => {
  const slug = props.frontmatter.slug;
  const image = props.frontmatter.image_desktop.childImageSharp.fixed
  const navigation = props.navigation;

  return (
    <div>
      <Link to={`/${slug}`} state={{ navigation }} asModal>
        <Img fixed={image} />
      </Link>
    </div>
  )
}

Work.prototype = {
  slug: PropTypes.string.isRequired
}

Work.defaultProps = {
  navigation: {},
}
