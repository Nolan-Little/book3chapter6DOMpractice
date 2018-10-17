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
// function to create an element based on given arguments
const elementConstructor = (element, title, addedStyle, setStyle)=> `
  <${element} class= "${setStyle} ${addedStyle}">${title}</${element}>
`


//function to call the elements constructor providing differences for pass or fail
const student = (name, classes, info, status) => `
    <div class="studentCard bordered dashed">
        ${elementConstructor("h1", name, status, " xx-large bordered dashed")}
        ${elementConstructor("section", classes, "section--padded", "bordered dashed")}
        ${elementConstructor("aside", info, "pushRight")}
    </div>
    ` 



const container = document.querySelector("#container")

// for loop to determine pass or fail and call appropriate function to append to DOM
let studentComponent = " "
for (each of students) {
  if (each.score >= 60) { 
    studentComponent = student(each.name, each.class, each.info, "passing");
    container.innerHTML += studentComponent;
  } else {
    studentComponent = student(each.name, each.class, each.info, "failing");
    container.innerHTML += studentComponent;
  }
}



