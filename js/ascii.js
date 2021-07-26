let animations;
let currentStep = 0;
let isBlank = true;
let isTurbo = false;
let timer = null;

window.onload = () => {
    pageLoad();
}

function pageLoad() {
    document.getElementById("animation").onchange = onAnimationSelectionChange;
    document.getElementById("fontsize").onchange = onFontsizeChange;
    document.getElementById("start").onclick = onStartClick;
    document.getElementById("stop").onclick = onStopClick;
    document.getElementById("turbo").onchange = onTurboChange;
}

function getTextArea() {
    return document.getElementById("text-area");
}

function onAnimationSelectionChange() {
    let textArea = getTextArea();
    let selected = document.getElementById("animation");
    if (selected.options[selected.selectedIndex].value === "Blank")
        isBlank = true;
    else
        isBlank = false;
    animations = ANIMATIONS[selected.options[selected.selectedIndex].value].split("=====\n");
    currentStep = 0;
    textArea.value = ANIMATIONS[selected.options[selected.selectedIndex].value];
}

function onFontsizeChange() {
    let textArea = getTextArea();
    let selected = document.getElementById("fontsize");
    switch (selected.options[selected.selectedIndex].value) {
        case "Tiny":
            textArea.style.fontSize = 7 + "pt";
            break;
        case "Small":
            textArea.style.fontSize = 10 + "pt";
            break;
        case "Medium":
            textArea.style.fontSize = 12 + "pt";
            break;
        case "Large":
            textArea.style.fontSize = 16 + "pt";
            break;
        case "Extra Large":
            textArea.style.fontSize = 24 + "pt";
            break;
        case "XXL":
            textArea.style.fontSize = 32 + "pt";
            break;
    }
}

function setDisabled(disabled) {
    document.getElementById("start").disabled = disabled;
    document.getElementById("animation").disabled = disabled;
    document.getElementById("stop").disabled = !disabled;
}

function onStartClick() {
    if (!isBlank) {
        setDisabled(true);
        if (isTurbo)
            timer = setInterval(doMovement, 50);
        else
            timer = setInterval(doMovement, 250);
    }
    else {
        alert("Please select animation first!");
    }
}

function onStopClick() {
    setDisabled(false);
    clearInterval(timer);
    timer = null;
}

function doMovement() {
    let textArea = getTextArea();
    textArea.value = animations[currentStep];
    currentStep = (currentStep + 1) % animations.length;
}

function onTurboChange() {
    isTurbo = !isTurbo;
    if (timer !== null) {
        clearInterval(timer);
        timer = null;
        if (isTurbo)
            timer = setInterval(doMovement, 50);
        else
            timer = setInterval(doMovement, 250);
    }
}