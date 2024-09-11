/**
 * NETWORK:NETWORK_TRANSITION_FINISH
 *
 * 0x232D3561D0F9CC6E

 * 
 * ------------------------------------------------------------------
 * @param {number} contextParam1
 * @param {number} contextParam2
 * @param {number} contextParam3
 * @returns {boolean}  
 */
export function networkTransitionFinish(contextParam1: number, contextParam2: number, contextParam3: number): boolean {
	const networkTransitionFinish_result = Citizen.invokeNative<boolean>('0x232D3561D0F9CC6E', contextParam1, contextParam2, contextParam3);
	return networkTransitionFinish_result;
}