/**
 * MONEY:NETWORK_EARN_FROM_BUSINESS_PRODUCT
 *
 * 0xF8E5B0C984357B72

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} businessID
 * @param {number} businessType
 * @param {number} quantity
 */
export function networkEarnFromBusinessProduct(amount: number, businessID: number, businessType: number, quantity: number): void {
	const networkEarnFromBusinessProduct_result = Citizen.invokeNative<void>('0xF8E5B0C984357B72', amount, businessID, businessType, quantity);
	return networkEarnFromBusinessProduct_result;
}