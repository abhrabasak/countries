import fs from "fs";
import path from "path";

const srcPath = "countries-data/dist/countries-unescaped.json";
export default () =>
  JSON.parse(fs.readFileSync(path.join(process.cwd(), srcPath), "utf-8"));
