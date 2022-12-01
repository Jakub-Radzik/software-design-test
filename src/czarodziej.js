//
//   {
//     "id": 1030,
//     "question": "",
//     "img": "",
//     "answers": [
//       {
//         "content": ""
//       },
//       {
//         "content": ""
//       },
//       {
//         "content": ""
//       },
//       {
//         "content": ""
//       }
//     ]
//   }

const fs = require("fs");

const resultArray = [];

const initialObj = {
  id: 0,
  question: "",
  answers: [],
};

let idx = Math.floor(Math.random() * 9999999999);

const n = 7;

fs.readFile(`./baza1/DIR2/3${n}0.txt`, "utf8", function (err, data) {
  let myObj1 = { ...initialObj };
  myObj1.answers = [];

  if (err) {
    console.log(err);
  }
  let data1 = data.split("\r\n");
  let answerCode = data1[0].substring(2).split("");
  myObj1.question = data1[1];
  myObj1.id = idx++;

  //iterate answers
  for (let j = 2; j < data1.length - 1; j++) {
    let answer = data1[j];
    myObj1.answers.push({ content: answer });
  }

  for (let k = 0; k < myObj1.answers.length; k++) {
    if (answerCode[k] === "1") {
      myObj1.answers[k].correct = true;
    }
  }

  console.log(JSON.stringify(myObj1) + ",");
});

fs.readFile(`./baza1/DIR2/3${n}1.txt`, "utf8", function (err, data) {
  let myObj1 = { ...initialObj };
  myObj1.answers = [];

  if (err) {
    console.log(err);
  }
  let data1 = data.split("\r\n");
  let answerCode = data1[0].substring(2).split("");
  myObj1.question = data1[1];
  myObj1.id = idx++;

  //iterate answers
  for (let j = 2; j < data1.length - 1; j++) {
    let answer = data1[j];
    myObj1.answers.push({ content: answer });
  }

  for (let k = 0; k < myObj1.answers.length; k++) {
    if (answerCode[k] === "1") {
      myObj1.answers[k].correct = true;
    }
  }

  console.log(JSON.stringify(myObj1) + ",");
});

fs.readFile(`./baza1/DIR2/3${n}2.txt`, "utf8", function (err, data) {
  let myObj1 = { ...initialObj };
  myObj1.answers = [];

  if (err) {
    console.log(err);
  }
  let data1 = data.split("\r\n");
  let answerCode = data1[0].substring(2).split("");
  myObj1.question = data1[1];
  myObj1.id = idx++;

  //iterate answers
  for (let j = 2; j < data1.length - 1; j++) {
    let answer = data1[j];
    myObj1.answers.push({ content: answer });
  }

  for (let k = 0; k < myObj1.answers.length; k++) {
    if (answerCode[k] === "1") {
      myObj1.answers[k].correct = true;
    }
  }

  console.log(JSON.stringify(myObj1) + ",");
});

//   fs.readFile(`./baza1/DIR2/3${n}3.txt`, "utf8", function (err, data) {
//     let myObj1 = { ...initialObj };
//     myObj1.answers = [];

//     if (err) {
//       console.log(err);
//     }
//     let data1 = data.split("\r\n");
//     let answerCode = data1[0].substring(2).split("");
//     myObj1.question = data1[1];
//     myObj1.id = idx++;

//     //iterate answers
//     for (let j = 2; j < data1.length - 1; j++) {
//       let answer = data1[j];
//       myObj1.answers.push({ content: answer });
//     }

//     for (let k = 0; k < myObj1.answers.length; k++) {
//       if (answerCode[k] === "1") {
//         myObj1.answers[k].correct = true;
//       }
//     }

//     console.log(JSON.stringify(myObj1) + ",");
//   });

//   fs.readFile(`./baza1/DIR2/3${n}4.txt`, "utf8", function (err, data) {
//     let myObj1 = { ...initialObj };
//     myObj1.answers = [];

//     if (err) {
//       console.log(err);
//     }
//     let data1 = data.split("\r\n");
//     let answerCode = data1[0].substring(2).split("");
//     myObj1.question = data1[1];
//     myObj1.id = idx++;

//     //iterate answers
//     for (let j = 2; j < data1.length - 1; j++) {
//       let answer = data1[j];
//       myObj1.answers.push({ content: answer });
//     }

