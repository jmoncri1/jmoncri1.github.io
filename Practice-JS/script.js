const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');


grandparent.addEventListener("click", e => {
    console.log("grandparent 1")
}, {capture: true}
)

parent.addEventListener("click", e => {
    console.log("parent 1")
})

child.addEventListener("click", e => {
    console.log("child 1")
})

const body = document.body;
body.append("hello");
const div = document.createElement("div");
body.append(div);
div.textContent = "Hello"