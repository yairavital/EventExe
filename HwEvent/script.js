function showOrHide() {
  if (document.getElementById("show").style.display == "none") {
    document.getElementById("show").style.display = "block";
    document.getElementById("show").innerHTML = "li text";
  } else document.getElementById("show").style.display = "none";
}

var item = document.getElementsByClassName("item");
item.addEventListener(onclick(), showOrHide());
