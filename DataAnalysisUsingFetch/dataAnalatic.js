const email = "vj2k02@gmail.com";
const url = `https://one00x-data-analysis.onrender.com/assignment?email=${email}`;

const fetchData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Something went wrong", error);
  }
};

const getAssignmentId = async () => {
  try {
    const response = await fetch(url);
    const assignmentId = response.headers.get("x-assignment-id");
    if (!assignmentId) {
      throw new Error("Assignment ID not found in response headers");
    }
    return assignmentId;
  } catch (error) {
    throw new Error("Something went wrong", error);
  }
};

function getMostUsedWords(datas) {
  let countArr = {};
  let mostUsedWord = "";
  let maxCount = 0;

  for (let i = 0; i < datas.length; i++) {
    const currentWord = datas[i];
    if (!countArr[currentWord]) {
      countArr[currentWord] = 0;
    }
    countArr[currentWord]++;
    if (countArr[currentWord] > maxCount) {
      maxCount = countArr[currentWord];
      mostUsedWord = currentWord;
    }
  }

  console.log(
    `Most Used Word by argon used in Acme Corp’s marketing material: ${mostUsedWord}`
  );

  return mostUsedWord;
}

const dataAnalysis = async () => {
  try {
    const assignmentId = await getAssignmentId();
    const datas = await fetchData();
    const mostUsedWord = getMostUsedWords(datas);
    const response = await postData(mostUsedWord, assignmentId);
    console.log(assignmentId, mostUsedWord,response)

  } catch (error) {
    console.error(error);
  }
};

dataAnalysis();


async function postData(mostUsedWord, assignmentId) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: "vj2k02@gmail.com",
      answer: mostUsedWord,
      assignment_id: assignmentId,
    }),
  }).then((response) => response)
    .then((data) => data)
    .catch((error) => error);
    
    return response; 
}


const result = {
  email: "vj2k02@gmail.com",
  answer: `learnings`,
  assignment_id: `345fe401-55ae-4c90-9e85-705eb4360464`,
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