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
            alert(`📞 calling ${toCall} ${callNum}...`)

            let currentTime = new Date().toLocaleTimeString();
            let newHistory = document.createElement("div");
            newHistory.innerHTML = `
                    <div class="flex justify-between bg-[#fafafa] p-4 rounded-lg text-[1.125rem]">
                        <div>
                            <h1 class=" font-semibold inter">${toCall} </h1>
                            <p class="hind-madurai">${callNum}</p>
                        </div>
                        <p class="flex justify-center items-center hind-madurai">
                            ${currentTime}
                        </p>
                    </div>
        `;
            callHistoryContainer.append(newHistory);
        }
        else {
            alert("you don't have enough coins");
        }
    })

    let clearBtn = document.getElementById("clear-btn");
    clearBtn.addEventListener("click", function () {
        callHistoryContainer.innerHTML = ``;


        // let currentTime = new Date();
        // console.log(currentTime.toLocaleTimeString());



    })
}