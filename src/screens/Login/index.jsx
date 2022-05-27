import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// useForm
import { useForm } from "react-hook-form";

// Redux
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/actions";

import {
  Box,
  Container,
  Grid,
  TextField,
  InputAdornment,
  Button,
  FormHelperText,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

// Icons
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import LockIcon from "@mui/icons-material/Lock";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);

  const onSubmit = (values) => {
    dispatch(loginUser(values, navigate, checked));
  };

  return (
    <Container sx={{ marginTop: "200px" }}>
      <Grid container>
        <Grid
          item
          xl={6}
          sm={10}
          sx={{
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            marginX: "auto",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h1 style={{ textAlign: "center" }}>Login</h1>

          <form style={{ marginTop: "40px" }} onSubmit={handleSubmit(onSubmit)}>
            <Box marginBottom={"20px"}>
              <TextField
                id="input-with-icon-textfield"
                label="Email"
                error={errors.email}
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email Address is required",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Email Address is invalid",
                  },
                })}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailRoundedIcon />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                fullWidth
              />
              {errors.email && (
                <FormHelperText sx={{ color: "red", marginLeft: "20px" }}>
                  {errors.email.message}
                </FormHelperText>
              )}
            </Box>
            <Box marginBottom={"20px"}>
              <TextField
                id="input-with-icon-textfield"
                type="password"
                label="Password"
                error={errors.password}
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                })}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                fullWidth
              />
              {errors.password && (
                <FormHelperText sx={{ color: "red", marginLeft: "20px" }}>
                  {errors.password.message}
                </FormHelperText>
              )}
            </Box>
            <Box marginBottom={"20px"}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                  />
                }
                label="Keep me logged in"
              />
            </Box>

            <Button fullWidth variant="contained" type="submit">
              Login
            </Button>
          </form>
          <p style={{ textAlign: "end" }}>
            Don't have an account? <Link to="/signup"> Signup</Link>
          </p>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
