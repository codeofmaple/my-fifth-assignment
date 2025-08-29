// Heart Icons functionalities;
const hearts = document.getElementsByClassName("heart-btn")
let heartCount = Number(document.getElementById("heart-count").innerText);
for (let heart of hearts) {
    heart.addEventListener("click", function () {
        heartCount = heartCount + 1;
        document.getElementById("heart-count").innerText = heartCount;
    })
}
// Copy Icons functionalities;
const copyBtns = document.getElementsByClassName("copy-btn")
let copyCount = Number(document.getElementById("copy-count").innerText);

for (let copyBtn of copyBtns) {
    copyBtn.addEventListener("click", function () {
        copyCount = copyCount + 1;
        document.getElementById("copy-count").innerText = copyCount;

        let copyNum = copyBtn.parentNode.parentNode.childNodes[5].innerText;
        navigator.clipboard.writeText(copyNum)
            .then(function() {
                alert(`The number has been copied: ${copyNum}`);
            })
            .catch(function(err) {
                console.error(`Failed to copy the number: ${err}`);
            });
    })
}
// Call Buttons functionalities
let totalCoin = Number(document.getElementById("total-coin").innerText)
let callHistoryContainer = document.getElementById("call-history");

const callBtns = document.getElementsByClassName("call-btn");
for (let callBtn of callBtns) {
    callBtn.addEventListener("click", function () {
        let toCall = callBtn.parentNode.parentNode.childNodes[1].innerText;
        let callNum = callBtn.parentNode.parentNode.childNodes[5].innerText;
        if (totalCoin >= 20) {
            totalCoin = totalCoin - 20;
            document.getElementById("total-coin").innerText = totalCoin;
            // alert(`📞 Calling ${toCall} ${callNum}...`)
            alert(`📞 Calling... \n${toCall} ${callNum}`)



            let currentTime = new Date().toLocaleTimeString();
            let newHistory = document.createElement("div");
            newHistory.innerHTML = `
                    <div class="flex justify-between bg-[#fafafa] p-4 rounded-lg text-[1.125rem]">
                        <div>
                            <h1 class=" font-semibold inter">${toCall} </h1>
                            <p class="hind-madurai">${callNum}</p>
                        </div>
                        <p class="flex justify-center items-center hind-madurai whitespace-nowrap">
                            ${currentTime}
                        </p>
                    </div>
        `;
            callHistoryContainer.append(newHistory);
        }
        else {
            alert("❌ You don't have enough coins. You need at least 20 coins to make a call.");
        }
    })

    let clearBtn = document.getElementById("clear-btn");
    clearBtn.addEventListener("click", function () {
        callHistoryContainer.innerHTML = ``;
    })
}