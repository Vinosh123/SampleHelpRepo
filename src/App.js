import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./LoginForm";
import Dashboard from "./Dashboard";
import NewRegistration from "./NewRegistration";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { useHistory } from "react-router-dom";

function App() {
  let history = useHistory();
  const handleLogout = () => {
    history.push("/");
  };
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              style={{ textAlign: "left" }}
            >
              Our Website
            </Typography>
            {window.location.pathname !== '/' && <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>}
          </Toolbar>
        </AppBar>
      </Box>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/registration" component={NewRegistration} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
