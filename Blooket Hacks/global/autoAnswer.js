(() => {
    const cheat = (async () => {
        const { stateNode: { state: { question, stage, feedback }, props: { client: { question: pquestion } } } } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
        try {
            if (question.qType != "typing") if (stage !== "feedback" && !feedback) [...document.querySelectorAll(`[class*="answerContainer"]`)][(question || pquestion).answers.map((x, i) => (question || pquestion).correctAnswers.includes(x) ? i : null).filter(x => x != null)[0]]?.click?.();
            else document.querySelector('[class*="feedback"]')?.firstChild?.click?.();
            else Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(question.answers[0])
        } catch { }
    });
       cheat(); // Directly call the cheat function without checking for updates
})();
