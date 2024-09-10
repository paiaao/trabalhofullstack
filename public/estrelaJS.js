function createStars(className, numStars) {
    const container = document.querySelector(className);
    for (let i = 0; i < numStars; i++) {
        let star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.width = `${Math.random() * 3}px`;
        star.style.height = star.style.width;
        star.style.background = 'white';
        star.style.top = `${Math.random() * window.innerHeight}px`;
        star.style.left = `${Math.random() * window.innerWidth}px`;
        container.appendChild(star);
    }
}

createStars('.stars', 50);
createStars('.stars2', 100);
createStars('.stars3', 150);
