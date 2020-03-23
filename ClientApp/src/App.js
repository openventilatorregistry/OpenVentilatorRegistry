import React from 'react';
import { Provider } from "react-redux";
import configureStore from "./store/configureStore"
import './App.css';
import Main from './components/Main';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import styles from './MUITheme'

const store = configureStore();

// const theme = createMuiTheme({
//   palette: {
//     type: 'dark',
//   },
// });

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MuiThemeProvider theme={styles}>
          <CssBaseline />
          <Main />
        </MuiThemeProvider>
      </Provider>
    </div>
  );
}

export default App;

