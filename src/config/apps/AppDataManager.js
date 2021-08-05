export function getApps(type) {
    if (type === "all") return allApps();
    else if (type === "quizs") return quizApps();
    else return puzzleApps();
}

function allApps() {

    let appData = {}

    appData.categoryCount = 2;

    appData.quizApps = require('./quizapps.json');
    appData.puzzleApps = require('./puzzleapps.json');

    console.log(appData);

    return "All apps";
}

function quizApps() {
    let appData = {}

    appData.categoryCount = 1;

    appData.quizApps = require('./quizapps.json');

    console.log(appData);

    return "Quiz apps";
}

function puzzleApps() {
    let appData = {}

    appData.categoryCount = 1;

    appData.puzzleApps = require('./puzzleapps.json');

    console.log(appData);

    return "Puzzle apps";
}