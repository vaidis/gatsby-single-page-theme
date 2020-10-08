import React from "react"
import { navigate } from "gatsby"
import { Link } from "gatsby-plugin-modal-routing"
import { GrClose, GrNext, GrPrevious } from "react-icons/gr";

import "./LayoutModal.css"

export const LayoutModal = ({ children, closeTo, navigation = {} }) => {

  const { current = -1, items = [] } = navigation
  const previous = items[current - 1] ? items[current - 1] : null
  const next = items[current + 1] ? items[current + 1] : null

  const closeModal = () => {
    navigate(closeTo, { state: { noScroll: true } })
  }

  return (
    <div className="modal">
      <div className="controls">

        <div className="control prev">
          {previous && (
            <Link
              asModal
              state={{ navigation: { current: current - 1, items } }}
              to={previous}
            >
              <GrPrevious />
            </Link>
          )}
        </div>

        <div className="control next">
          {next && (
            <Link
              asModal
              state={{ navigation: { current: current + 1, items } }}
              to={next}
            >
              <GrNext />
            </Link>
          )}
        </div>

        <div className="control close" onClick={closeModal}>
          <GrClose />
        </div>
      </div>

      <div className="content">
        <div className="inner">
          {children}
        </div>
      </div>
    </div>
  )
}
