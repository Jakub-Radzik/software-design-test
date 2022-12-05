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

let resultArray = [];

const initialObj = {
  id: 0,
  pattern: "",
  question: "",
  answers: [],
};

const generateIndex = () => Math.floor(Math.random() * 9999999999);

const getFromFile = async (index) => {

  fs.readFile(`./qdb/${index}.txt`, "utf8", function (err, data) {
    let answers = []
    if (err) return;
  
    const obj = { ...initialObj };
    obj.answers = [];
    obj.id = generateIndex();
    const lines = data.split("\n");
  
    obj.question = lines[1].replace('\t', '');
    obj.pattern = lines[0].replace('\t', '');
    const pattern = lines[0].slice(2);
    answers = lines.slice(2);
    answers = answers.map((answer) => 
      answer.replace('\t','').slice(4)
    );
    answers = answers.slice(0, pattern.length);

    for(let i = 0; i < answers.length; i++) {
      obj.answers.push({
        content: answers[i],
        correct: pattern[i] === "1",
      })
    }
    resultArray.push(obj);
    console.log(obj);
    if(index===318){
      fs.writeFile('result.json', JSON.stringify(resultArray), function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
    }
  });

}

for(let i = 1; i <= 318; i++) {
  try{
    getFromFile(i);
  }catch(e) {
    console.log(i);
    console.log(e);
  }
}

