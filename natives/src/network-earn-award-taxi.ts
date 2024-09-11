/**
 * MONEY:_NETWORK_EARN_AWARD_TAXI
 *
 * 0xD755F13556CF7C9D

 * 
 * ------------------------------------------------------------------
 * @param {unknown} p0
 * @param {unknown} p1
 */
export function networkEarnAwardTaxi(p0: unknown, p1: unknown): void {
	const networkEarnAwardTaxi_result = Citizen.invokeNative<void>('0xD755F13556CF7C9D', p0, p1);
	return networkEarnAwardTaxi_result;
}