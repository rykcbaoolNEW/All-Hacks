(() => {
    const cheat = (async () => {
        const { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
        for (const [ability, level] of Object.entries(stateNode.state.abilities)) for (let i = 0; i < (10 - level); i++) stateNode.state.game.scene.game.events.emit("level up", ability, stateNode.state.abilities[ability]++);
        stateNode.setState({
            level: stateNode.state.game.scene.level = [1, 3, 5, 10, 15, 25, 35].sort((a, b) => Math.abs(a - stateNode.state.level) - Math.abs(b - stateNode.state.level))[0] - 1
        });
    });
     cheat(); // Directly call the cheat function without checking for updates
})();
