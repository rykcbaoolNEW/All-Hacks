(() => {
    const cheat = (async () => {
        const { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
        stateNode.state.customers.forEach((customer, i) => Object.keys(customer).length && stateNode.removeCustomer(i, true));
    });
    cheat(); // Directly call the cheat function without checking for updates
})();
