const email = "vj2k02@gmail.com";
const url = `https://one00x-data-analysis.onrender.com/assignment?email=${email}`;
// Getting the Assigment Id.
let assigmentId;
fetch(url)
  .then((response) => response.headers.get("x-assignment-id"))
  .then((data) => {
    assigmentId = data;
    console.log(assigmentId);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// console.log(assigmentId)
//  let  assigmentId = "345fe401-55ae-4c90-9e85-705eb4360464"

// process the data

fetch(url)
  .then((response) => response.json())
  .then((datas) => {
    repeatedWord(datas);
  })
  .catch((error) => console.log(`Error: ${error}`));

// collecting the count of each word in an array
function repeatedWord(datas) {
  let countArr = [];
  for (let i = 0; i < datas.length; i++) {
    let currentWord = datas[i];
    let counts = 0;
    for (let j = 0; j < datas.length; j++) {
      if (currentWord == datas[j]) {
        counts++;
      }
    }
    countArr.push(counts);
  }

  // filtering the max number
  let maxCount = Math.max(...countArr);
  // finding the max number index
  let index = countArr.findIndex((count) => count === maxCount);

  console.log(
    `Most Used Word by argon used in Acme Corp’s marketing material ${datas[index]}`
  );
}

// "email\": \"jane@example.com\",\n    \"answer\": \"penetrate-the-market\",\n    \"assignment_id\": \"cbdaa118-734d-4105-90e2-6292b661df7a\"\n}\n"

const result = {
  email: "vj2k02@gmail.com",
  answer: `${data[index]}`,
  assignment_id: `${assigmentId}`,
};

fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(result),
})
  .then((response) => response)
  .then((data) => console.log(data))
  .catch((error) => console.log(`Error: ${error}`));
