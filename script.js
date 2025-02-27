const comments = [
    "SpeedDemon: Report these profiles immediately!",
    "GamerX: This is a serious issue!",
    "ShadowHunter: Stay safe out there, folks!",
    "NightRider: I almost got scammed yesterday!",
    "WarriorQueen: Thanks for the warning!",
    "CyberNinja: Scammers are everywhere!",
    "ProGamer: Keep an eye out, guys!",
    "StealthMode: Do not engage with these accounts!",
    "GameMaster: I reported them!",
    "NoScopeLegend: These guys are the worst!"
];

function updateComments() {
    let commentIndex = 0;
    const commentElement = document.getElementById("liveComments");
    setInterval(() => {
        commentElement.style.opacity = "0";
        setTimeout(() => {
            commentElement.innerText = comments[commentIndex];
            commentElement.style.opacity = "1";
            commentIndex = (commentIndex + 1) % comments.length;
        }, 500);
    }, 2000);
}

window.onload = updateComments;
