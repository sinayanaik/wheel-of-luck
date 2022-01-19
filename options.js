const options = document.getElementById("options");
const add = document.getElementById("add");
const remove = document.getElementById("remove");

let option_no = 1;

function Add_element() {
  option_no++;
  let input = document.createElement("input");
  input.type = "text";
  input.name = `option-${option_no}`;
  input.className = "option";
  options.appendChild(input);
  options.appendChild(document.createElement("br"));
}

function Remove_element() {
  options.removeChild(options.lastChild);
  options.removeChild(options.lastChild);

  option_no--;
  if (option_no <= 0) {
    option_no = 0;
  }
}

add.addEventListener("click", Add_element);
remove.addEventListener("click", Remove_element);
