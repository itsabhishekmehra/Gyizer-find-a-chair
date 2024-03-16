//Solution CODE:

function meetingRooms(chairsNeeded, rooms) {
    const result = [];
    let chairsTaken = 0;

    for (const room of rooms) {
        const occupants = room[0].length;
        const chairsAvailable = room[1];

        const chairsToTake = Math.min(chairsAvailable - occupants, chairsNeeded - chairsTaken);
        result.push(chairsToTake);

        chairsTaken += chairsToTake;

        if (chairsTaken >= chairsNeeded) {
            break;
        }
    }

    return result;
}

// Example:
const rooms = [['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX', 2]];
const chairsNeeded = 4;
const result = meetingRooms(chairsNeeded, rooms);
console.log(result);                                                                                    // Output: [0, 1, 3]
