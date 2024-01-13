import {data, OFFER_STATUSES, subscribe} from "../data/game.data.js";

export function Player() {
    const catchAudio = new Audio()

    let prevStatus = data.offerStatus;
    subscribe(() => {
        if (data.offerStatus === OFFER_STATUSES.caught && prevStatus !== OFFER_STATUSES.caught && !data.settings.isMuted) {
            catchAudio.src = 'assets/sounds/catch.wav';
            catchAudio.currentTime = 0;
            catchAudio.play()
        }
        if (data.offerStatus === OFFER_STATUSES.missed && prevStatus !== OFFER_STATUSES.missed && !data.settings.isMuted) {
            catchAudio.src = 'assets/sounds/miss.mp3';
            catchAudio.currentTime = 0;
            catchAudio.play()
        }
        prevStatus = data.offerStatus;
    });
}