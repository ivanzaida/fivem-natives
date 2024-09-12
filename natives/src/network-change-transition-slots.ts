/**
 * NETWORK:NETWORK_CHANGE_TRANSITION_SLOTS
 *
 * 0xE22626CD864678B3

 * 
 * ------------------------------------------------------------------
 * @param {number} publicSlots
 * @param {number} privateSlots
 */
export function networkChangeTransitionSlots(publicSlots: number, privateSlots: number): void {
	const networkChangeTransitionSlots_result = Citizen.invokeNative<void>('0xE22626CD864678B3', publicSlots, privateSlots);
	return networkChangeTransitionSlots_result;
}