//     for (let k = 0; k < myObj1.answers.length; k++) {
//       if (answerCode[k] === "1") {
//         myObj1.answers[k].correct = true;
//       }
//     }

//     console.log(JSON.stringify(myObj1) + ",");
//   });

//   fs.readFile(`./baza1/DIR2/3${n}5.txt`, "utf8", function (err, data) {
//     let myObj1 = { ...initialObj };
//     myObj1.answers = [];

//     if (err) {
//       console.log(err);
//     }
//     let data1 = data.split("\r\n");
//     let answerCode = data1[0].substring(2).split("");
//     myObj1.question = data1[1];
//     myObj1.id = idx++;

//     //iterate answers
//     for (let j = 2; j < data1.length - 1; j++) {
//       let answer = data1[j];
//       myObj1.answers.push({ content: answer });
//     }

//     for (let k = 0; k < myObj1.answers.length; k++) {
//       if (answerCode[k] === "1") {
//         myObj1.answers[k].correct = true;
//       }
//     }

//     console.log(JSON.stringify(myObj1) + ",");
//   });

//   fs.readFile(`./baza1/DIR2/3${n}6.txt`, "utf8", function (err, data) {
//     let myObj1 = { ...initialObj };
//     myObj1.answers = [];

//     if (err) {
//       console.log(err);
//     }
//     let data1 = data.split("\r\n");
//     let answerCode = data1[0].substring(2).split("");
//     myObj1.question = data1[1];
//     myObj1.id = idx++;

//     //iterate answers
//     for (let j = 2; j < data1.length - 1; j++) {
//       let answer = data1[j];
//       myObj1.answers.push({ content: answer });
//     }

//     for (let k = 0; k < myObj1.answers.length; k++) {
//       if (answerCode[k] === "1") {
//         myObj1.answers[k].correct = true;
//       }
//     }

//     console.log(JSON.stringify(myObj1) + ",");
//   });

//   fs.readFile(`./baza1/DIR2/3${n}7.txt`, "utf8", function (err, data) {
//     let myObj1 = { ...initialObj };
//     myObj1.answers = [];

//     if (err) {
//       console.log(err);
//     }
//     let data1 = data.split("\r\n");
//     let answerCode = data1[0].substring(2).split("");
//     myObj1.question = data1[1];
//     myObj1.id = idx++;

//     //iterate answers
//     for (let j = 2; j < data1.length - 1; j++) {
//       let answer = data1[j];
//       myObj1.answers.push({ content: answer });
//     }

//     for (let k = 0; k < myObj1.answers.length; k++) {
//       if (answerCode[k] === "1") {
//         myObj1.answers[k].correct = true;
//       }
//     }

//     console.log(JSON.stringify(myObj1) + ",");
//   });

//   fs.readFile(`./baza1/DIR2/3${n}8.txt`, "utf8", function (err, data) {
//     let myObj1 = { ...initialObj };
//     myObj1.answers = [];

//     if (err) {
//       console.log(err);
//     }
//     let data1 = data.split("\r\n");
//     let answerCode = data1[0].substring(2).split("");
//     myObj1.question = data1[1];
//     myObj1.id = idx++;

//     //iterate answers
//     for (let j = 2; j < data1.length - 1; j++) {
//       let answer = data1[j];
//       myObj1.answers.push({ content: answer });
//     }

//     for (let k = 0; k < myObj1.answers.length; k++) {
//       if (answerCode[k] === "1") {
//         myObj1.answers[k].correct = true;
//       }
//     }

//     console.log(JSON.stringify(myObj1) + ",");
//   });

//   fs.readFile(`./baza1/DIR2/3${n}9.txt`, "utf8", function (err, data) {
//     let myObj1 = { ...initialObj };
//     myObj1.answers = [];

//     if (err) {
//       console.log(err);
//     }
//     let data1 = data.split("\r\n");
//     let answerCode = data1[0].substring(2).split("");
//     myObj1.question = data1[1];
//     myObj1.id = idx++;

//     //iterate answers
//     for (let j = 2; j < data1.length - 1; j++) {
//       let answer = data1[j];
//       myObj1.answers.push({ content: answer });
//     }

//     for (let k = 0; k < myObj1.answers.length; k++) {
//       if (answerCode[k] === "1") {
//         myObj1.answers[k].correct = true;
//       }
//     }

//     console.log(JSON.stringify(myObj1) + ",");
//   });
