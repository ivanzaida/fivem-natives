/**
 * MONEY:NETWORK_EARN_FROM_ROCKSTAR
 *
 * -

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 */
export function networkEarnFromRockstar(amount: number): void {
	const networkEarnFromRockstar_result = Citizen.invokeNative<void>('-', amount);
	return networkEarnFromRockstar_result;
}