/**
 * NETWORK:NETWORK_TRANSITION_START
 *
 * 0xC92F64C449585057

 * 
 * ------------------------------------------------------------------
 * @param {number} transitionType
 * @param {number} contextParam1
 * @param {number} contextParam2
 * @param {number} contextParam3
 * @returns {boolean}  
 */
export function networkTransitionStart(transitionType: number, contextParam1: number, contextParam2: number, contextParam3: number): boolean {
	const networkTransitionStart_result = Citizen.invokeNative<boolean>('0xC92F64C449585057', transitionType, contextParam1, contextParam2, contextParam3);
	return networkTransitionStart_result;
}