/**
 * NETWORK:NETWORK_BAIL_TRANSITION
 *
 * 0x891F7D003513A461

 * 
 * ------------------------------------------------------------------
 * @param {number} context
 * @param {number} param1
 * @param {number} param2
 */
export function networkBailTransition(context: number, param1: number = 0, param2: number = 0): void {
	const networkBailTransition_result = Citizen.invokeNative<void>('0x891F7D003513A461', context, param1, param2);
	return networkBailTransition_result;
}