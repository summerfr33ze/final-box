const form = document.querySelector("form")
const submitButton = document.querySelector("button")
const warningBox = document.querySelector(".warning-box")
const boxer = document.querySelector("#boxer")
const line = document.querySelector("#line")
const tammy = document.querySelector("#tammy")
const boxQty = document.querySelector("#box-qty") 

submitButton.addEventListener("click", (e) => {
    e.preventDefault()
    let count = 0

    if (boxer.value.toLowerCase() == "heidi" || "kurt" || "harry"){
        count += 1
    }

    if (line.value == 8 || line.value == "eight") {
        count += 2
    }

    if (line.value == 9 || line.value == 10 || line.value == "nine" || line.value == "ten" ){
        count += 1
    }

    if (tammy.value.toLowerCase() == "yes"){
        count += 2
    }

    if (boxQty > 20){
        count += 1
    }

    console.log(count)

    let highValuePhrases = ["SOMEBODY CALL 911 CUZ SHORTY FIRE BURNIN ON THE DANCE FLOOR", "SMOKY THE BEAR SAYS: ONLY YOU CAN PREVENT BOX FIRES", "JUSTIN MIGHT AS WELL PUT A BLINDFOLD ON AND SLAP AN NCMR ON THIS SHIT", "WE DIDNT START THE FIRE, IT WAS ALWAYS BURNIN SINCE THE SHIFT OF MORNING", "OOPS THEY WERE SUPPOSED TO BE 96 BAGS"]
    let midValuePhrases = ["STAY FROSTY GUYS, WE PICKED THIS UP FROM FIRST SHIFT", "DONT TAKE THE SCALE TO LINE 14, I MIGHT NEED IT","ID RATHER SIT THROUGH AN HOUR OF GEMBA THAN BOX THIS KIT", "DR KEVINNNNNN", "I FORGOT TO ASK FOR A COUNT"]
    let lowValuePhrases = ["COUNT'S ON. SEEMS SUSPICIOUS BUT OK", "BILL HELPED YOU WITH YOUR KIT SO YOU COULD FOCUS ON YOUR LINE", "JIMMY MUSTVE REMEMBERED TO GET YOU THE RIGHT BOXES THIS TIME", "I GUESS CHRIS COMPLAIN TOOK HIS MEDS TODAY", "JIMMILY FOUND HER LOST LABEL BEFORE WE 100 PERCENTED THE KIT"]

    let randomNum = Math.floor(Math.random() * 5)

    if (count >= 5){
        warningBox.textContent = highValuePhrases[randomNum]
    }

    else if (count >= 3 && count < 5){
        warningBox.textContent = midValuePhrases[randomNum]
    }

    else {
        warningBox.textContent = lowValuePhrases[randomNum]
    }
})