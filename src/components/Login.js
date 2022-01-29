import React from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

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
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Contraseña"
            variant="outlined"
            color="primary"
            required="true"
          />
          <br />
          <br />
          <br />
          <Button variant="outlined" color="secondary">
            ( ˘⌣˘)♡(˘⌣˘ )
          </Button>
        </form>
      </div>
    );
  }
}

export default Login;
