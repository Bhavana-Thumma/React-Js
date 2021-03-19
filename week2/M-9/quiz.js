var username;
var rollnum;
var score = 0;
var chked = 0;
var displayname;
var content;

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
    localStorage.setItem("chked", chked)
    // document.getElementById("name").innerHTML = "HI "+username+"!"
    // document.getElementById("login").style.display = "none"
    window.location.href = "q1.html"

}

function loadDoc() {
    var s = ""
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        quejson = JSON.parse(this.responseText)
        localStorage.setItem("quejson", JSON.stringify(quejson))
        for(let e=0; e< quejson.length; e++)
        {
            s+='<form id='+'\"'+e+'\"'+'name = \"forms\"'+'>'+'<p class="lead">'+(e+1)+". "+quejson[e][e+1]+"</p>"+
            "<div class='form-check'>"+
            '<input class="form-check-input" type="radio" name='+'\"'+e+'\"' +'id="exampleRadios1" value='+"\""+(quejson[e]["a"]).toString()+"\""+' >'+
            '<label class="form-check-label" for="exampleRadios1">'+
            quejson[e]['a']+
            '</label>'+
            '</div>'+
            "<div class='form-check'>"+
            '<input class="form-check-input" type="radio" name='+'\"'+e+'\"'+' id="exampleRadios1" value='+"\""+(quejson[e]["b"]).toString()+"\""+' >'+
            '<label class="form-check-label" for="exampleRadios1">'+
            quejson[e]['b']+
            '</label>'+
            '</div>'+
            "<div class='form-check'>"+
            '<input class="form-check-input" type="radio" name='+'\"'+e+'\"'+' id="exampleRadios1" value='+"\""+(quejson[e]["c"]).toString()+"\""+' >'+
            '<label class="form-check-label" for="exampleRadios1">'+
            quejson[e]['c']+
            '</label>'+
            '</div>'+
            "<div class='form-check'>"+
            '<input class="form-check-input" type="radio" name='+'\"'+e+'\"'+' id="exampleRadios1" value='+"\""+(quejson[e]["d"]).toString()+"\""+' >'+
            '<label class="form-check-label" for="exampleRadios1">'+
            quejson[e]['d']+
            '</label>'+
            '</div>'+
            '</div><br>'+'</form>'+
            '<hr class="my-4">'

        }
        // s += quejson[0].answer;
        console.log(s)
        document.getElementById("content").innerHTML = s
      }
    };
    xhttp.open("GET", "test.json", true);
    xhttp.send();
}
loadDoc()

function dothis(ct)
{
    forms = document.getElementsByName("forms"); 
    rj = JSON.parse(localStorage.getItem("quejson"))
    for (i = 0; i < forms.length; i++) 
    {
        for (j = 0; j < rj.length; j++)
        {  
            
            if(forms[i].id == j){

                // alert(rj[j]['answer'])
                s= j.toString()
                options = document.getElementsByName(s)
                for(let i = 0; i < options.length; i++)
                {
                    // console.log(options[i].value)
                    if(options[i].checked && options[i].value == rj[j]['answer'])
                    {
                        chked = Number(localStorage.getItem("chked")) + 1
                        localStorage.setItem("chked", chked)
                        console.log(options[i].value)
                        score = Number(getScore()) + 1
                        setScore(score)
                        
                    }
                }
                
            }
        }
    }

    document.getElementById("result").innerHTML=dispScore()
    setScore(0)
    localStorage.setItem("chked", 0)
    document.getElementById("content").style.display = "none"
    document.getElementById("bt").style.display = "none"
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
console.log(displayname, displayroll)
document.getElementById("setUname").innerHTML = displayname + " - "+ displayroll
function dispScore(){
return document.getElementById("result").innerHTML = "Score: "+localStorage.getItem("score")+"/10" + "<br>Attempted: "+localStorage.getItem("chked")+"/10"}