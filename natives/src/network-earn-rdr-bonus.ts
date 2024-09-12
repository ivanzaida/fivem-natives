/**
 * MONEY:NETWORK_EARN_RDR_BONUS
 *
 * 0x090A6F64158BFDC6

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} weapon
 */
export function networkEarnRdrBonus(amount: number, weapon: number = 0): void {
	const networkEarnRdrBonus_result = Citizen.invokeNative<void>('0x090A6F64158BFDC6', amount, weapon);
	return networkEarnRdrBonus_result;
}