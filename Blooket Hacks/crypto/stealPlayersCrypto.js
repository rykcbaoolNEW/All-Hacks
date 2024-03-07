
(() => {
    const cheat = (async () => {
        let i = document.createElement('iframe');
        document.body.append(i);
        window.prompt = i.contentWindow.prompt.bind(window);
        i.remove();
        let target = prompt("Who's crypto would you like to steal?");
        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
        stateNode.props.liveGameController.getDatabaseVal("c", (players) => {
            if (players && Object.keys(players).map(x => x.toLowerCase()).includes(target.toLowerCase())) {
                let [player, { cr }] = Object.entries(players).find(([name]) => name.toLowerCase() == target.toLowerCase());
                console.log(!!players, players, player, cr, stateNode.state)
                stateNode.setState({
                    crypto: stateNode.state.crypto + cr,
                    crypto2: stateNode.state.crypto + cr
                });
                stateNode.props.liveGameController.setVal({
                    path: "c/".concat(stateNode.props.client.name),
                    val: {
                        b: stateNode.props.client.blook,
                        p: stateNode.state.password,
                        cr: stateNode.state.crypto + cr,
                        tat: `${player}:${cr}`
                    }
                });
                console.log('done')
            }
        })
    });
        cheat(); // Directly call the cheat function without checking for updates
})();
