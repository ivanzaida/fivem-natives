/**
 * MONEY:NETWORK_EARN_AGENCY_SAFE
 *
 * 0x3398D3F6736CF301

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 */
export function networkEarnAgencySafe(amount: number): void {
	const networkEarnAgencySafe_result = Citizen.invokeNative<void>('0x3398D3F6736CF301', amount);
	return networkEarnAgencySafe_result;
}