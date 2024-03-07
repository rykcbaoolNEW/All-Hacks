(() => {
    const cheat = (async () => {
        Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.state.game.scene.physics.world.colliders._active.find(x => x.collideCallback?.toString().includes('0x5dc)')).collideCallback({ active: true }, { active: true, setActive() { }, setVisible() { } });
    });
