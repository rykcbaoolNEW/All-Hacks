(() => {
    const cheat = (async () => {
        let i = document.createElement('iframe');
        document.body.append(i);
        window.alert = i.contentWindow.alert.bind(window);
        i.remove();
        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
        let glitches = { lb: "Lunch Break", as: "Ad Spam", e37: "Error 37", nt: "Night Time", lo: "#LOL", j: "Jokester", sm: "Slow Mo", dp: "Dance Party", v: "Vortex", r: "Reverse", f: "Flip", m: "Micro" };
        let val = Object.keys(glitches)[Math.floor(Math.random() * Object.keys(glitches).length)];
        stateNode.safe = true;
        stateNode.props.liveGameController.setVal({ path: `c/${stateNode.props.client.name}/tat`, val });
        alert(`Sent a ${glitches[val]} glitch`);
    });
       cheat(); // Directly call the cheat function without checking for updates
})();
