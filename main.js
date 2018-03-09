var JSequence = {}

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

        for (var index in actions)
            window.setTimeout(actions[index], interval += time)
    }
}

/**
 * Executes an array of actions at constant time intervals.
 *
 * @param {number} time - the time to pause between actions
 * @param {Array} actions - an array of functions to execute sequentially
 */
JSequence.timedSequence = function (time, actions) {
    this.timedSequencer(time)(actions)
}

/**
 * Create a sequence of actions to execute at a later time.
 *
 * @param {number} actions - an array of functions to execute sequentially
 * @param {Object} - a sequence object that 
 */
JSequence.createSequence = function (actions) {
    return {
        execute: function (time) {
            JSequence.timedSequencer(time, actions)
        }
    }
}