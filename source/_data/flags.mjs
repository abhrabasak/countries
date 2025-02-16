import fs from "fs";
import path from "path";
import { DOMParser, XMLSerializer } from "xmldom";

// TODO: Migrate to https://svgo.dev/
const processSvg = (originalSvg, width) => {
  const doc = new DOMParser().parseFromString(originalSvg, "image/svg+xml");
  const svg = doc.documentElement;
  const [x, y, w, h] = svg.getAttribute("viewBox").split(" ").map(Number);

  svg.setAttribute("width", `${width}`);
  svg.setAttribute("height", `${(width * h) / w}`);
  return new XMLSerializer().serializeToString(doc);
};

const svgs = (dir) =>
  fs
    .readdirSync(dir)
    .filter((f) => path.extname(f) === ".svg")
    .map((f) => ({
      k: path.parse(f).name,
      v: processSvg(fs.readFileSync(path.join(dir, f), "utf8"), 200),
    }))
    .reduce((a, { k, v }) => {
      a[k] = v;
      return a;
    }, {});

// https://github.com/lipis/flag-icons
const srcPath = "node_modules/flag-icons/flags/4x3";
export default () => svgs(path.join(process.cwd(), srcPath));
