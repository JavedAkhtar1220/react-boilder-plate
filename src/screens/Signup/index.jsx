import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

// useForm 
import { useForm } from "react-hook-form";

// Redux
import { useDispatch } from "react-redux";
import { signupUser } from "../../store/actions";

import {
  Box,
  Container,
  Grid,
  TextField,
  InputAdornment,
  Button,
  FormHelperText,
} from "@mui/material";

// Icons 
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import LockIcon from "@mui/icons-material/Lock";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (values) => {
    dispatch(signupUser(values, navigate));
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
          <h1 style={{ textAlign: "center" }}>Register Now</h1>

          <form style={{ marginTop: "40px" }} onSubmit={handleSubmit(onSubmit)}>
            <Box marginBottom={"20px"}>
              <TextField
                id="input-with-icon-textfield"
                label="Full Name"
                error={errors.username}
                {...register("username", {
                  required: {
                    value: true,
                    message: "Username is required",
                  },
                })}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonRoundedIcon />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                fullWidth
              />
              {errors.username && (
                <FormHelperText sx={{ color: "red", marginLeft: "20px" }}>
                  {errors.username.message}
                </FormHelperText>
              )}
            </Box>
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
                  minLength: {
                    value: 6,
                    message: "Password must be 6 charaters long",
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
              <TextField
                id="input-with-icon-textfield"
                type="password"
                label="Confirm Password"
                error={errors.confirmPassword}
                {...register("confirmPassword", {
                  validate: (value) =>
                    value === password.current || "The password do not match",
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
              {errors.confirmPassword && (
                <FormHelperText sx={{ color: "red", marginLeft: "20px" }}>
                  {errors.confirmPassword.message}
                </FormHelperText>
              )}
            </Box>
            <Button fullWidth variant="contained" type="submit">
              Signup
            </Button>
          </form>
          <p style={{ textAlign: "end" }}>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Signup;
