export const OFFER_STATUSES = {
    default: 'default',
    missed: 'missed',
    caught: 'caught'

}
export const data =
    {
        settings: {
            rowsCount: 3,
            columnsCount: 3,
            pointsToWin: 10,
            maximumMisses: 3,
            decreaseDeltaInMs: 1900,
            isMuted: true
        },
        offerStatus: OFFER_STATUSES.missed,
        coords:
            {
                current: {
                    x: 2,
                    y: 1
                },
                previous: {
                    x: 0,
                    y: 1
                },
            },
        score: {
            missCount: 1,
            caughtCount: 1
        },
    }

let subscribers = []

function notify() {
    subscribers.forEach(subscriber => subscriber())
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
}

runStepInterval();

function moveOfferToRandomPosition() {
    let newX = null;
    let newY = null;
    do {
        newX = getRandom(data.settings.columnsCount - 1);
        newY = getRandom(data.settings.rowsCount - 1);
    } while (data.coords.current.x === newX && data.coords.current.y === newY)

    data.coords.current.x = newX;
    data.coords.current.y = newY;
}

function missOffer() {
    data.offerStatus = OFFER_STATUSES.missed;
    data.score.missCount++;
    data.coords.previous = {...data.coords.current};
    setTimeout(() => {
        data.offerStatus = OFFER_STATUSES.default;
        notify();
    }, 400);
}

export function CatchOffer() {
    data.offerStatus = OFFER_STATUSES.caught;
    data.score.caughtCount++;
    data.coords.previous = {...data.coords.current};
    setTimeout(() => {
        data.offerStatus = OFFER_STATUSES.default;
        notify();
    }, 400);
    moveOfferToRandomPosition();
    notify();
    clearInterval(stepIntervalId);
    runStepInterval();
}

function getRandom(N) {
    return Math.floor((Math.random() * (N + 1)));
}