/**
 * MONEY:NETWORK_EARN_FIXER_AGENCY_SHORT_TRIP
 *
 * 0x07729F2302AF3353

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} context
 */
export function networkEarnFixerAgencyShortTrip(amount: number, context: number): void {
	const networkEarnFixerAgencyShortTrip_result = Citizen.invokeNative<void>('0x07729F2302AF3353', amount, context);
	return networkEarnFixerAgencyShortTrip_result;
}