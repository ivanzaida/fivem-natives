/**
 * MONEY:NETWORK_EARN_SPIN_THE_WHEEL_CASH
 *
 * 0x6B07E1D996A69ACF

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 */
export function networkEarnSpinTheWheelCash(amount: number): void {
	const networkEarnSpinTheWheelCash_result = Citizen.invokeNative<void>('0x6B07E1D996A69ACF', amount);
	return networkEarnSpinTheWheelCash_result;
}