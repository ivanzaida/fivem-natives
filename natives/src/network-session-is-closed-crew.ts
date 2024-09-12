/**
 * NETWORK:NETWORK_SESSION_IS_CLOSED_CREW
 *
 * 0x568C5A2B6834D226

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkSessionIsClosedCrew(): boolean {
	const networkSessionIsClosedCrew_result = Citizen.invokeNative<boolean>('0x568C5A2B6834D226', );
	return networkSessionIsClosedCrew_result;
}