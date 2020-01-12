import React from "react"
import { Styled } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Link from "../components/link"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" description="About Matt Swain" />
      <Styled.h1>About Me</Styled.h1>
      <Styled.p>Hi! I'm Matt Swain.</Styled.p>
      <Styled.p>
        I'm a software developer and cheminformatician currently living and
        working in Cambridge, UK.
      </Styled.p>
      <Styled.p>
        This is my personal web site where you can find{" "}
        <Link to="/">things that I have written</Link> and{" "}
        <Link to="/projects">projects that I have worked on</Link>.
      </Styled.p>
      <Styled.p>
        You can also find me on{" "}
        <Link href="https://twitter.com/mattswain123">Twitter</Link>,{" "}
        <Link href="https://github.com/mcs07">GitHub</Link>, and{" "}
        <Link href="https://uk.linkedin.com/in/mcswain">LinkedIn</Link>.
      </Styled.p>
    </Layout>
  )
}

export default AboutPage
