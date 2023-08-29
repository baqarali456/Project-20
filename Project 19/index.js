const container = document.querySelector(".container");

let arr = [
  "Youtuber",
  "Web Developer",
  "DevOps",
  "Freelancer",
  "Software Engineer",
];

let charIndex = 0;
let countindex = 0;


// function update(){
//     countindex++;

//     container.innerHTML = `<h1>I am a ${arr[charIndex].slice(0,countindex)} </h1>`;

//      if(countindex === arr[charIndex].length){
//         charIndex++;
//         countindex = 0;
//      }
//      if(charIndex === arr.length){
//         charIndex = 0;
//      }
//     setTimeout(()=>{
//      update();
//     },400)
// }
// update();

function update() {
    countindex++;
    container.innerHTML = `<h1>I am a ${arr[charIndex].slice(0,countindex)} </h1>`;
    if(countindex === arr[charIndex].length){
        charIndex++;
        countindex = 0;
    }
    if(charIndex === arr.length){
        charIndex = 0;
    }
    setTimeout(()=>{
        update()
    },400)
}
update();


