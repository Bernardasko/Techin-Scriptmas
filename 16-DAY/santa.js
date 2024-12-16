const alphaMorse = {
  A: ".-", 
  B: "-...", 
  C: "-.-.", 
  D: "-..", 
  E: ".", 
  F: "..-.", 
  G: "--.", 
  H: "....", 
  I: "..", 
  J: ".---", 
  K: "-.-", 
  L: ".-..",
  M: "--", 
  N: "-.", 
  O: "---", 
  P: ".--.", 
  Q: "--.-", 
  R: ".-.", 
  S: "...", 
  T: "-", 
  U: "..-", 
  V: "...-", 
  W: ".--", 
  X: "-..-", 
  Y: "-.--",
  Z: "--..", 
};

function elfMorse(message) {
  return message
    .toUpperCase()
    .split("")
    .map((char) => {
      const morseCode = alphaMorse[char];
      if (!morseCode) return "";
      return morseCode.replace(/\./g, "ho ").replace(/-/g, "hoho ");
    })
    .join(" ");
}

console.log(elfMorse("MERRY"));

