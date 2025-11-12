/**
 * MISC:QUEUE_MISSION_REPEAT_SAVE
 *
 * 0x9F57DA3897B26EAE

 * 
 * Shows the screen which is visible before you redo a mission? The game will make a restoration point where you will cameback when the mission is over.
 * Returns 1 if the message isn't currently on screen
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function queueMissionRepeatSave(): boolean {
	const queueMissionRepeatSave_result = Citizen.invokeNative<boolean>('0x9F57DA3897B26EAE', );
	return queueMissionRepeatSave_result;
}