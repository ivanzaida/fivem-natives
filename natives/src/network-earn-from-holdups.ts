/**
 * MONEY:NETWORK_EARN_FROM_HOLDUPS
 *
 * 0xC972841F26BA2800

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 */
export function networkEarnFromHoldups(amount: number): void {
	const networkEarnFromHoldups_result = Citizen.invokeNative<void>('0xC972841F26BA2800', amount);
	return networkEarnFromHoldups_result;
}