/**
 * MISC:IS_THIS_A_MINIGAME_SCRIPT
 *
 * 0x204E68849C425DF0

 * 
 * It is possible for more than one minigame script to be running at the same time.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isThisAMinigameScript(): boolean {
	const isThisAMinigameScript_result = Citizen.invokeNative<boolean>('0x204E68849C425DF0', );
	return isThisAMinigameScript_result;
}