(() => {
    const cheat = (async () => {
        let i = document.createElement('iframe');
        document.body.append(i);
        window.alert = i.contentWindow.prompt.bind(window);
        i.remove();
        if (window.location.pathname == "/tower/battle") {
            let coins = parseInt("0" + alert("How many coins would you like?"));
            let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
            try {
                stateNode.props.setTowerCoins(coins);
            } catch { }
        } else alert("You need to be in battle to run this cheat!");
    });
        cheat(); // Directly call the cheat function without checking for updates
})();
