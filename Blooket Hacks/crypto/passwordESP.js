(() => {
    const cheat = (async () => {
        let { state } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode;
        if (state.stage == "hack") [...document.querySelector('div[class^=styles__buttonContainer]').children].forEach(button => {
            if (button.innerText == state.correctPassword) return;
            button.style.outlineColor = "rgba(255, 64, 64, 0.8)";
            button.style.backgroundColor = "rgba(255, 64, 64, 0.8)";
            button.style.textShadow = "0 0 1px #f33"
        });
    });
        cheat(); // Directly call the cheat function without checking for updates
})();
