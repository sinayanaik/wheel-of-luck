const options = document.getElementById("options");
const add = document.getElementById("add");
const remove = document.getElementById("remove");

//empty arrow function
const empty = arr => arr.length = 0;


let option_no = 2;

function Add_element() {
  option_no++;
  let input = document.createElement("input");
  input.type = "text";
  input.name = `option-${option_no}`;
  input.id = `option-${option_no}`;
  input.className = "option";
  options.appendChild(input);
  options.appendChild(document.createElement("br"));
  
  empty(options_list)
}

function Remove_element() {
  options.removeChild(options.lastElementChild)
  options.removeChild(options.lastElementChild)
  
  empty(options_list)


  option_no--;
  if (option_no <= 0) {
    option_no = 0;
  }
}

add.addEventListener("click", Add_element);
remove.addEventListener("click", Remove_element);
