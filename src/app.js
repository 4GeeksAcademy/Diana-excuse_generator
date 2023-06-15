window.onload = () => {
  var first = "A ";
  var adj = [
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
    "merchant ",
    "driver ",
    "comedian ",
    "pinecone "
  ];
  var action = [
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
  var where = [
    "on the street",
    "in my brother's house",
    "in my driveway",
    "in front of the school",
    "near to Target",
    "near the toilet",
    "at the police station"
  ];

  // declaring random variables
  var rdm1 = Math.floor(Math.random() * adj.length);
  var rdm2 = Math.floor(Math.random() * noun.length);
  var rdm3 = Math.floor(Math.random() * action.length);
  var rdm4 = Math.floor(Math.random() * possetion.length);
  var rdm5 = Math.floor(Math.random() * where.length);

  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML =
      first +
      adj[rdm1] +
      noun[rdm2] +
      action[rdm3] +
      possetion[rdm4] +
      where[rdm5];
  });
};
