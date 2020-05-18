import React from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function App() {
  return (
    <div className="App">
      <Typography variant="h1" gutterBottom="true">
        PWA/Material UI test
      </Typography>
      <Button variant="contained" color="primary" size="large">
        LIKE AND SUBSCRIBE
      </Button>
    </div>
  );
}

export default App;
