const students = [
  {
      name: "Chris Miller",
      class: "History",
      info: "Failed last exam",
      score: 59
  },
  {
      name: "Courtney Seward",
      class: "History",
      info: "Has completed all homework",
      score: 91
  },
  {
      name: "Garrett Ward",
      class: "History",
      info: "Wonderful at helping other students",
      score: 88
  },
  {
      name: "John Dulaney",
      class: "History",
      info: "Has never missed a class or exam",
      score: 92
  },
  {
      name: "Greg Lawrence",
      class: "History",
      info: "Sub-par performance all around",
      score: 64
  },
  {
      name: "Leah Duvic",
      class: "History",
      info: "Wonderful student",
      score: 97
  },
  {
      name: "Jesse Page",
      class: "History",
      info: "Smokes too much. Distracting.",
      score: 76
  },
  {
      name: "Kevin Haggerty",
      class: "History",
      info: "Falls asleep in class",
      score: 79
  },
  {
      name: "Max Wolf",
      class: "History",
      info: "Talks too much",
      score: 83
  },
  {
      name: "Lissa Goforth",
      class: "History",
      info: "Asks pointless, unrelated questions",
      score: 78
  },
  {
      name: "Tyler Bowman",
      class: "History",
      info: "When was the last time he attended class?",
      score: 48
  },
  {
      name: "Ray Medrano",
      class: "History",
      info: "Needs to contribute to in-class discussions",
      score: 95
  }
]
const elementConstructor = (element, title, addedStyle, setStyle)=>{
  return `<${element} class= "${setStyle} ${addedStyle}">${title}</${element}>`
}

const passingStudent = (name, classes, info) => {
  return `
    <div id="student">
        ${elementConstructor("h1", name, "xx-large passing", "bordered dashed")}
        ${elementConstructor("section", classes, "section--padded", "bordered dashed")}
        ${elementConstructor("aside", info, "pushRight")}
    </div>` 
}
const failingStudent = (name, classes, info) => {
  return `
    <div id="student">
        ${elementConstructor("h1", name, "xx-large failing", "bordered dashed")}
        ${elementConstructor("section", classes, "section--padded", "bordered dashed")}
        ${elementConstructor("aside", info, "pushRight")}
    </div>` 
}

const container = document.querySelector("#container")

let studentComponent = " "
for (each of students) {
  if (each.score >= 60) { 
    studentComponent = passingStudent(each.name, each.class, each.info);
    container.innerHTML += studentComponent;
  } else {
    studentComponent = failingStudent(each.name, each.class, each.info);
    container.innerHTML += studentComponent;
  }
}



