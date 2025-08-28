// Heart Icons function;
const hearts = document.getElementsByClassName("heart-btn")
let heartCount = Number(document.getElementById("heart-count").innerText);
for (let heart of hearts) {
    heart.addEventListener("click", function () {
        heartCount = heartCount + 1;
        document.getElementById("heart-count").innerText = heartCount;
    })
}

// Call Buttons function