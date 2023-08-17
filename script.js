const flyingContainer = document.querySelector('.flying-container');

function createflying() {
    const flying = document.createElement('div');
    flying.className = 'flying';

    const startX = Math.random() * window.innerWidth;

    flying.style.left = startX + 'px';


    flyingContainer.appendChild(flying);

    // Remove flying after animation
    flying.addEventListener('animationend', () => {
        flying.remove();
        createSplash(startX);
    });
}


//splashing// 
function createSplash(x) {
    const splash = document.createElement('div');
    splash.className = 'splash';
    splash.style.left = x + 'px';
    flyingContainer.appendchild(splash);

    splash.addEventListener('animationend', () => {
        splash.remove();
    });
}

function animateflyings() {
    setInterval(() => {
        createflying();
    }, 500);
}


animateflyings();


