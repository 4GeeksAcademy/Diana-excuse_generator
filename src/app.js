window.onload = () => {
  var first = "A ";
  var subject = [
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
  var noun = [
    "jogger ",
    "racoon ",
    "dog ",
    "theater musician ",
    "driver ",
    "doctor ",
    "pinecone "
  ];
  var verb = [
    "took my ",
    "kick my ",
    "yelled at my ",
    "kicked my ",
    "stole my ",
    "burned my ",
    "bit my ",
    "hit my "
  ];
  var possetion = [
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
  var place = [
    "on the street",
    "in my girlfriend's house",
    "in my neighborhood",
    "in front of the museum",
    "near to Walmart",
    "near the kitchen",
    "at the airport"
  ];


  var random1 = Math.floor(Math.random() * subject.length);
  var random2 = Math.floor(Math.random() * noun.length);
  var random3 = Math.floor(Math.random() * verb.length);
  var random4 = Math.floor(Math.random() * possetion.length);
  var random5 = Math.floor(Math.random() * place.length);

  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML =
      first +
      subject[random1] +
      noun[random2] +
      verb[random3] +
      possetion[random4] +
      place[random5];
  });
};
