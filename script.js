// Typing Effect
const text = ["Creative Developer", "Frontend Engineer", "Problem Solver"];
let i = 0, j = 0;
const typing = document.querySelector(".typing");

function type() {
    if (j < text[i].length) {
        typing.innerHTML += text[i][j];
        j++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (j > 0) {
        typing.innerHTML = text[i].substring(0, j - 1);
        j--;
        setTimeout(erase, 50);
    } else {
        i = (i + 1) % text.length;
        setTimeout(type, 500);
    }
}
type();

// Custom Cursor
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});
