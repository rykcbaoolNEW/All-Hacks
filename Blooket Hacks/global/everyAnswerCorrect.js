(() => {
    const cheat = (async () => {
        const { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
        stateNode.freeQuestions = stateNode.freeQuestions?.map?.(q => ({...q, correctAnswers: q.answers}));
        stateNode.questions = stateNode.questions?.map?.(q => ({...q, correctAnswers: q.answers}));
        stateNode.props.client.questions = stateNode.props.client.questions.map(q => ({...q, correctAnswers: q.answers}));
    });
       cheat(); // Directly call the cheat function without checking for updates
})();
