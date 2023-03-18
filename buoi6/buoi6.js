let a = 1
let b = 2
let c = 3
let d = 4

function hello() {
    console.log("hello")
}
hello() 

function sum(x, y) {
    return x + y
} 
 sum(4,5)
console.log(sum(4,5))
let btn = document.getElementById("btn")
console.log(btn);
btn.onclick = function () {
    console.log("click")
}