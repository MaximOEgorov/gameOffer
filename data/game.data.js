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
            decreaseDeltaInMs: 600,
            isMuted: true
        },
        status: OFFER_STATUSES.missed,
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

let subscriber = function () {
}

export function subscribe(newSubscriber) {
    subscriber = newSubscriber;
}

setInterval(() => {
    moveOfferToRandomPosition()
}, data.settings.decreaseDeltaInMs)

function moveOfferToRandomPosition() {
    let newX = null;
    let newY = null;
    do {
        newX = getRandom(data.settings.columnsCount - 1);
        newY = getRandom(data.settings.rowsCount - 1);
    } while (data.coords.current.x === newX && data.coords.current.y === newY)

    data.status = OFFER_STATUSES.missed;
    data.coords.previous = {...data.coords.current};

    data.coords.current.x = newX;
    data.coords.current.y = newY;

    /*setTimeout( () => {
        data.status = OFFER_STATUSES.default;
        subscriber();
    }, 200);*/

    subscriber();

}

function miss() {
    data.status = OFFER_STATUSES.missed;
    data.score.missCount++;
}

export function CatchOffer() {

}

function getRandom(N) {
    return Math.floor((Math.random() * (N + 1)));
}