import React from 'react';
import { CssBaseline } from "@material-ui/core";
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';


import NavBar from "./components/NavBar";

const theme = createMuiTheme({
//   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  background: 'red'
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div className="App">
                <h1>hello</h1>
                <NavBar cl={{lable:'my'}}/>
            </div>
        </ThemeProvider>
    );
}

export default App;
