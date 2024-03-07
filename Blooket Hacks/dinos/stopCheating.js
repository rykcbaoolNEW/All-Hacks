(() => {
    const cheat = (async () => {
        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
        stateNode.setState({ isCheating: false });
        stateNode.props.liveGameController.setVal({
            path: `c/${stateNode.props.client.name}/ic`,
            val: false
        });
    });
        cheat(); // Directly call the cheat function without checking for updates
})();
