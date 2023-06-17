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


  let random1 = Math.floor(Math.random() * subject.length);
  let random2 = Math.floor(Math.random() * noun.length);
  let random3 = Math.floor(Math.random() * verb.length);
  let random4 = Math.floor(Math.random() * possetion.length);
  let random5 = Math.floor(Math.random() * place.length);

  return (first + subject[random1] + noun[random2] + verb[random3] + possetion[random4] + place[random5]);

};

