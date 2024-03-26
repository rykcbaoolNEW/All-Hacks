(() => {
    const cheat = (async () => {
        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
        stateNode.setState(state => ({ ...state, blooks: state.blooks.map(blook => ({ ...blook, price: [0, 0, 0, 0] })) }));
    });
       cheat(); // Directly call the cheat function without checking for updates
})();
