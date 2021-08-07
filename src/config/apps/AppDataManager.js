export function getApps(type) {
    if (type === "all") return allApps();
    else if (type === "quizs") return quizApps();
    else return puzzleApps();
}

function allApps() {

    let appData = {}

    appData.appCategories = [];

    let quizApps = require('./quizapps.json');
    if (quizApps.apps.length > 0)
        appData.appCategories[0] = quizApps;

    let puzzleApps = require('./puzzleapps.json');
    if (puzzleApps.apps.length > 0)
        appData.appCategories[1] = puzzleApps;

    return appData;
}

function quizApps() {
    let appData = {}

    appData.appCategories = [];

    appData.appCategories[0] = require('./quizapps.json');

    return appData;
}

function puzzleApps() {
    let appData = {}

    appData.appCategories = [];

    appData.appCategories[0] = require('./puzzleapps.json');

    return appData;
}


export function getAppCount(count, type) {
    if (count > 1) {
        if (type === "game") return count + " Games";
        else return count + " Apps";
    } else {
        if (type === "game") return count + " Game";
        else return count + " App";
    }
}

export function getApp(categoryId, appId) {

    console.log(categoryId, " ", appId);

    let appData = {}
    if (categoryId === "quizs") {
        appData = quizApps();
    } else {
        appData = puzzleApps();
    }

    let apps = appData.appCategories[0].apps;

    for (let i = 0; i < apps.length; i++) {
        console.log("is item: ", apps[i].appId === appId);
        if (apps[i].appId === appId) {
            return apps[i];
        } else {
            return "null";
        }
    }

    appData.appCategories[0].apps.map(item => {
        console.log("is item: ", item.appId === appId);
        if (item.appId === appId) {
            return item;
        } else {
            return "null";
        }
    })
    return "null";
}