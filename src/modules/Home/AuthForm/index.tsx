import { TextField, Button, Alert, Typography, Grid } from "@mui/material";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { mockedUser } from "../../../common/utils/mockedData";
import { useAppDispatch } from "../../../hooks/redux";
import { login } from "../../../store/auth/authSlice";
import { useState } from "react";

type FormValues = {
  login: string,
  password: string
};

const Form = () => {
  const dispatch = useAppDispatch()
  const [error, setError] = useState<string>("");

  const { handleSubmit, control } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (data.login === mockedUser.login && data.password === mockedUser.password) {
      dispatch(login(data.login))
      return;
    }
    setError("Incorrect login or password")
  };

  return (
    <Grid mb={5}>
      <Typography component="h2" variant="h5">
        Sign in
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="login"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="Email"
              variant="filled"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
              type="text"
            />
          )}
          rules={{ required: 'Login required' }}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
              label="Password"
              variant="filled"
              value={value}
              onChange={onChange}
              error={!!error}
              helperText={error ? error.message : null}
              type="password"
            />
          )}
          rules={{ required: 'Password required' }}
        />
        <div>
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </div>
      </form>
      {error ? <Alert severity="error">{error}</Alert> : null}
    </Grid>
  );
};

export default Form;