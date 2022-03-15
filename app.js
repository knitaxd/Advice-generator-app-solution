

// function to get info
let getInfo = async()=>{
    let idRequest = await fetch('https://api.adviceslip.com/advice')
    let idResult = await idRequest.json()
    let HTMLCodeID = `ADVICE #${idResult.slip.id}`
    let HTMLCodeText = `"${idResult.slip.advice}"`
    document.querySelector('.box__element--id').textContent = HTMLCodeID
    document.querySelector('.box__element--text').textContent = HTMLCodeText
}

getInfo();

// Listener to get new advice
let reroll = document.getElementById('box__element--button')
reroll.addEventListener('click', () =>{
    getInfo()
})