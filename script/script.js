// написать обработчик, который позволит выводить строку "привет"
// при нажатии на кнопку .change_mode

const change_btn = document.querySelector(".change_mode");
const main_text = document.querySelector(".main p");
const textBig_size_btn = document.querySelector(
  ".text-size-btns .textBig_size_btn"
);
const textSmall_size_btn = document.querySelector(
  ".text-size-btns .textSmall_size_btn"
);
const text_input = document.querySelector(".text_input");
let fontSize;

if (localStorage.getItem("fontSize")) {
    fontSize = +localStorage.fontSize;
    main_text.style.fontSize = fontSize + "px";
  } else {
    fontSize = 15;
    localStorage.setItem("fontSize", fontSize);
    
  }
  

main_text.style.fontSize = fontSize + "px";

if (localStorage.getItem("mode") === "dark") {
  document.body.classList.add("dark");
}

change_btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }
});

textBig_size_btn.addEventListener("click", () => {
  fontSize++;
  //    const current_fontSize = parseInt(main_text.style.fontSize);
  main_text.style.fontSize = fontSize + "px";
  localStorage.setItem("fontSize",fontSize)
});
textSmall_size_btn.addEventListener("click", () => {
  fontSize--;
  // const current_fontSize = parseInt(main_text.style.fontSize);
  main_text.style.fontSize = fontSize + "px";
  localStorage.setItem("fontSize",fontSize)
});


if (localStorage.getItem('text') !== null) {
  document.getElementById('editable').value = localStorage.getItem('text');
}
document.addEventListener('keyup', function(e) {
  localStorage.setItem('text', document.getElementById('editable').value);
});
