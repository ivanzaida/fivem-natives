/**
 * MONEY:NETWORK_EARN_WAGE_PAYMENT
 *
 * 0x19B6E06EEAE42FD9

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} missionId
 */
export function networkEarnWagePayment(amount: number, missionId: number = 0): void {
	const networkEarnWagePayment_result = Citizen.invokeNative<void>('0x19B6E06EEAE42FD9', amount, missionId);
	return networkEarnWagePayment_result;
}