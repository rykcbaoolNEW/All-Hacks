(() => {
    const cheat = (async () => {
        for (const collider of Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.state.game.scene.physics.world.colliders._active.filter(x => x.callbackContext?.toString().includes('dmgCd'))) {
            const enemies = collider.object2;
            let _start = enemies.classType.prototype.start;
            enemies.classType.prototype.start = function () { _start.apply(this, arguments), this.speed *= .5 }
            enemies.children.entries.forEach(e => e.speed *= .5);
        }
    });

     cheat(); // Directly call the cheat function without checking for updates
})();
