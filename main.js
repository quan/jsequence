const JSequence = {}

/**
 * Creates a time-based sequencer function that executes actions at constant
 * time intervals.
 *
 * @param {number} time - the time to pause between actions
 * @return {Function} - a sequencer function with the given time interval 
 */
JSequence.timedSequencer = function (time) {
    return function (actions) {
        var interval = 0

        for (let index in actions) {
            interval += time
            window.setTimeout(actions[index], interval)
        }
    }
}
