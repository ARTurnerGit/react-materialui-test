import React from "react";
import { Typography, Link } from "@material-ui/core";

function About() {
  return (
    <div>
      <Link href="/" underline="hover">
        GO BACK
      </Link>
      <Typography variant="body1" gutterBottom={true}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quia sed
        veritatis modi iste ex non officiis doloremque, magnam aut eligendi illo
        assumenda ut porro, pariatur voluptas velit! In, maxime.
      </Typography>
    </div>
  );
}

export default About;
