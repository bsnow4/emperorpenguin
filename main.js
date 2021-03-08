const time=document.querySelector("#timestamp")
time.innerHTML=document.lastModified;

function getVote(vote){
    if (vote === "0"){
        window.location.replace("https://www.youtube.com/watch?v=MfstYSUscBc")
    }
    else {
        window.location.replace("https://youtu.be/thITTcHY01c?t=142");
    }
}