import React, { useEffect } from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaDiscord, FaApple } from "react-icons/fa6";

const LoginPage = () => {
  const handleLogin = (provider) => {
    let client_id, scope;
    let redirect_uri = `${window.location.origin}/auth/callback/${provider}`;

    if (provider === "github") {
      client_id = process.env.REACT_APP_GITHUB_CLIENT_ID;
      scope = "user";
      window.location.href = `https://${provider}.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&response_type=code`;
    } else if (provider === "google") {
      client_id = process.env.REACT_APP_GOOGLE_CLIENT_ID;
      scope = "openid profile email";
      window.location.href = `https://accounts.${provider}.com/o/oauth2/v2/auth?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&response_type=code`;
    } else if (provider === "discord") {
      client_id = process.env.REACT_APP_DISCORD_CLIENT_ID;
      scope = "identify email";
      window.location.href = `https://${provider}.com/oauth2/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&response_type=code`;
    }
  };

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <Container maxWidth="sm" sx={{ marginTop: "100px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
          React Social Login
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mt: 4,
            width: "100%",
            maxWidth: 400,
          }}
        >
          <Button
            fullWidth
            variant="contained"
            startIcon={<FcGoogle size="28" />}
            onClick={() => handleLogin("google")}
            sx={{
              fontSize: "15px",
              fontWeight: 500,
              backgroundColor: "white",
              color: "black",
              "&:hover": {
                backgroundColor: "white",
              },
            }}
          >
            Sign in with Google
          </Button>
          {/* <Button
            fullWidth
            variant="contained"
            startIcon={<FaApple size="30" />}
            onClick={() => handleLogin("apple")}
            sx={{
              fontSize: "15px",
              fontWeight: 500,
              backgroundColor: "white",
              color: "black",
              "&:hover": {
                backgroundColor: "white",
              },
            }}
          >
            Sign in with Apple
          </Button> */}
          {/* <Button
            fullWidth
            variant="contained"
            startIcon={<FaGithub size="28" />}
            onClick={() => handleLogin("github")}
            sx={{
              fontSize: "15px",
              fontWeight: 500,
              backgroundColor: "white",
              color: "black",
              "&:hover": {
                backgroundColor: "white",
              },
            }}
          >
            Sign in with GitHub
          </Button> */}
          <Button
            fullWidth
            variant="contained"
            startIcon={<FaDiscord size="28" style={{ fill: "#5865F2" }} />}
            onClick={() => handleLogin("discord")}
            sx={{
              fontSize: "15px",
              fontWeight: 500,
              backgroundColor: "white",
              color: "black",
              "&:hover": {
                backgroundColor: "white",
              },
            }}
          >
            Sign in with Discord
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
