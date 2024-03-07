(() => {
    const cheat = (async () => {
        let i = document.createElement('iframe');
        document.body.append(i);
        window.alert = i.contentWindow.alert.bind(window);
        i.remove();
        const { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
        if (stateNode.state.phase !== 'select') alert('You must be on the attribute selection page!');
        else stateNode.setState({ myCard: { ...stateNode.state.myCard, strength: 20, charisma: 20, wisdom: 20 } });
    });
       cheat(); // Directly call the cheat function without checking for updates
})();
