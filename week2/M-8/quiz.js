var username;
var rollnum;
var score = 0;
var displayname;
function saveLogin()
 { 
    // console.log(localStorage.getItem("uname"))
    // console.log(localStorage.getItem("pwd"))
    username = document.getElementById("username").value;
    rollnum = document.getElementById("rollnum").value;
    // alert(password)
    localStorage.setItem("uname", username)
    localStorage.setItem("rollnum", rollnum)
    localStorage.setItem("score", score)
    // document.getElementById("name").innerHTML = "HI "+username+"!"
    // document.getElementById("notshow").style.display = "none"
    window.location.href = "q1.html"

}
function nextPage(qid, name, type, page)
{
    if(type == "radio" && qid == "q1"){
        ql = document.getElementsByName(name)
        for(let i = 0; i < ql.length; i++)
        {
            console.log(ql[i].value)
            if(ql[i].checked && ql[i].value == '4')
            {
                score = Number(getScore()) + 1
                setScore(score)
                // alert(score.valueOf())
                // window.location.href = page;
                
            }
        }
    }

    if(type == "radio" && qid == "q2"){
        ql = document.getElementsByName(name)
        for(let i = 0; i < ql.length; i++)
        {
            console.log(ql[i].value)
            if(ql[i].checked && ql[i].value == '6')
            {
                score = Number(getScore()) + 1
                setScore(score)
                // window.location.href = page;
                
            }
        }
    }

    if(type == "radio" && qid == "q3"){
        ql = document.getElementsByName(name)
        for(let i = 0; i < ql.length; i++)
        {
            console.log(ql[i].value)
            if(ql[i].checked && ql[i].value == '5')
            {
                score = Number(getScore()) + 1
                setScore(score)
                // window.location.href = page;
                
            }
        }
    }
    window.location.href = page;
}

function getScore(){
    return localStorage.getItem("score")
}

function setScore(score){
    localStorage.setItem("score", score)
}

displayname = localStorage.getItem("uname")
displayroll = localStorage.getItem("rollnum")
displayscore = localStorage.getItem("score")
console.log(displayname, score, displayroll)
document.getElementById("setUname").innerHTML = displayname + " - "+displayroll
document.getElementById("result").innerHTML = "Score: "+displayscore+"/3"