import React from "react"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"
import { LayoutFull } from "./LayoutFull"
import { LayoutModal } from "./LayoutModal"

export const Layout = ({ children, navigation }) => {
  return (
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo }) =>
        modal ? (
          <LayoutModal closeTo={closeTo} navigation={navigation}>
            {children}
          </LayoutModal>
        ) : (
            <LayoutFull>
              {children}
            </LayoutFull>
          )
      }
    </ModalRoutingContext.Consumer>
  )
}

