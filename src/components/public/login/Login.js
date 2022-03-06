import React, { useContext, useState } from "react";
import { AuthContext } from "../../../auth/AuthContext";
import { types } from "../../../types/Types";

export const Login = ({history}) => {

  const {dispatch} = useContext(AuthContext)

  const [formusername, setFormusername] = useState("")
  const [formpass, setFormpass] = useState("")

  const handleLogin = async(e)=>{
    console.log("Hizo login")
    const resp ={
      name : "sfelipe",
      rol: 'USUARIO REGISTRADO'
    }

    if(resp.rol == 'USUARIO REGISTRADO'){
      dispatch({
        type: types.rolUsuario,
        payload:{
          name: resp.name,
          rol: types.rolUsuario
        }
      })
      window.location.href = "/homeuser";
    }
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <form autoComplete="off">
        <div className="form-group">
          <label>Username</label>
          <input
            type="ingrese su nombre de usuario"
            autoComplete="off"
            className="form-control"
            id="name"
            onChange={(event) => {
              setFormusername(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="pass"
            onChange={(event) => {
              setFormpass(event.target.value);
            }}
          />
        </div>
        <button className="btn btn-outline-primary" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};
