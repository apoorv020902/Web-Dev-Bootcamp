var a = document.querySelectorAll("button");

for(i=0; i<a.length; i++) {
    a[i].addEventListener("click", handleClick);
}

function handleClick() {
    alert("I got clicked!");
}