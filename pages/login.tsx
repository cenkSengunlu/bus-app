import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      {/* <Link color="inherit" href="https://mui.com/"> */}
      Bus App
      {/* </Link>*/} {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const login = () => {
  const [userName, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const canLogin = [userName.trim(), password.trim()].every(Boolean);
  return (
    <div className="w-[60%] h-screen flex items-center mx-auto">
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: "70vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: "url(https://source.unsplash.com/random)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-6 sm:h-9 mb-5"
                alt="Bus App Logo"
              />
              <Typography component="h1" variant="h5" className="select-none">
                Giriş Yap
              </Typography>

              <TextField
                margin="normal"
                fullWidth
                id="username"
                label="Kullanıcı Adı"
                name="username"
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                margin="normal"
                fullWidth
                name="password"
                label="Şifre"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                disabled={!canLogin}
                className="my-3 w-full select-none bg-blue-500 py-2 rounded text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Giriş Yap
              </button>

              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
};
export default login;
