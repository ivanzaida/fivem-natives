/**
 * MONEY:NETWORK_EARN_BB_EVENT_BONUS
 *
 * 0x5CD8E37BA3CBA971

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 */
export function networkEarnBbEventBonus(amount: number): void {
	const networkEarnBbEventBonus_result = Citizen.invokeNative<void>('0x5CD8E37BA3CBA971', amount);
	return networkEarnBbEventBonus_result;
}