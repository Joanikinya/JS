var increaseLikes = document.querySelector("p");
var count = 3;

function add1(){
    count++;
    console.log(count);
    increaseLikes.innerText = count + " like(s)";
}
