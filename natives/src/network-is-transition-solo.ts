/**
 * NETWORK:NETWORK_IS_TRANSITION_SOLO
 *
 * 0x3EC1F83231603B24

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsTransitionSolo(): boolean {
	const networkIsTransitionSolo_result = Citizen.invokeNative<boolean>('0x3EC1F83231603B24', );
	return networkIsTransitionSolo_result;
}