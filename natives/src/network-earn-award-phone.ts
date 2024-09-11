/**
 * MONEY:NETWORK_EARN_AWARD_PHONE
 *
 * 0x61D4C8F1146AD04D

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} context
 */
export function networkEarnAwardPhone(amount: number, context: number): void {
	const networkEarnAwardPhone_result = Citizen.invokeNative<void>('0x61D4C8F1146AD04D', amount, context);
	return networkEarnAwardPhone_result;
}