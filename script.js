// Live counter animation
let count = 0;
setInterval(() => {
    if (count < 5) {
        // count++;
        count = count;
        document.getElementById("liveCount").innerText = count;
    }
}, 2000);
