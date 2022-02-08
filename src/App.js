import "./App.css";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import Login from "./components/Login";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#D50C2D",
      },
      secondary: {
        main: "#272838",
      },
    },
  });


  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <h1>✧･ﾟ:* Bienvenida ✧･ﾟ: *</h1>
          <div id="heart"></div>
        </header>
        <br />
        <body className="App-body">
          <Login></Login>
        </body>

        <footer>
          <br />
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
