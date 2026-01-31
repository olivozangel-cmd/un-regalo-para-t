const PASSWORD = "02022009"; 

function login() {
    const input = document.getElementById("password").value;
    const loginDiv = document.getElementById("login");
    
    if(input === PASSWORD){
        loginDiv.classList.add("open-envelope");
        setTimeout(() => {
            document.getElementById("login-container").style.display = "none";
            document.getElementById("content").style.display = "block";
            const music = document.getElementById("music");
            music.volume = 0.3;
            music.play();
        }, 600);
    } else {
        alert("Contraseña incorrecta 😢");
    }
}

const messages = {
    dulce: "Me gusta cuando sonríes y tus ojos no son la excepción 💖",
    bonito: "Me gustaría verte hacer lo que más te apasiona en esta vida 🌷",
    sincero: "Tienes una energía que no se la he visto a nadie 💫"
};

function showMessage(type) {
    const msgDiv = document.getElementById("message");
    msgDiv.innerText = messages[type];
    const dog = document.getElementById("dog");
    dog.style.transform = "scale(1.2)";
    setTimeout(() => dog.style.transform = "scale(1)", 300);
}

const comfortMessages = [
    "Respira profundo, todo va a estar bien. Eres más fuerte de lo que crees. 🐢",
    "Recuerda que después de la tormenta siempre sale el sol. ☀️",
    "No estás sola, aquí hay alguien que siempre piensa en ti con mucho cariño. ✨",
    "Está bien no estar bien a veces, tómate tu tiempo, como una tortuguita. 💚",
    "Eres una persona maravillosa y este mal momento no define quién eres. 🌸",
    "Tu valor no disminuye por un mal día, ¡eres increíble! 🌈",
    "No te apresures, cada paso cuenta, por más pequeño que sea. 🐾"
];

function showSadMoments() {
    const container = document.getElementById("sad-moments");
    const text = document.getElementById("sad-text");
    const randomMsg = comfortMessages[Math.floor(Math.random() * comfortMessages.length)];
    
    text.innerText = randomMsg;
    container.style.display = "block";
    
    const dog = document.getElementById("dog");
    dog.innerText = "🐶💕";
    setTimeout(() => dog.innerText = "🐶", 3000);
}

function showRoseMessage() {
    alert("Alguien especial te quiere seguir conociendo y saber más de tu maravilloso universo 🌹");
}

function pawMessage() {
    const txt = document.getElementById("paw-text");
    txt.innerText = "¡Eres maravillosa! ✨";
    setTimeout(() => txt.innerText = "", 3000);
}

function spawnWhales() {
    for(let i=0; i<15; i++) {
        setTimeout(() => {
            const whale = document.createElement("div");
            whale.className = "whale-anim";
            whale.innerText = "🐳";
            whale.style.left = Math.random() * 100 + "vw";
            whale.style.fontSize = Math.random() * 20 + 20 + "px";
            document.body.appendChild(whale);
            setTimeout(() => whale.remove(), 3000);
        }, i * 150);
    }
}