const fs = require("fs");

function findDuplicates(questions) {
    const hash = {};
    const duplicates = [];
    for (const question of questions) {
      if (hash[question]) {
        duplicates.push(question);
      } else {
        hash[question] = true;
      }
    }
    return duplicates;
  }

fs.readFile(`./result.json`, "utf8", function (err, data) {
    const result = JSON.parse(data);

    const duplicates = findDuplicates(result.map(json => json.question.slice(10)));
    console.log(duplicates);
    
});
