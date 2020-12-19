const fs = require("fs");
const path = require("path");

fs.copyFileSync(
  path.resolve(__dirname, `../src/App.tsx`),
  path.resolve(__dirname, `../components/app/App.tsx`)
);
