import React from "react";
import {TextField} from "@mui/material";
import {Button} from "@mui/material";

class Login extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <TextField
                        id="outlined-basic"
                        label="Usuario"
                        variant="outlined"
                        color="primary"
                        required="true"
                    />
                    <br/>
                    <br/>
                    <TextField
                        id="outlined-basic"
                        label="Contraseña"
                        variant="outlined"
                        color="primary"
                        required="true"
                    />
                    <br/>
                    <br/>
                    <br/>
                    <Button variant="outlined" color="secondary"
                            onClick={document.querySelector(".usr").value === "sofi" && document.querySelector(".pass").value === "kaede" ? alert("entraste") : alert("no entraste")}>
                        ( ˘⌣˘)♡(˘⌣˘ )
                    </Button>
                </form>
            </div>
        );
    }
}

export default Login;
