/** @jsx jsx */
import { jsx } from "theme-ui"
import { Global } from "@emotion/core"
import { Styled } from "theme-ui"
import { Box } from "@theme-ui/components"

import Head from "./head"
import Header from "./header"
import Main from "./main"
import Footer from "./footer"

import "katex/dist/katex.min.css"

export const Layout = ({ children, bg }) => {
  return (
    <Styled.root sx={{ bg }}>
      <Head />
      <Global
        styles={{
          "*": {
            boxSizing: "border-box",
          },
          body: {
            margin: 0,
            WebkitFontSmoothing: "antialiased",
          },
        }}
      />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
        <Main>{children}</Main>
        <Footer />
      </Box>
    </Styled.root>
  )
}

export default Layout
