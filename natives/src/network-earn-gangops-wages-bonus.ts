/**
 * MONEY:NETWORK_EARN_GANGOPS_WAGES_BONUS
 *
 * 0xCFCD749D4E341FD7

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} contentid
 */
export function networkEarnGangopsWagesBonus(amount: number, contentid: number): void {
	const networkEarnGangopsWagesBonus_result = Citizen.invokeNative<void>('0xCFCD749D4E341FD7', amount, contentid);
	return networkEarnGangopsWagesBonus_result;
}