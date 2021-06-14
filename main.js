document.addEventListener("keydown", function (event) {
    let key = event.key; //example a or A or s
    let code = event.code; //example KeyA which is a or A
    let codes = ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyW', 'KeyE', 'KeyT', 'KeyY', 'KeyU'];
    let whiteKeys = ['A', 'S', 'D', 'F', 'G', 'H', 'J'];

    if (codes.includes(code)) {
        /* play audio when keydown */
        console.log(`The '${key}' key is pressed`);
        let audioFile = `audio/${key.toUpperCase()}.mp3`
        let audio = new Audio(audioFile);
        audio.play();

        /* color change */
        let currentColor = whiteKeys.includes(key.toUpperCase()) ? "white" : "black";
        document.getElementById(key.toUpperCase()).style.background = "#85C1E9";
        setTimeout(function () {
            document.getElementById(key.toUpperCase()).style.background = currentColor;
        }, 300);

    } else {
        console.log(`The piano does not have the '${key.toUpperCase()}' key`);
    }
});


document.addEventListener('click', function (e) {
    let usedKeys = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'W', 'E', 'T', 'Y', 'U'];
    let whiteKeys = ['A', 'S', 'D', 'F', 'G', 'H', 'J'];

    e = e || window;
    let target = e.target,
        text = target.textContent || target.innerText;

    if (usedKeys.includes(text)) {
        /* play audio when click */
        let audio = new Audio(`audio/${text}.mp3`);
        audio.play();
        console.log(`The '${text}' key is clicked`);

        /* color change */
        let currentColor = whiteKeys.includes(text) ? "white" : "black";
        document.getElementById(text).style.background = "#85C1E9";
        setTimeout(function () {
            document.getElementById(text).style.background = currentColor;
        }, 300);

    } else {
        console.log("That is not part of a key");
    }
}, false);

/*
document.addEventListener("keydown", function(event) {
    if (event.code === 'KeyA') {
        let audio = new Audio("audio/A.mp3");
        audio.play();
        console.log("The 'a' key is pressed.");
    }else if(event.code === 'KeyS'){
        let audio = new Audio("audio/S.mp3");
        audio.play();
        console.log("The 's' key is pressed.");
    }else if(event.code === "KeyD"){
        let audio = new Audio("audio/D.mp3");
        audio.play();
        console.log("The 'd' key is pressed.");
    }else if(event.code === "KeyF"){
        let audio = new Audio("audio/F.mp3");
        audio.play();
        console.log("The 'f' key is pressed.");
    }else if(event.code === "KeyG"){
        let audio = new Audio("audio/G.mp3");
        audio.play();
        console.log("The 'g' key is pressed.");
    }else if(event.code === "KeyH"){
        let audio = new Audio("audio/H.mp3");
        audio.play();
        console.log("The 'h' key is pressed.");
    }else if(event.code === "KeyJ"){
        let audio = new Audio("audio/J.mp3");
        audio.play();
        console.log("The 'j' key is pressed.");
    }else{
        console.log("Warning");
    }
});
 */