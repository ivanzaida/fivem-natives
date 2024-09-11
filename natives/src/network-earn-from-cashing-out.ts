/**
 * MONEY:NETWORK_EARN_FROM_CASHING_OUT
 *
 * 0xD96CCBEFF9394523

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 */
export function networkEarnFromCashingOut(amount: number): void {
	const networkEarnFromCashingOut_result = Citizen.invokeNative<void>('0xD96CCBEFF9394523', amount);
	return networkEarnFromCashingOut_result;
}