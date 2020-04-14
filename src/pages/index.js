import React from "react"
import Projects from "../components/projects"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>This is the portfolio of Steve Smodish</h2>
    <Projects />
  </Layout>
)

export default IndexPage
