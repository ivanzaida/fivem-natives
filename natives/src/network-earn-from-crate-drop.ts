/**
 * MONEY:NETWORK_EARN_FROM_CRATE_DROP
 *
 * 0xDB31E3DCD4EC4157

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 */
export function networkEarnFromCrateDrop(amount: number): void {
	const networkEarnFromCrateDrop_result = Citizen.invokeNative<void>('0xDB31E3DCD4EC4157', amount);
	return networkEarnFromCrateDrop_result;
}