// Filename - Header.js

import * as React from "react";
import Button from "@mui/material/Button";

export default function header() {
  return (
    <div className="bg-red-900 min-h-12 flex justify-center">
      <Button color="secondary" size="large" variant="text"  style={{color: "white"}}>
        Home
      </Button>
    </div>
  );
}
