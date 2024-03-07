(() => {
    const cheat = (async () => {
        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
        let { text } = stateNode.state.choices[0];
        let chest = document.querySelector('[class^=styles__feedbackContainer___]');
        if (chest.children.length <= 4) {
            let choice = document.createElement('div')
            choice.style.color = "white";
            choice.style.fontFamily = "Inconsolata,Helvetica,monospace,sans-serif";
            choice.style.fontSize = "2em";
            choice.style.display = "flex";
            choice.style.justifyContent = "center";
            choice.style.marginTop = "675px";
            choice.innerText = text;
            chest.append(choice);
        }
    });
        cheat(); // Directly call the cheat function without checking for updates
})();
