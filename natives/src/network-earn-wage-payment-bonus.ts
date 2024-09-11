/**
 * MONEY:NETWORK_EARN_WAGE_PAYMENT_BONUS
 *
 * 0xF031AD8A21A8C1A0

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 */
export function networkEarnWagePaymentBonus(amount: number): void {
	const networkEarnWagePaymentBonus_result = Citizen.invokeNative<void>('0xF031AD8A21A8C1A0', amount);
	return networkEarnWagePaymentBonus_result;
}