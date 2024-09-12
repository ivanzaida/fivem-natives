/**
 * SCRIPT:SET_SCRIPT_AS_NO_LONGER_NEEDED
 *
 * 0xFD49725F3FE7EE13

 * 
 * ------------------------------------------------------------------
 * @param {string} scriptname
 */
export function setScriptAsNoLongerNeeded(scriptname: string): void {
	const setScriptAsNoLongerNeeded_result = Citizen.invokeNative<void>('0xFD49725F3FE7EE13', scriptname);
	return setScriptAsNoLongerNeeded_result;
}