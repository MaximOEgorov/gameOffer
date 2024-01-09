export const OFFER_STATUSES = {
    default: 'default',
    missed: 'missed',
    caught: 'caught'

}

export const GAME_STATUSES = {
    default: 'stopped',
    started: 'started',
    paused: 'paused',
    win: 'win',
    lose: 'lose'
}
export const data =
    {
        settings: {
            rowsCount: 3,
            columnsCount: 3,
            pointsToWin: 20,
            maximumMisses: 3,
            decreaseDeltaInMs: 1900,
            showDeltaInMs: 900,
            isMuted: true
        },
        totalTime: 0,
        step: 0,
        offerStatus: OFFER_STATUSES.default,
        gameStatus: GAME_STATUSES.default,
        coords:
            {
                current: {
                    x: 1,
                    y: 0
                },
                previous: {
                    x: 1,
                    y: 2,
                },
            },
        score: {
            missCount: 0,
            caughtCount: 0
        },
    }

let subscribers = []

function notify() {
    subscribers.forEach(subscriber => {
        subscriber();
//        console.log(subscriber)
    })
    setWinOrLose();
}

export function subscribe(newSubscriber) {
    subscribers.push(newSubscriber);
}

let stepIntervalId;

function runStepInterval() {
    stepIntervalId = setInterval(() => {
        missOffer();
        moveOfferToRandomPosition();
        notify();
    }, data.settings.decreaseDeltaInMs)
    console.log(stepIntervalId)
}

//runStepInterval();

function moveOfferToRandomPosition() {
    let newX = null;
    let newY = null;
    do {
        newX = getRandom(data.settings.columnsCount - 1);
        newY = getRandom(data.settings.rowsCount - 1);
    } while (data.coords.current.x === newX && data.coords.current.y === newY)

    data.coords.current.x = newX;
    data.coords.current.y = newY;
    data.step++;
}

function missOffer() {
    if (data.step > 0) {
        data.offerStatus = OFFER_STATUSES.missed;
        data.score.missCount++;
    }
    data.coords.previous = {...data.coords.current};
    setTimeout(() => {
        data.offerStatus = OFFER_STATUSES.default;
        notify();
    }, data.settings.showDeltaInMs);
}

export function CatchOffer() {
    data.offerStatus = OFFER_STATUSES.caught;
    data.score.caughtCount++;
    data.coords.previous = {...data.coords.current};
    setTimeout(() => {
        data.offerStatus = OFFER_STATUSES.default;
        notify();
    }, data.settings.decreaseDeltaInMs);
    moveOfferToRandomPosition();
    notify();
    clearInterval(stepIntervalId);
    runStepInterval();
}

export function ctrlStartStop() {
    switch (data.gameStatus) {
        case GAME_STATUSES.default :
            data.gameStatus = GAME_STATUSES.started;
            runStepInterval();
            break;
        case GAME_STATUSES.started :
            data.gameStatus = GAME_STATUSES.paused;
            clearInterval(stepIntervalId);
            break;
        case GAME_STATUSES.paused :
            data.gameStatus = GAME_STATUSES.started;
            runStepInterval();
            break;
        case GAME_STATUSES.win :
            data.gameStatus = GAME_STATUSES.started;
            clearScore();
            runStepInterval();
            break;
        case GAME_STATUSES.lose :
            data.gameStatus = GAME_STATUSES.started;
            clearScore();
            runStepInterval();
            break;
    }
}

function setWinOrLose() {
    if (data.gameStatus === GAME_STATUSES.started && data.score.caughtCount === data.settings.pointsToWin) {
 //       debugger
        clearInterval(stepIntervalId);
        data.gameStatus = GAME_STATUSES.win;
//            alert('You win!!!')
    } else if (data.gameStatus === GAME_STATUSES.started && data.score.missCount === data.settings.maximumMisses) {
//        debugger
        clearInterval(stepIntervalId);
        data.gameStatus = GAME_STATUSES.lose;
//            alert('You lose!!!')
    } else if (data.gameStatus === GAME_STATUSES.win || data.gameStatus === GAME_STATUSES.lose) {
        clearInterval(stepIntervalId);
    }
}

// subscribe(setWinOrLose);

function getRandom(N) {
    return Math.floor((Math.random() * (N + 1)));
}

export function clearWinLose () {
    if (data.gameStatus !== GAME_STATUSES.default) {
        data.gameStatus = GAME_STATUSES.default;
    }
}

function clearScore() {
    data.score = {
        ...data.score,
        missCount: 0,
        caughtCount: 0,
    };
    data.step = 0;
    data.coords =
        {
            current: {
                x: -9,
                y: -9
            },
            previous: {
                x: -9,
                y: -9
            }
        }
}

////// Далее методы установки настроек игры ///////////////////////////

export function updateGridSize(newX, newY) {
    data.settings = {...data.settings, columnsCount: newX, rowsCount: newY};
    notify();
}

export function updatePointsToWin(newValue) {
    data.settings = {...data.settings, pointsToWin: Number(newValue)};
    notify();
}

export function updateMaxMisses(newValue) {
    data.settings = {...data.settings, maximumMisses: Number(newValue)};
    notify();
}


export function updateTimes(newDecreaseDeltaInMs, newShowDeltaInMs) {
    data.settings = {...data.settings, decreaseDeltaInMs: newDecreaseDeltaInMs, showDeltaInMs: newShowDeltaInMs};
    notify();
}

window.data = data;