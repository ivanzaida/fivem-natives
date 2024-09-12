/**
 * MONEY:NETWORK_EARN_GANGOPS_SETUP
 *
 * 0xE31A6007C811856C

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {string} contentid
 */
export function networkEarnGangopsSetup(amount: number, contentid: string): void {
	const networkEarnGangopsSetup_result = Citizen.invokeNative<void>('0xE31A6007C811856C', amount, contentid);
	return networkEarnGangopsSetup_result;
}