/**
 * GRAPHICS:SET_NEXT_PLAYER_TCMODIFIER
 *
 * 0xAFB25B9F2232474E

 * 
 * Set the next modifier to transition too. if a transition was already in progress, the "next modifier" becomes the current one, the delta gets updated properly, and NextModifierName becomes the new next modifier.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} nextModifierName
 */
export function setNextPlayerTcmodifier(nextModifierName: string): void {
	const setNextPlayerTcmodifier_result = Citizen.invokeNative<void>('0xAFB25B9F2232474E', nextModifierName);
	return setNextPlayerTcmodifier_result;
}