import { ModalRoutingContext } from "gatsby-plugin-modal-routing"
import React from "react"

export function useModal() {
  console.log(" ==== ModalContext.jsx/useModal")
  const context = React.useContext(ModalRoutingContext)
  console.log(" ==== ModalContext.jsx/useModal/context", context)
  if (context === undefined) {
    console.log(" ==== ModalContext.jsx/useModal/Error")
    throw new Error(
      `useModal must be used within an ModalRoutingContext.Provider`
    )
  }
  return context
}