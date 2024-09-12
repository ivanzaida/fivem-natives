/**
 * NETWORK:SET_NON_PARTICIPANTS_OF_THIS_SCRIPT_AS_GHOSTS
 *
 * 0x3EE3EB731E022D41

 * 
 * ------------------------------------------------------------------
 * @param {boolean} set
 */
export function setNonParticipantsOfThisScriptAsGhosts(set: boolean): void {
	const setNonParticipantsOfThisScriptAsGhosts_result = Citizen.invokeNative<void>('0x3EE3EB731E022D41', set);
	return setNonParticipantsOfThisScriptAsGhosts_result;
}