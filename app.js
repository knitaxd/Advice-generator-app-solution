

// function to get ID
let getID = async()=>{
    let idRequest = await fetch('https://api.adviceslip.com/advice')
    let idResult = await idRequest.json()
    return console.log(idResult.slip.id)
}
getID()