/**
 * MONEY:NETWORK_EARN_BIKER
 *
 * 0xDA1798FB73681E87

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 */
export function networkEarnBiker(amount: number): void {
	const networkEarnBiker_result = Citizen.invokeNative<void>('0xDA1798FB73681E87', amount);
	return networkEarnBiker_result;
}