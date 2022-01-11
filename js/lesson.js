// const arr = [1, 2, 3, 4, 5];
// console.dir(arr);

// for (const item of arr) {
//   console.log(item);
// }
// console.log("=========================");

// arr.forEach((item, idx, arr) => console.log(item));

// ========== recursion ==============

const folders = [
  {
    name: "My photo",
    folders: [
      {
        name: "1.jpg",
        folders: [{ name: "1.jpg" }, { name: "2.jpg" }, { name: "2222.jpg" }],
      },
      { name: "2.jpg" },
      {
        name: "2222.jpg",
        folders: [{ name: "1.jpg" }, { name: "2.jpg" }, { name: "2222.jpg" }],
      },
    ],
  },
  {
    name: "Parents",
    folders: [
      { name: "1.jpg" },
      { name: "2.jpg" },
      { name: "2222.jpg" },
      { name: "1.jpg" },
      { name: "2.jpg" },
      { name: "2222.jpg" },
    ],
  },
];

const createUl = (arr) => {
  let res = "";
  arr.forEach(
    (element) =>
      (res += `<li><h2>${element.name}</h2>${
        element.folders
          ? `<ul class="list">${createUl(element.folders)}</ul>`
          : ""
      }</li>`)
  );
  return `<ul class="list">${res}</ul>`;
};

const markup = createUl(folders);
// console.log(markup);
document.querySelector(".folders").innerHTML = markup;

// // const createFolders = (arr) => {};

// ============== closure =============

const constructor = (init) => (step) => (init += step);

// function constructor(init) {
//   return function (step) {
//     init += step;
//     console.log(init);
//   };
// }

const volume = constructor(50);
volume(10);
volume(10);
volume(-10);
volume(-10);
volume(-10);

console.log("+==============+");

const zoom = constructor(100);
zoom(20);
zoom(20);
zoom(-20);
zoom(-20);

{
  /* <ul>
  <li>
    <h2>My photo</h2>
    <ul>
      <li>
        <h3>2006</h3>
        <ul>
          <li>"1.jpg"</li>
          <li>"2.jpg"</li>
        </ul>
      </li>
      <li>
        <h3>2007</h3>
        <ul>
          <li>"2222.jpg"</li>
        </ul>
      </li>
    </ul>
  </li>
  <li></li>
</ul>; */
}

// function getRes(a) {
//   console.log(a);
//   return function (b) {
//     console.log(b);
//     return function (c) {
//       console.log(c);
//       return function (d) {
//         console.log(d);
//         return function (e) {
//           console.log(e);
//         };
//       };
//     };
//   };
// }

// getRes(5)(6)(7)(8);

const getSum = (a, b) => a + b;

const getRes = (a) => (b) => (callBack) => console.log(callBack(a, b));
getRes(5)(10)(getSum);
