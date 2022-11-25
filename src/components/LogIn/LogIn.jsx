import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations/operations';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { BtnLogIn } from './LogIn.styled';

const LogIn = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      logIn({
        email: form.elements.email.value.trim(),
        password: form.elements.password.value.trim(),
      })
    );
    form.reset();
  };

  const theme = createTheme();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              sx={{ mt: 1 }}
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <TextField
                name="email"
                type="email"
                placeholder="email"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                autoComplete="email"
                autoFocus
                size="small"
              />
              <TextField
                name="password"
                type="password"
                placeholder="password"
                id="password"
                label="Password "
                autoComplete="current-password"
                autoFocus
                margin="normal"
                required
                fullWidth
                size="small"
              />
              <BtnLogIn
                fullWidth
                variant="outlined"
                sx={{ mt: 3 }}
                type="submit"
              >
                Log In
              </BtnLogIn>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};
export default LogIn;
