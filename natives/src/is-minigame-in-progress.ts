/**
 * MISC:IS_MINIGAME_IN_PROGRESS
 *
 * 0x94A7730DEC6E86C8

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isMinigameInProgress(): boolean {
	const isMinigameInProgress_result = Citizen.invokeNative<boolean>('0x94A7730DEC6E86C8', );
	return isMinigameInProgress_result;
}