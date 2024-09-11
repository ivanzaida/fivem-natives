/**
 * NETWORK:NETWORK_IS_IN_TRANSITION
 *
 * 0xFFB255D6878CB691

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsInTransition(): boolean {
	const networkIsInTransition_result = Citizen.invokeNative<boolean>('0xFFB255D6878CB691', );
	return networkIsInTransition_result;
}