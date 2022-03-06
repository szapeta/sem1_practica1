import axios from "axios";
import "./Registro.css";
import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../auth/AuthContext";
import { types } from "../../../types/Types";
import ImageUploader from "react-images-upload";

export const Registro = () => {
    const { dispatch } = useContext(AuthContext);

    const [isError, setIsError] = useState("");
    const [imguser, setImguser] = useState("");
    const [formname, setFormname] = useState("");
    const [formusername, setFormusername] = useState("");
    const [formpass, setFormpass] = useState("");
    const [formpassxtwo, setFormpassxtwo] = useState("");

    const handleRegistro = async (e) => {
        e.preventDefault();
        if (formpass == formpassxtwo) {
            setIsError("");

            const formData = new FormData();
            formData.append("name", "name");
            formData.append("archivo", imguser);
            let formimg = imguser.name;
            console.log(formimg);
            await axios
                .post(types.apiurl + "files", formData)
                .then((data) => {

                    axios
                        .post(types.apiurl + "registro", {
                            formname,
                            formusername,
                            formpass,
                            formpassxtwo,
                            formimg,
                        })
                        .then((resp) => {
                            console.log(resp.data);
                            if (resp.data.msg == "ok") {
                                dispatch({
                                    type: types.rolUsuario,
                                    payload: {
                                        name: formusername,
                                    },
                                });
                                window.location.href = "/homeuser";
                            }
                        })
                        .catch((err) => console.log("Error: " + err));
                })
                .catch((err) => console.log("Error: " + err));
        } else {
            setIsError(
                "Error en la validacion de password, los campos deben ser iguales"
            );
        }
    };

    useEffect(() => {
        setImguser(
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/240px-User-avatar.svg.png"
        );
    }, []);

    return (
        <div className="container mt-5">
            <h1>Registro</h1>
            <hr />
            <form autoComplete="off">
                <div className="box">
                    <div>
                        <p>Imagen de perfil</p>
                        <input
                            type="file"
                            name="myImage"
                            onChange={(e) => setImguser(e.target.files[0])}
                        />
                    </div>
                    <div>
                        <div className="form-group">
                            <label>Nombre Completo</label>
                            <input
                                type="ingrese su nombre de usuario"
                                autoComplete="off"
                                className="form-control"
                                name="name"
                                id="name"
                                value={formname}
                                onChange={(event) => {
                                    setFormname(event.target.value);
                                }}
                            />
                        </div>
                        <div className="form-group">
                            <label>Username</label>
                            <input
                                type="ingrese su nombre"
                                autoComplete="off"
                                className="form-control"
                                name="user"
                                id="user"
                                value={formusername}
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
                                value={formpass}
                                onChange={(event) => {
                                    setFormpass(event.target.value);
                                }}
                            />
                        </div>
                        <div className="form-group">
                            <label>Confirmar Password</label>
                            <input
                                value={formpassxtwo}
                                onChange={(event) => {
                                    setFormpassxtwo(event.target.value);
                                }}
                                type="password"
                                className="form-control"
                                id="passxtwo"
                            />
                        </div>
                        <button
                            className="btn btn-outline-primary"
                            onClick={handleRegistro}
                        >
                            Registrarse
                        </button>
                    </div>
                </div>
            </form>

            <div
                style={{
                    position: "absolute",
                    textAlign: "center",
                    paddingTop: 20,
                }}
            >
                {isError}
            </div>
        </div>
    );
};
