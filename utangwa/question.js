let index = 0;
let quiz = [
  {
    question: "Name one of the two periods in History.",
    option:[
      "Pre-History; History",
      "Mediaval History",
      "Information age",
      "Non of the above",
    ],
    answer: 1,
  },
  {
    question: "Identify three branches of History",
    option:[
      "Mythical history; creation history; stories history.",
      "Social history; Economic history; Social history.",
      "Anthropology; Genetics; palaentology; Archaeology.",
      "Written; Unwritten; Culture; Government.",
    ],
    answer: 2,
  },
  {
    question: "Identify the Main linguistic advantage Homo Erectus had over the Homo Habilis",
    option:[
      "Homo erectus was able to walk upright.",
      "Homo habilis was a man with ability.",
      "Home Erectus was able to communicate by speech.",
      "Homo habilis discovered fire.",
    ],
    answer: 3,
  },

  {
    question: "Which of the following is not the consequences of early agriculture in Egypt and Mesopotamia",
    option:[
      "It led to population increase",
      "Led to settled life-Permanent settlement",
      "Led t the development of religion (worship system)",
      "It led to African nationalism",
    ],
    answer: 4,
  },
  {
    question: "Give the Main limitation of barter as a method of exchange during the Trans-Saharan Trade.",
    option:[
      "Lack of  common language / language barrier",
      "Lack of double coincidence of wants",
      "Goods could get perishable before market day",
      "It was difficult to transport bulky goods",
    ],
    answer: 1,
  },
  {
    question: "Give the Main reason why the camel is referred to as the Ship of the desert.",
    option:[
      "It walked straight",
      "It was adapted to desert climate",
      "Because it can go for a long time without food and water.",
      "It has two humps",
    ],
    answer: 3,
  },
  {
    question: "Identidy theories that explain the origin of man",
    option:[
      "Mythical theory; Creation theory; Evolution theory ",
      "Social history; Economic history; Social history",
      "Anthropology; Genetics; palaentology; Archaeology",
      "Written; Unwritten; Culture; Government",
    ],
    answer: 1,
  },
  {
    question: "Which of the following is not the advantages of the use of radio over the newspaper in modern society?",
    option:[
      "Radio can transmit information to all parts of the world",
      "It is cheaper to use a radio than to buy a news paper every day",
      "Radio can be used by both illiterates and the literates",
      "Radio is expensive for purchase",
    ],
    answer: 4,
  },
  {
    question: "Identify one factor that facilitated scientific revolution in Europe from the 14th century.",
    option:[
      "Renaissance time made people to develop interest in research / learning",
      "Developement of Agriculture",
      "Advancement in teechnology",
      "Emergency of industries",
    ],
    answer: 1,
  },
  {
    question: "Identify One factor responsible for the decline of Meroe as an urban centre.",
    option:[
      "Shortage of funds",
      "The rise of Axum",
      "Poor government",
      "All of the above",
    ],
    answer: 2,
  },
  {
    question: "Identify functions of the Omanhene in the ancient kingdom of Ghana",
    option:[
      "Had right to declare war against another Omanhene",
      "Recognized right of Asantehene to impose levis",
      "Attended Odwira Festivals",
      "All of the above",
    ],
    answer: 4,
  },
];

let attempt = 0;
let score = 0;
let wrong  = 0;
let questions = quiz.sort(function(){
  return 0.5 - Math.random();
});

let totalQuestion = questions.length;