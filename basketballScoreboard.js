let countHome=0
let countGuest=0
let x
let idname
let homeScore;
let guestScore;
function increment(x,idname)
{
    if(idname=="Home")
    {
        homeScore=document.getElementById(idname)
        countHome+=x
        homeScore.innerText=countHome
    }
    else if(idname=="Guest")
    {
        guestScore=document.getElementById(idname)
        countGuest+=x
        guestScore.innerText=countGuest
    }
}


