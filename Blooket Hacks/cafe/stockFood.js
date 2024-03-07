(() => {
    const cheat = (async () => {
        let i = document.createElement('iframe');
        document.body.append(i);
        window.alert = i.contentWindow.alert.bind(window);
        i.remove();
        if (window.location.pathname !== "/cafe") alert("This can't be run in the shop");
        else {
            const { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
            stateNode.setState({ foods: stateNode.state.foods.map(e => ({ ...e, stock: 99, level: 5 })) });
        }
    });
      cheat(); // Directly call the cheat function without checking for updates
})();
