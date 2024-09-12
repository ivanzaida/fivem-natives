/**
 * MISC:SET_MINIGAME_IN_PROGRESS
 *
 * 0x58B5B800DED763EE

 * 
 * ------------------------------------------------------------------
 * @param {boolean} newState
 */
export function setMinigameInProgress(newState: boolean): void {
	const setMinigameInProgress_result = Citizen.invokeNative<void>('0x58B5B800DED763EE', newState);
	return setMinigameInProgress_result;
}