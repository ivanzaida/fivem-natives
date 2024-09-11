/**
 * NETWORK:NETWORK_SESSION_SET_UNIQUE_CREW_ONLY_CREWS_TRANSITION
 *
 * 0x3A777FFCB6CEEC68

 * 
 * ------------------------------------------------------------------
 * @param {boolean} onlyCrews
 */
export function networkSessionSetUniqueCrewOnlyCrewsTransition(onlyCrews: boolean): void {
	const networkSessionSetUniqueCrewOnlyCrewsTransition_result = Citizen.invokeNative<void>('0x3A777FFCB6CEEC68', onlyCrews);
	return networkSessionSetUniqueCrewOnlyCrewsTransition_result;
}