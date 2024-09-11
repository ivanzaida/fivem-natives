/**
 * MONEY:NETWORK_EARN_AUTOSHOP_BUSINESS
 *
 * 0x84A07CA553A4F9C3

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} carHash
 */
export function networkEarnAutoshopBusiness(amount: number, carHash: number): void {
	const networkEarnAutoshopBusiness_result = Citizen.invokeNative<void>('0x84A07CA553A4F9C3', amount, carHash);
	return networkEarnAutoshopBusiness_result;
}