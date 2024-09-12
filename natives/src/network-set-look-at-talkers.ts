/**
 * NETWORK:NETWORK_SET_LOOK_AT_TALKERS
 *
 * 0xB85BAB4E28676C4D

 * 
 * ------------------------------------------------------------------
 * @param {boolean} lookAtTalkers
 */
export function networkSetLookAtTalkers(lookAtTalkers: boolean): void {
	const networkSetLookAtTalkers_result = Citizen.invokeNative<void>('0xB85BAB4E28676C4D', lookAtTalkers);
	return networkSetLookAtTalkers_result;
}