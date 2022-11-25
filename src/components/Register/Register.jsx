import { useDispatch } from 'react-redux';
import { registration } from 'redux/auth/authOperations/operations';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { BtnReg } from './Register.styled';

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      registration({
        email: e.target.elements.email.value.trim(),
        name: e.target.elements.name.value.trim(),
        password: e.target.elements.password.value.trim(),
      })
    );
    e.target.reset();
  };

  const theme = createTheme();

  return (
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
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
            onSubmit={handleSubmit}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="User name"
              autoComplete="name"
              autoFocus
              type="text"
              name="name"
              placeholder="name"
              size="small"
            />

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
            <BtnReg fullWidth variant="outline" sx={{ mt: 3 }} type="submit">
              Register
            </BtnReg>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default Register;
