import React from "react";

function Login() {
    const [controlTYpe, setControlType] = React.useState("password");
//   let controlTYpe = "password";

  return (
    <div id="loginForm">
      <div className="form-group">
        <label htmlFor="">Username</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="">Passsword</label>
        <input type={controlTYpe} />
        <button
          onClick={() => {
            // controlTYpe = controlTYpe === "password" ? "text" : "password";
            console.log(controlTYpe);
            setControlType(controlTYpe === "password" ? "text" : "password")
          }}
        >
          Eye
        </button>
      </div>
      <div className="form-group">
        <button>Login</button>
      </div>
    </div>
  );
}

export default Login;
