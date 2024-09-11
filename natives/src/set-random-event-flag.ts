/**
 * MISC:SET_RANDOM_EVENT_FLAG
 *
 * 0x7EA65A7D5C6CBDB5

 * Call this with TRUE when the player chooses to start a random event. This will allow Bugstar to correctly
 * set the bug owner for random event scripts. The flag will automatically be set to FALSE when the script terminates.
 * If the parameter is true, sets the random event flag to true, if the parameter is false, the function does nothing at all.
 * Does nothing if the mission flag is set.
 * 
 * ------------------------------------------------------------------
 * @param {boolean} thisScriptIsARandomEvent
 */
export function setRandomEventFlag(thisScriptIsARandomEvent: boolean): void {
	const setRandomEventFlag_result = Citizen.invokeNative<void>('0x7EA65A7D5C6CBDB5', thisScriptIsARandomEvent);
	return setRandomEventFlag_result;
}