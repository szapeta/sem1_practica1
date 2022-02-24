import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../auth/AuthContext'

export const Registro = () => {

  const {dispatch} = useContext(AuthContext)

  const [formname, setFormname] = useState("")
  const [formusername, setFormusername] = useState("")
  const [formpass, setFormpass] = useState("")
  const [formpassxtwo, setFormpassxtwo] = useState("")

  const handleRegistro = async(e)=>{
    console.log("Usuario registrado")
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <form autoComplete="off">
        <div className="form-group">
          <label for="name">Nombre Completo</label>
          <input
            type="ingrese su nombre de usuario"
            autoComplete="off"
            className="form-control"
            id="name"
            onChange={(event) => {
              setFormname(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label for="user">Username</label>
          <input
            type="ingrese su nombre"
            autoComplete="off"
            className="form-control"
            id="user"
            onChange={(event) => {
              setFormusername(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label for="pass">Password</label>
          <input
            type="password"
            className="form-control"
            id="pass"
            onChange={(event) => {
              setFormpass(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label for="passxtwo">Confirmar Password</label>
          <input
            type="password"
            className="form-control"
            id="passxtwo"
            onChange={(event) => {
              setFormpassxtwo(event.target.value);
            }}
          />
        </div>
        <button className="btn btn-outline-primary" onClick={handleRegistro}>
          Registrarse
        </button>
      </form>
    </div>
  )
}
