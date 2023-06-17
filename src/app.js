window.onload = () => {

  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });

};

let generateExcuse = () => {

  let first = "A ";
  let subject = [
    "two headed ",
    "nuclear ",
    "angry ",
    "lonely ",
    "crazy ",
    "glowing ",
    "smelly ",
    "slow ",
    "old "
  ];
  let noun = [
    "jogger ",
    "racoon ",
    "dog ",
    "theater musician ",
    "driver ",
    "doctor ",
    "pinecone "
  ];
  let verb = [
    "took my ",
    "kick my ",
    "yelled at my ",
    "kicked my ",
    "stole my ",
    "burned my ",
    "bit my ",
    "hit my "
  ];
  let possetion = [
    "hand ",
    "car ",
    "watch ",
    "shoe ",
    "cat ",
    "shirt ",
    "keys ",
    "mom ",
    "phone ",
    "sandwich "
  ];
  let place = [
    "on the street",
    "in my girlfriend's house",
    "in my neighborhood",
    "in front of the museum",
    "near to Walmart",
    "near the kitchen",
    "at the airport"
  ];


  let subjectRandom = Math.floor(Math.random() * subject.length);
  let nounRandom = Math.floor(Math.random() * noun.length);
  let verbRandom = Math.floor(Math.random() * verb.length);
  let possetionRandom = Math.floor(Math.random() * possetion.length);
  let placeRandom = Math.floor(Math.random() * place.length);

  return (first + subject[subjectRandom] + noun[nounRandom] + verb[verbRandom] + possetion[possetionRandom] + place[placeRandom]);

};

