const firstLaterToUpperCase = (str) => {
  let arr = [...str.split(" ")];

  return arr
    .map((e) => e[0].toUpperCase() + e.slice(1).toLowerCase())
    .join(" ");
};
export default firstLaterToUpperCase;
