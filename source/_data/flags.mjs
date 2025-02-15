import fs from "fs";
import path from "path";

const svgs = (dir) =>
  fs
    .readdirSync(dir)
    .filter((f) => path.extname(f) === ".svg")
    .map((f) => ({
      k: path.parse(f).name,
      v: fs.readFileSync(path.join(dir, f), "utf8"),
    }))
    .reduce((a, { k, v }) => {
      a[k] = v;
      return a;
    }, {});

const srcPath = "countries-data/data";
export default () => svgs(path.join(process.cwd(), srcPath));
