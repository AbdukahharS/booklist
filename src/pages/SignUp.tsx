import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../components/GlobalComponents'
import {
  Card,
  Stack,
  Typography,
  Button,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { VisibilityOff, Visibility } from '@mui/icons-material'

const SignUp = () => {
  const theme = useTheme()

  const [showPassword, setShowPassword] = React.useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }

  return (
    <Container>
      <Card sx={{ width: 430, py: '48px', px: '28px' }}>
        <form>
          <Stack gap='26px' alignItems='stretch'>
            <Typography
              textAlign='center'
              fontWeight={700}
              variant='h4'
              component='h1'
            >
              Sign Up
            </Typography>
            <Stack gap='16px'>
              <Button
                variant='outlined'
                color='inherit'
                startIcon={<img src='images/google.svg' alt='Google' />}
              >
                Continue with Google
              </Button>
              <Button
                variant='outlined'
                color='inherit'
                startIcon={<img src='images/facebook.svg' alt='Facebook' />}
              >
                Continue with Facebook
              </Button>
            </Stack>
            <img src='images/distinguishing.svg' alt='distinguishing' />
            <TextField label='Your name' placeholder='john doe' />
            <TextField label='Your email' placeholder='Enter your email' />
            <TextField
              label='Your username'
              placeholder='Enter your username'
            />
            <FormControl variant='outlined'>
              <InputLabel htmlFor='outlined-adornment-password'>
                Password
              </InputLabel>
              <OutlinedInput
                id='outlined-adornment-password'
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge='end'
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label='Password'
              />
            </FormControl>
            <Stack gap='12px'>
              <Button variant='contained'>Button</Button>
              <Typography variant='caption' textAlign='center' fontSize='14px'>
                Already signed up?{' '}
                <Link
                  style={{ color: theme.palette.primary.main }}
                  to='/sign-in'
                >
                  Go to sign in
                </Link>
              </Typography>
            </Stack>
          </Stack>
        </form>
      </Card>
    </Container>
  )
}

export default SignUp
