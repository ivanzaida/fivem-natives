/**
 * MONEY:NETWORK_EARN_FROM_BUSINESS_BATTLE
 *
 * 0x0FB341836D41663F

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 */
export function networkEarnFromBusinessBattle(amount: number): void {
	const networkEarnFromBusinessBattle_result = Citizen.invokeNative<void>('0x0FB341836D41663F', amount);
	return networkEarnFromBusinessBattle_result;
}