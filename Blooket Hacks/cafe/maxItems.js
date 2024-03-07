(() => {
    const cheat = (async () => {
        let i = document.createElement('iframe');
        document.body.append(i);
        window.alert = i.contentWindow.alert.bind(window);
        i.remove();
        if (window.location.pathname !== "/cafe/shop") alert("This can only be run in the shop");
        else {
            const { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
            stateNode.setState({ items: Object.fromEntries(Object.entries(stateNode.state.items).map(x => [x[0], 5])) });
        }
    });
       cheat(); // Directly call the cheat function without checking for updates
})();
