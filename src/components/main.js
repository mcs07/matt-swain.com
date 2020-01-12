/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Box, Container } from '@theme-ui/components'

export const Main = ({children}) => {
  return (
    <Box as="main" id="content" sx={{flex: '1 1 auto'}}>
      <Container px={3}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
