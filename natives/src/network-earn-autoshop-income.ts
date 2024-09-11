/**
 * MONEY:NETWORK_EARN_AUTOSHOP_INCOME
 *
 * 0xE16238C3C62697D0

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} missionId
 */
export function networkEarnAutoshopIncome(amount: number, missionId: number): void {
	const networkEarnAutoshopIncome_result = Citizen.invokeNative<void>('0xE16238C3C62697D0', amount, missionId);
	return networkEarnAutoshopIncome_result;
}