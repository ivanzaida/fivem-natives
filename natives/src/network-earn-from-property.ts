/**
 * MONEY:NETWORK_EARN_FROM_PROPERTY
 *
 * 0x817A1EC3448E9FF1

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} propertyType
 */
export function networkEarnFromProperty(amount: number, propertyType: number): void {
	const networkEarnFromProperty_result = Citizen.invokeNative<void>('0x817A1EC3448E9FF1', amount, propertyType);
	return networkEarnFromProperty_result;
}