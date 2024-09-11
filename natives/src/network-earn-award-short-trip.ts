/**
 * MONEY:NETWORK_EARN_AWARD_SHORT_TRIP
 *
 * 0xFC7D9950A581B4F3

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} context
 */
export function networkEarnAwardShortTrip(amount: number, context: number): void {
	const networkEarnAwardShortTrip_result = Citizen.invokeNative<void>('0xFC7D9950A581B4F3', amount, context);
	return networkEarnAwardShortTrip_result;
}