import React from "react";
import { Button, Typography, Link } from "@material-ui/core";

function Home() {
  return (
    <div>
      <Link href="/about" underline="hover">
        Click here to go somewhere else
      </Link>
      <Typography variant="h1" gutterBottom={true}>
        PWA/Material UI test
      </Typography>
      <Button variant="contained" color="primary" size="large">
        LIKE AND SUBSCRIBE
      </Button>
    </div>
  );
}

export default Home;
