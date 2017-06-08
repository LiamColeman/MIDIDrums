// named values for instruments
var instrument = {
    'Kick': 0,
    'Snare': 1,
    'HiHat': 2,
    'Tom1': 3,
    'Tom2': 4,
    'Tom3': 5
}

// Plays instrument, uses kit, effects, and pitch from the UI
// Adapted from https://github.com/cwilso/MIDIDrums/blob/master/js/midi.js toggleBeat
function play(instrument) {
    console.log(instruments[instrument]);
    var note = 2; // 0 is off, 1 is light hit, 2 is loud hit
    switch(instrument) {
    case 0:  // Kick
        playNote(currentKit.kickBuffer, false, 0,0,-2, 0.5 * theBeat.effectMix, volumes[note] * 1.0, kickPitch, 0);
        break;
    case 1:  // Snare
        playNote(currentKit.snareBuffer, false, 0,0,-2, theBeat.effectMix, volumes[note] * 0.6, snarePitch, 0);
        break;
    case 2:  // Hihat
        // Pan the hihat according to sequence position.
        playNote(currentKit.hihatBuffer, true, 0.5*rhythmIndex - 4, 0, -1.0, theBeat.effectMix, volumes[note] * 0.7, hihatPitch, 0);
        break;
    case 3:  // Tom 1   
        playNote(currentKit.tom1, false, 0,0,-2, theBeat.effectMix, volumes[note] * 0.6, tom1Pitch, 0);
        break;
    case 4:  // Tom 2   
        playNote(currentKit.tom2, false, 0,0,-2, theBeat.effectMix, volumes[note] * 0.6, tom2Pitch, 0);
        break;
    case 5:  // Tom 3   
        playNote(currentKit.tom3, false, 0,0,-2, theBeat.effectMix, volumes[note] * 0.6, tom3Pitch, 0);
        break;
    }
}

// Map key events from MakeyMakey to instruments
document.addEventListener('keydown', (event) => {
    const keyCode = event.code;
    //console.log(event);
    console.log(keyCode);

    switch (keyCode) {
        case 'ArrowLeft':
            play(instrument.Kick);
            break;
        case 'ArrowRight':
            play(instrument.Snare);
            break;
        case 'ArrowUp':
            play(instrument.Tom3);
            break;
        case 'ArrowDown':
            play(instrument.Tom1);
            break;
        case 'Space':
            play(instrument.Tom2);
            break;
    }
}, false);
