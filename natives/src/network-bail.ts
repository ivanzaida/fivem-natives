/**
 * NETWORK:NETWORK_BAIL
 *
 * 0xB0926B14C2D3A838

 * 
 * ------------------------------------------------------------------
 * @param {number} context
 * @param {number} param1
 * @param {number} param2
 */
export function networkBail(context: number, param1: number = 0, param2: number = 0): void {
	const networkBail_result = Citizen.invokeNative<void>('0xB0926B14C2D3A838', context, param1, param2);
	return networkBail_result;
}