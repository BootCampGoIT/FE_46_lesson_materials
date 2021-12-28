const createMarkup = (links, className) => {
  let res = "";
  for (const link of links) {
    res += `<li class="${className}">${link}</li>`;
  }
  return res;
};
const createMarkup1 = (links, className) => {
  let res = "";
  for (const link of links) {
    res += `<li class="${className}">${link}</li>`;
  }
  return res;
};

export { createMarkup, createMarkup1 };

