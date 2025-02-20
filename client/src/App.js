import {
  Box,
  Button,
  Card,
  colors,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState({ username: "", password: "" });

  const handleLogin = async () => {
    console.log("====================================");
    console.log(data);
    console.log("====================================");
    // let url = `http://127.0.0.1:5000/login`;
    // await axios.post(url, {
    //   username: data.username,
    //   password: data.password,
    // });
    let url = `http://127.0.0.1:5000/login?username=${data.username}&password=${data.password}`;
    await axios.get(url);
  };
  return (
    <Box mt={20} display={"flex"} justifyContent={"center"}>
      <Card
        elevation={1}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          border: `1px solid ${colors.grey[400]}`,
          minHeight: "300px",
          minWidth: {
            lg: "30vw",
            md: "50vw",
            xs: "70vw",
          },
          py: 4,
          px: 3,
        }}
      >
        <Box display={"flex"} gap={1} flexDirection={"column"}>
          <Typography fontSize={14} color={colors.grey[600]}>
            Username
          </Typography>
          <TextField
            placeholder="Enter Your Username"
            id="outlined-basic"
            variant="outlined"
            value={data.username}
            onChange={(e) => {
              setData((prev) => ({ ...prev, username: e.target.value }));
            }}
          />
        </Box>
        <Box display={"flex"} gap={1} flexDirection={"column"}>
          <Typography fontSize={14} color={colors.grey[600]}>
            Password
          </Typography>
          <TextField
            placeholder="Enter Your Password"
            id="outlined-basic"
            variant="outlined"
            value={data.password}
            onChange={(e) => {
              setData((prev) => ({ ...prev, password: e.target.value }));
            }}
          />
        </Box>

        <Button
          variant="contained"
          sx={{
            backgroundColor: colors.grey[900],
            fontSize: 14,
            py: 1.5,
            mt: 1,
          }}
          onClick={handleLogin}
        >
          Login
        </Button>
      </Card>
    </Box>
  );
};

export default App;
