Initialize Variables: Start by initializing an empty array result to store the number of chairs taken from each room.
Also, initialize a variable chairsTaken to keep track of the total number of chairs taken so far.

Iterate Through Rooms: Loop through each room in the rooms array.

Calculate Chairs to Take: For each room, calculate the number of chairs that can be taken.
This is the minimum of the difference between available chairs and current occupants in the room (chairsAvailable - occupants) and the remaining chairs needed (chairsNeeded - chairsTaken).

Update Result and Chairs Taken: Add the number of chairs to take from the current room to the result array.
Also, update the chairsTaken variable by adding the calculated number of chairs.

Check Completion: After processing each room, check if the total number of chairs taken (chairsTaken) is greater than or equal to the required number of chairs (chairsNeeded).
If so, exit the loop as there are enough chairs.

Return Result: Finally, return the result array containing the number of chairs taken from each room.

This approach ensures that the function efficiently finds the required number of chairs by iterating through the rooms
and taking chairs from each room until the required number is met. It stops iterating once enough chairs have been taken.
