document.addEventListener("keydown", function(event) {
    let key= event.key; //example a or A or s
    let code = event.code; //example KeyA which is a or A
    let codes = ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ',
        'KeyW','KeyE','KeyT','KeyY','KeyU'];

    if(codes.includes(code)){
        console.log(`The '${key}' key is pressed`);
        let audioFile = `audio/${key.toUpperCase()}.mp3`
        let audio =  new Audio(audioFile);
        console.log(`audio/${key.toUpperCase()}.mp3`);
        audio.play();
    } else{
        console.log(`The piano does not have the '${key.toUpperCase()}' key`);
    }
});

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