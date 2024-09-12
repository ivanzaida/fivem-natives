/**
 * MONEY:NETWORK_EARN_FROM_HANGAR_TRADE
 *
 * 0x543B2C1410A312F3

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} propertyHash
 */
export function networkEarnFromHangarTrade(amount: number, propertyHash: number): void {
	const networkEarnFromHangarTrade_result = Citizen.invokeNative<void>('0x543B2C1410A312F3', amount, propertyHash);
	return networkEarnFromHangarTrade_result;
}