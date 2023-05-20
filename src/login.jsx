import React from "react";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [controlTYpe, setControlType] = React.useState("password");
  //   let controlTYpe = "password";

  const mySubmit = (data) => {
    console.log(data);
  };
  return (
    <form id="loginForm" onSubmit={handleSubmit(mySubmit)}>
      <div className="form-group">
        <label htmlFor="">Username</label>
        <input
          type="text"
          {...register("username", {
            required: {
              value: true,
              message: "username is required",
            },
          })}
        />
        <p>
          <small>{errors?.username?.message}</small>
        </p>
      </div>
      <div className="form-group">
        <label htmlFor="">Passsword</label>
        <input
          type={controlTYpe}
          {...register("password", {
            required: {
              value: true,
              message: "password is required",
            },
            minLength: {
              value: 8,
              message: "password should atleast 8 characters",
            },
            maxLength: {
              value: 16,
              message: "password should maximum of 16 characters",
            },
            pattern: {
                value: /^\d{8,}$/,
                message: "password must be a number"
            }
          })}
        />
        <p>
          <small>{errors?.password?.message}</small>
        </p>
        <button
          onClick={() => {
            // controlTYpe = controlTYpe === "password" ? "text" : "password";
            console.log(controlTYpe);
            setControlType(controlTYpe === "password" ? "text" : "password");
          }}
        >
          Eye
        </button>
      </div>
      <div className="form-group">
        <button type="submit">Login</button>
      </div>
    </form>
  );
}

export default Login;
