// document.querySelector(“button”).addEventListener(“click”, handleClick);

document.querySelector("button").addEventListener("click", handleClick);

function handleClick() {
    const timeString = document.getElementById("time").value
    const text = greet(timeString)
    displayMessage(text)
}

function displayMessage(msg) {
    document.getElementById("greeting").textContent = msg;
}

function greet(timeStr) {
    const hour = parseInt(timeStr, 10);
    if (hour < 12) return "Good Morning"
    if (hour > 17) return "Good Evening"
    return "Good Afternoon"
}