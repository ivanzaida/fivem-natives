/**
 * CFX:SET_RICH_PRESENCE
 *
 * 0X7BDCBD45

 * Sets the player's rich presence detail state for social platform providers to a specified string.
 * 
 * ------------------------------------------------------------------
 * @param {string} presenceState The rich presence string to set.
 */
export function setRichPresence(presenceState: string): void {
	const setRichPresence_result = Citizen.invokeNative<void>('0X7BDCBD45', presenceState);
	return setRichPresence_result;
}