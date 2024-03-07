(() => {
    const cheat = (async () => {
        let i = document.createElement('iframe');
        document.body.append(i);
        window.prompt = i.contentWindow.prompt.bind(window);
        i.remove();
        let amount = Number(parseInt(prompt("How much crypto would you like?")));
        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
        stateNode.setState({ crypto: amount, crypto2: amount });
        stateNode.props.liveGameController.setVal({
            path: "c/".concat(stateNode.props.client.name),
            val: {
                b: stateNode.props.client.blook,
                p: stateNode.state.password,
                cr: amount
            }
        });
    });
       cheat(); // Directly call the cheat function without checking for updates
})();
