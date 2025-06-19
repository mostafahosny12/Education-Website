let body = document.body;
let sidBar = document.querySelector(".slideBar");

document.querySelector(".fa-bars").onclick = () => {
  sidBar.classList.toggle("active");
  body.classList.toggle("active");
};

/////////////////////////////////////////////////////

let showProfile = document.querySelector(".boxProfile");
document.querySelector(".fa-user").onclick = () => {
  showProfile.classList.toggle("active");
};
/////////////////////////////////////////////////////
// Save mode to localstorage
const modeToggle = document.querySelector(".fa-sun");

function updateIcon() {
  if (body.classList.contains("dark")) {
    modeToggle.classList.replace("fa-sun", "fa-moon");
  } else {
    modeToggle.classList.replace("fa-moon", "fa-sun");
  }
}

// تحميل الوضع المحفوظ عند بداية تحميل الصفحة

if (localStorage.getItem("mode") === "dark") {
  body.classList.add("dark");
}
updateIcon(); // تحديث الأيقونة بعد تحميل الصفحة

modeToggle.onclick = () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }
  updateIcon(); // تحديث الأيقونة بعد التبديل
};
/////////////////////////////////////////////////////
let closeSlide=document.querySelector(".closeSlideBar");
closeSlide.onclick = () => {
  sidBar.classList.toggle("active");
  body.classList.toggle("active");
}