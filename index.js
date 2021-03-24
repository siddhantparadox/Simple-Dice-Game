

const winner = ()=>{
    let randomNumber1= Math.floor(Math.random()*6)+1;
    let randomNumber2= Math.floor(Math.random()*6)+1;

    const randomDice1=document.querySelector(".img1").setAttribute("src",`./images/dice${randomNumber1}.png`)
    const randomDice2=document.querySelector(".img2").setAttribute("src",`./images/dice${randomNumber2}.png`)

    if (randomNumber1>randomNumber2){
        document.querySelector(".container h1").textContent="🚩 Player 1 Wins!"
    } else if (randomNumber1===randomNumber2){
        document.querySelector(".container h1").textContent="Draw!"
    } else{
        document.querySelector(".container h1").textContent="Player 2 Wins! 🚩"
    }
}
winner()