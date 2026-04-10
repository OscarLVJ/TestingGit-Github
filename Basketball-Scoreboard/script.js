let scoreHome = document.getElementById("scoreHome");
let scoreGuest = document.getElementById("scoreGuest")
let reset = document.querySelectorAll(".reset")



let globalHome=0
let globalGuest=0
  console.log(scoreHome)

function homeScoresOne(){
  globalHome+=1
  scoreHome.textContent = globalHome
}
function homeScoresTwo(){
    globalHome+=2
  scoreHome.textContent = globalHome
}
function homeScoresThree(){
    globalHome+=3
  scoreHome.textContent = globalHome
}
function guestScoresOne(){
    globalGuest+=1
  scoreGuest.textContent = globalGuest
}
function guestScoresTwo(){
  globalGuest+=2
  scoreGuest.textContent = globalGuest
}
function guestScoresThree(){
  globalGuest+=3
  scoreGuest.textContent = globalGuest
}
reset[0].addEventListener("click", ()=>{  
  globalHome=0
  globalGuest=0
  scoreHome.textContent = globalHome
  scoreGuest.textContent = globalGuest
})