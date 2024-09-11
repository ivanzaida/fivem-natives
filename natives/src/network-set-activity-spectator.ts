/**
 * NETWORK:NETWORK_SET_ACTIVITY_SPECTATOR
 *
 * 0x7815F93AD7950188

 * 
 * ------------------------------------------------------------------
 * @param {boolean} isSpectator
 */
export function networkSetActivitySpectator(isSpectator: boolean): void {
	const networkSetActivitySpectator_result = Citizen.invokeNative<void>('0x7815F93AD7950188', isSpectator);
	return networkSetActivitySpectator_result;
}