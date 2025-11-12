/**
 * NETWORK:NETWORK_SESSION_CHANGE_SLOTS
 *
 * 0x6160ECE40167CDEA

 * 
 * num player slots allowed in session, seems to work? 32 max
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} publicSlots
 * @param {number} privateSlots
 */
export function networkSessionChangeSlots(publicSlots: number, privateSlots: number): void {
	const networkSessionChangeSlots_result = Citizen.invokeNative<void>('0x6160ECE40167CDEA', publicSlots, privateSlots);
	return networkSessionChangeSlots_result;
}