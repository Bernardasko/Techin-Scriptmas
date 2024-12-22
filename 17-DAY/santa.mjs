import { data } from "./data.mjs";

const sorted = data.sort((a, b) => b.points - a.points);
const top3 = sorted.slice(0, 3);

console.log(top3);