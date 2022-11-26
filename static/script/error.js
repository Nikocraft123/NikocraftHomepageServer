var seconds = 10;
var info = document.getElementById("info")

function redirect(){
    if (seconds <= 0){
        window.location = "/";
    } else {
        seconds--;
        info.innerHTML = "Redirect to Home in " + seconds + " seconds ..."
        setTimeout("redirect()", 1000)
    }
}