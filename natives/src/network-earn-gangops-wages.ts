/**
 * MONEY:NETWORK_EARN_GANGOPS_WAGES
 *
 * 0xC7791AFBC3D6AAD5

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} contentid
 */
export function networkEarnGangopsWages(amount: number, contentid: number): void {
	const networkEarnGangopsWages_result = Citizen.invokeNative<void>('0xC7791AFBC3D6AAD5', amount, contentid);
	return networkEarnGangopsWages_result;
}