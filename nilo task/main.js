// -----------------------طراحی لیست انجام کار ها  --------------------
let text = document.querySelector(".input_add_task");
const add_task = document.querySelector(".addtask");
const clear = document.querySelector(".clear");
let list = document.querySelector(".tasks");
const inputText = document.getElementById("demo");
let btnRemove = document.getElementsByClassName("remove");


if (localStorage.getItem('username')) {
  usernames = JSON.parse(localStorage.getItem('username'));

  usernames.forEach(function (item) {
    list.innerHTML += `<li id='li'><a href='#'>${item}</a><i class="fa fa-times  remove"></i></li>`;
  });
} else {
  usernames = [];
}
removeIt(btnRemove);

add_task.addEventListener("click", project);

function project() {

  let inputvalue = text.value;
  if (inputvalue == "") {

    alert("please enter somthing");
  } else {
    text.value = null;
    if (usernames.includes(inputvalue)) {
      alert("This user already exist!");


    } else {

      usernames.push(inputvalue);
      localStorage.setItem("username", JSON.stringify(usernames));
      list.innerHTML += `<li id='li'><a href='#'>${inputvalue}</a><i class="fa fa-times  remove"></i></li>`;

    }

    removeIt(btnRemove);
  }

}

function clear_local_storage(){
  localStorage.setItem("username",'');
  usernames = [];

}
// حذف کردن ایتم ها به صورت تکی تکی 
function removeIt(btn) {

  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
      this.parentElement.remove();
      let removedText = this.parentElement.innerText;
      console.log(removedText)
      for (let j = 0; j < usernames.length; j++) {
        if (usernames[j] == removedText) {
          usernames.splice(j, 1);
          localStorage.setItem("username", JSON.stringify(usernames));
        }

      }
    })
  }
}


// حذف باهم
// /////-------------------------------clear all tast



clear.addEventListener("click", function () {
  const alla = document.querySelector(".list ");
  alla.innerHTML = "";
  inputText.value = null;
  clear_local_storage(alla)
})






// -----------------------------filllter-----------------------

inputText.addEventListener("keyup", function () {

  const alla = document.querySelectorAll(".list li a");


  for (let i = 0; i < alla.length; i++) {
    

    if (alla[i].innerHTML.includes(inputText.value)) {
      alla[i].parentElement.style.display = "flex";

    } else {
      alla[i].parentElement.style.display = "none";

      
    }
    
  }
});




