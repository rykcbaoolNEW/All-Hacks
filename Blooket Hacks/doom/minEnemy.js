(() => {
    const cheat = (async () => {
        let i = document.createElement('iframe');
        document.body.append(i);
        window.alert = i.contentWindow.alert.bind(window);
        i.remove();
        const { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
        if (stateNode.state.phase !== 'select') alert('You must be on the attribute selection page!');
        else stateNode.setState({ enemyCard: { ...stateNode.state.enemyCard, strength: 0, charisma: 0, wisdom: 0 } });
    });
       cheat(); // Directly call the cheat function without checking for updates
})();
