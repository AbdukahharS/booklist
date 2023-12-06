import Stack from '@mui/material/Stack'
import styled from '@emotion/styled'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const Container = styled(Stack)`
  height: 100vh;
`

const Btn = styled(Button)`
  min-width: 240px;
`

const NotFound = () => {
  return (
    <Container>
      <Stack alignItems='center' justifyContent='center' my='auto' gap='72px'>
        <img src='images/not-found.svg' alt='Not found' width={720} />
        <Stack direction='row' gap='12px'>
          <Btn variant='contained'>
            <Link to='/'>Go Home Page</Link>
          </Btn>
          <Btn variant='outlined' onClick={() => window.location.reload()}>
            Reload Page
          </Btn>
        </Stack>
      </Stack>
    </Container>
  )
}

export default NotFound
