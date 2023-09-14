let input = document.querySelector("#field1");
let input2 = document.querySelector("#field2");
let flower = document.querySelector("#icon");

input.addEventListener("mouseover", function() {
    flower.style.filter = 'blur(0px)';
})

input2.addEventListener("mouseover", function() {
    flower.style.filter = 'blur(0px)';
})

input.addEventListener("mouseleave", function() {
    flower.style.filter = 'blur(5px)';
})

input2.addEventListener("mouseleave", function() {
    flower.style.filter = 'blur(5px)';
})