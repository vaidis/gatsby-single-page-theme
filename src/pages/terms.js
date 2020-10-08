import React from "react"
import { Layout } from "../layouts/Layout"
import SEO from "../components/seo"

const Policy = () => {
    return (
        <Layout ModalTitle={""}>
            <SEO title="Home" />
            <div>
                <h2>Terms of Service</h2>
                <ul>
                    <li>Terms of Service goes here...</li>
                </ul>
            </div>
        </Layout >
    )
}

export default Policy
