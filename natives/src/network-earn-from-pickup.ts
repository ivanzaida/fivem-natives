/**
 * MONEY:NETWORK_EARN_FROM_PICKUP
 *
 * 0x1D8AF8B06B2F7D3A

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 */
export function networkEarnFromPickup(amount: number): void {
	const networkEarnFromPickup_result = Citizen.invokeNative<void>('0x1D8AF8B06B2F7D3A', amount);
	return networkEarnFromPickup_result;
}